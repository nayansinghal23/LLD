import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";

export default class MasterCardCreditCard extends CreditCard implements RefundCompatibleCreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Mastercard");
    }

    onlinePayment(): void {
        console.log("Online payment with Mastercard");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Mastercard");
    }

    doRefund(): void {
        console.log("Do refund with Mastercard");
    }
}