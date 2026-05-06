import CreditCard from "./CreditCard";

export default class AmexCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Amex card");
    }

    onlinePayment(): void {
        console.log("Online payment with Amex card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Amex card");
    }
}