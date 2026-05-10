import Expense from "../../../models/Expense";
import Approved from "../success/Approved";
import ExpenseRule from "../interface/ExpenseRule";
import Rejected from "../error/Rejected";

export default class DisallowRule implements ExpenseRule {
  check(expense: Expense): Approved | Rejected {
    return Rejected.of(
      `${expense.getExpenseType()} expenses are not allowed.`,
    );
  }
}
