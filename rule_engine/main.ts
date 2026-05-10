import { ExpenseType } from "./models/ExpenseType";
import Expense from "./models/Expense";
import SimpleRuleEngine from "./service/SimpleRuleEngine";
import RuleRegistry from "./registry/RuleRegistry";

class Main {
  #expenses: Expense[];

  constructor() {
    this.#expenses = [];
  }

  generateExpense(expense: Expense) {
    this.#expenses.push(expense);
  }

  getExpenses() {
    return this.#expenses;
  }

  validateTripExpense() {
    const simpleRuleEngine = new SimpleRuleEngine();
    const registry = new RuleRegistry();
    return simpleRuleEngine.evaluate(
      this.#expenses,
      registry.getExpenseRuleRegistry(),
      registry.getAllExpenseRuleRegistry(),
      registry.getAllTripRuleRegistry(),
    );
  }
}

const main = new Main();
main.generateExpense(new Expense("001", "trip1", "80", ExpenseType.RESTAURANT));
main.generateExpense(new Expense("002", "trip1", "120", ExpenseType.SUPPLIES));
main.generateExpense(new Expense("003", "trip1", "199", ExpenseType.AIRFARE));
main.generateExpense(new Expense("004", "trip1", "260", ExpenseType.HOTEL));
main.generateExpense(new Expense("005", "trip1", "70", ExpenseType.RESTAURANT));
main.generateExpense(
  new Expense("006", "trip1", "40", ExpenseType.ENTERTAINMENT),
);
console.log(main.validateTripExpense());
