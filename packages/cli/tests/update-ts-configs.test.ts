import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import type { Package } from '@manypkg/get-packages';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { updateTsConfigs } from '../src/commands/sync-project-references/update-ts-configs.js';

const tsConfigs = { default: 'tsconfig.json', build: 'tsconfig.build.json' };

const references = [
  { default: { path: '../a/tsconfig.build.json' }, build: { path: '../a/tsconfig.build.json' } },
  { default: { path: '../b/tsconfig.json' }, build: undefined },
];

describe('updateTsConfigs', () => {
  let directory: string;
  let workspacePackage: Package;

  beforeEach(async () => {
    directory = await mkdtemp(path.join(tmpdir(), 'apitree-cli-'));
    workspacePackage = { dir: directory, relativeDir: '.', packageJson: { name: 'pkg', version: '0.0.0' } };
  });

  afterEach(async () => {
    await rm(directory, { force: true, recursive: true });
  });

  it('keeps comments, trailing commas and other properties when updating references', async () => {
    const tsConfigPath = path.join(directory, 'tsconfig.json');
    await writeFile(
      tsConfigPath,
      [
        '{',
        '  // Shared library config.',
        '  "extends": "@apitree.cz/ts-config/library",',
        '  "compilerOptions": {',
        '    /* Emit to dist. */',
        '    "outDir": "./dist",',
        '  },',
        '  "references": [],',
        '}',
        '',
      ].join('\n'),
    );

    const paths = await updateTsConfigs({ references, tsConfigs, workspacePackage });

    expect(paths).toEqual([tsConfigPath]);
    expect(await readFile(tsConfigPath, 'utf8')).toBe(
      [
        '{',
        '  // Shared library config.',
        '  "extends": "@apitree.cz/ts-config/library",',
        '  "compilerOptions": {',
        '    /* Emit to dist. */',
        '    "outDir": "./dist",',
        '  },',
        '  "references": [{"path":"../a/tsconfig.build.json"},{"path":"../b/tsconfig.json"}],',
        '}',
        '',
      ].join('\n'),
    );
  });

  it('adds missing references property and uses build references in build config', async () => {
    const tsConfigPath = path.join(directory, 'tsconfig.build.json');
    await writeFile(tsConfigPath, '{\n  // Build only.\n  "extends": "./tsconfig.json"\n}\n');

    await updateTsConfigs({
      references: [{ default: { path: '../a/tsconfig.json' }, build: { path: '../a/tsconfig.build.json' } }],
      tsConfigs,
      workspacePackage,
    });

    expect(await readFile(tsConfigPath, 'utf8')).toBe(
      '{\n  // Build only.\n  "extends": "./tsconfig.json","references": [{"path":"../a/tsconfig.build.json"}]\n}\n',
    );
  });

  it('does not write or report TS configs whose references are already in sync', async () => {
    const tsConfigPath = path.join(directory, 'tsconfig.json');
    const text =
      '{\n  // Keep me.\n  "references": [{ "path": "../a/tsconfig.build.json" }, { "path": "../b/tsconfig.json" }]\n}\n';
    await writeFile(tsConfigPath, text);

    const paths = await updateTsConfigs({ references, tsConfigs, workspacePackage });

    expect(paths).toEqual([]);
    expect(await readFile(tsConfigPath, 'utf8')).toBe(text);
  });

  it('rejects when a TS config cannot be parsed', async () => {
    const tsConfigPath = path.join(directory, 'tsconfig.json');
    const text = '{\n  "compilerOptions": {\n}\n';
    await writeFile(tsConfigPath, text);

    await expect(updateTsConfigs({ references, tsConfigs, workspacePackage })).rejects.toThrow(
      `Error parsing TS config file: ${tsConfigPath}`,
    );
    expect(await readFile(tsConfigPath, 'utf8')).toBe(text);
  });
});
