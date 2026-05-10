import RuleEngine from "./RuleEngine";
import RuleEngineResponse from "./RuleEngineResponse";
import { ExpenseType } from "../models/ExpenseType";
import ExpenseRule from "./rules/interface/ExpenseRule";
import TripRule from "./rules/interface/TripRule";
import Expense from "../models/Expense";

export default class SimpleRuleEngine implements RuleEngine {
  evaluate(
    expenses: Expense[],
    registry: Map<ExpenseType, ExpenseRule[]>,
    allExpenseRulesRegistry: ExpenseRule[],
    allTripRulesRegistry: TripRule[],
  ): RuleEngineResponse {
    const expense_level: string[] = [];

    for (const expense of expenses) {
      const rules = registry.get(expense.getExpenseType()) || [];

      // check for individually applicable rules
      rules.forEach((rule) => expense_level.push(rule.check(expense).getMessage()));

      // expense level check for all rules
      allExpenseRulesRegistry.forEach((rule) =>
        expense_level.push(rule.check(expense).getMessage()),
      );
    }

    return {
      expense_level,
      trip_level: allTripRulesRegistry.map((rule) => rule.check(expenses).getMessage()),
    };
  }
}
