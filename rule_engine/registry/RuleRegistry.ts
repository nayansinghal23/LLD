import { ExpenseType } from "../models/ExpenseType";
import ExpenseRule from "../service/rules/interface/ExpenseRule";
import DisallowRule from "../service/rules/implementation/DisallowRule";
import MaxAmountRule from "../service/rules/implementation/MaxAmountRule";
import TripRule from "../service/rules/interface/TripRule";
import TripTotalMaxRule from "../service/rules/implementation/TripTotalMaxRule";

export default class RuleRegistry {
  // helps to check which type of expense has to be checked with which rules

  getExpenseRuleRegistry(): Map<ExpenseType, ExpenseRule[]> {
    // applicable to particular expense type
    const registry = new Map<ExpenseType, ExpenseRule[]>();

    registry.set(ExpenseType.ENTERTAINMENT, [new DisallowRule()]);
    registry.set(ExpenseType.RESTAURANT, [new MaxAmountRule(75)]);
    registry.set(ExpenseType.AIRFARE, [new DisallowRule()]);

    return registry;
  }

  getAllExpenseRuleRegistry(): ExpenseRule[] {
    // applicable to all expense types
    return [new MaxAmountRule(250)];
  }

  getAllTripRuleRegistry(): TripRule[] {
    // applicable to all trips
    return [new TripTotalMaxRule(2000)];
  }
}
