// Strategy Design Pattern

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