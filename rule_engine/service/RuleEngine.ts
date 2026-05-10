import { ExpenseType } from "../models/ExpenseType";
import Expense from "../models/Expense";
import RuleEngineResponse from "./RuleEngineResponse";
import ExpenseRule from "./rules/interface/ExpenseRule";
import TripRule from "./rules/interface/TripRule";

export default interface RuleEngine {
  evaluate(
    expenses: Expense[],
    registry: Map<ExpenseType, ExpenseRule[]>,
    allExpenseRulesRegistry: ExpenseRule[],
    allTripRulesRegistry: TripRule[],
  ): RuleEngineResponse;
}
