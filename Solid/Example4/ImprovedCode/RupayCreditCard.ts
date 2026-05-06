import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";
import UpiCompatibleCreditCard from "./UpiCompatibleCreditCard";

export default class RupayCreditCard extends CreditCard implements UpiCompatibleCreditCard, RefundCompatibleCreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Rupay card");
    }

    onlinePayment(): void {
        console.log("Online payment with Rupay card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Rupay card");
    }

    upiPayment(): void {
        console.log("UPI payment with Rupay card");
    }

    doRefund(): void {
        console.log("Do refund with Rupay card");
    }
}