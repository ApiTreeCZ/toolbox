import type { Linter } from 'eslint';
import { ESLint } from 'eslint';
import type { TestContext } from 'vitest';

interface TestRuleReport {
  /**
   * The line number where the issue is expected to occur.
   */
  line: number;
  /**
   * The column number where the issue is expected to occur.
   */
  column: number;
  /**
   * The message that should be reported by the rule.
   */
  message: string;
  /**
   * The severity level of the issue (1 for warning, 2 for error).
   */
  severity: Linter.Severity;
}

interface TestRuleProps {
  /**
   * Code snippet to test the rule against.
   */
  code: string;
  /**
   * Expected reported issues from the rule.
   */
  reports: TestRuleReport[];
}

/**
 * Creates a test function for a specific ESLint ruleset.
 *
 * @param rules - The ESLint rules to apply for the test.
 * @param plugins - Optional ESLint plugins to include in the configuration.
 * @returns A function that takes a test context and runs the rule against the provided code.
 */
export const makeTestRule =
  (rules: Linter.RulesRecord, plugins?: Linter.Config['plugins']) =>
  ({ code, reports }: TestRuleProps) =>
  async ({ expect, task: { name: ruleId } }: TestContext) => {
    const baseConfig: Linter.Config = {
      rules: { [ruleId]: rules[ruleId] },
      settings: { react: { version: 'detect' } },
    };

    if (plugins) {
      baseConfig.plugins = plugins;
    }

    const linter = new ESLint({
      baseConfig,
      cache: false,
      // Filenames in tests are generic placeholders, casing is irrelevant
      ruleFilter: ({ ruleId }) => ruleId !== 'unicorn/filename-case',
    });

    expect(reports.length, 'At least one rule report must be specified for the test').toBeGreaterThanOrEqual(1);
    const [{ messages }] = await linter.lintText(code.trimStart());

    expect(messages, `Expected ${reports.length} message(s) to be reported for rule "${ruleId}"`).toHaveLength(
      reports.length,
    );

    for (const [index, report] of reports.entries()) {
      expect(messages[index]).toMatchObject({ ...report, ruleId });
    }
  };
