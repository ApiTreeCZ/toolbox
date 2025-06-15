import { describe, test } from 'vitest';

import { common } from '../../src/base/rules/index.js';
import { makeTestRule } from '../make-test-rule.js';

const testRule = makeTestRule(common);

describe('base/common', () => {
  test(
    'object-shorthand',
    testRule({
      code: `
      const a = 'b';
      const foo = 'bar';
      
      export const test = {
        a,
        foo: foo,
        baz: () => {},
      };
    `,
      reports: [{ line: 6, column: 9, message: 'Expected property shorthand.', severity: 2 }],
    }),
  );

  test(
    'prefer-destructuring',
    testRule({
      code: `
      const test = { a: 1, b: 2, c: 3 };
      
      const a = test.a;
      const { b } = test;
      const renamedC = test.c;
      
      export function doTest() {
        const tuple = [1, 2];
        const [first] = tuple;
        const second = tuple[1];
        
        return { a, b, renamedC, first, second };
      }
    `,
      reports: [
        { line: 3, column: 13, message: 'Use object destructuring.', severity: 2 },
        { line: 10, column: 15, message: 'Use array destructuring.', severity: 2 },
      ],
    }),
  );
});
