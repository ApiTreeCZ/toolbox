import type { Linter } from 'eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { describe, test } from 'vitest';

import { common } from '../../src/react/rules/index.js';
import { makeTestRule } from '../make-test-rule.js';

const testRule = makeTestRule(common, { react, 'react-hooks': reactHooks } as Linter.Config['plugins']);

describe('react/common', () => {
  test(
    'react/destructuring-assignment',
    testRule({
      code: `
        import React from 'react';
        
        interface Props {
          foo: string;
          bar: number;
        }
        
        export function CorrectComponent({ foo, bar }: Props) {
          return <div>{foo} {bar}</div>;
        }
        
        export function IncorrectComponent(props: Props) {
          const { foo, bar } = props;
          return <span>{foo} {bar}</span>;
        }
        
        export function AnotherIncorrectComponent(props: Props) {
          return <p>{props.foo} {props.bar}</p>;
        }
      `,
      reports: [
        { line: 13, column: 17, message: 'Must destructure props in the function signature.', severity: 2 },
        { line: 18, column: 22, message: 'Must use destructuring props assignment', severity: 2 },
        { line: 18, column: 34, message: 'Must use destructuring props assignment', severity: 2 },
      ],
    }),
  );
});
