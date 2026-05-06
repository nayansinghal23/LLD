// Solution - Keeping only the common behaviours in abstract class and creating separate interfaces for the specific behaviours.

// Let's say refund logic is same in Mastercard and Visa, you will again violet DRY principle.

// This also violets DIP (Dependency Inversion Principle) which states that higher level classes should not depend on concrete classes. In simpler terms, one class should try to avoid any possible dependency on concrete classes.

export default abstract class CreditCard {
    #cardNumber: string = '';
    #cardHolder: string = '';
    #expiryDate: string = '';
    #cvv: number = 0;

    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        this.#cardNumber = cardNumber;
        this.#cardHolder = cardHolder;
        this.#expiryDate = expiryDate;
        this.#cvv = cvv;
    }

    abstract swipeAndPay(): void;

    abstract onlinePayment(): void;

    abstract tapAndPay(): void;
}