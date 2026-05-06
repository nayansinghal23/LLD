/**
 Problems ->

 1. upiPayment() is only supported by Rupay and we are forcing all the credit cards to implement it.

 Now if we remove upiPayment() from abstract class and only add it in RupayCreditCard class, then we will violate OCP because if in future other credit cards start supporting upiPayment(), we will have to do a lot of changes.

 2. doRefund() is not at all supported by Diners but we are forcing all the credit cards to implement it.

 3. intlPayment() is not at all supported by Rupay but we are forcing all the credit cards to implement it.

 4. Let's say Amex, Diners and Visa expects a pin whereas Rupay doesn't expects a pin means there will be code duplication for Amex, Diners and Visa.


 All these problems violets ->

 1. Liskov Substitution Principle -> Child classes should be substitutable for their parent classes.

 2. Interface Segregation Principle -> Clients should not be forced to depend on interfaces they do not use.
 */

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

    abstract doRefund(): void;

    abstract onlinePayment(): void;

    abstract tapAndPay(): void;

    abstract upiPayment(): void;

    abstract intlPayment(): void;
}