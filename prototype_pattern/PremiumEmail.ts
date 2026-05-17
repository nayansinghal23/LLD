import Email from "./Email";

export default class PremiumEmail extends Email {
  #cc: string;
  #bcc: string;

  constructor(
    sender: string,
    receiver: string,
    subject: string,
    body: string,
    cc: string,
    bcc: string,
  ) {
    super(sender, receiver, subject, body);
    this.#cc = cc;
    this.#bcc = bcc;
  }

  clone(): PremiumEmail {
    return new PremiumEmail(
      this.getSender(),
      this.getReceiver(),
      this.getSubject(),
      this.getBody(),
      this.#cc,
      this.#bcc,
    );
  }

  getCc(): string {
    return this.#cc;
  }

  getBcc(): string {
    return this.#bcc;
  }

  setCc(cc: string) {
    this.#cc = cc;
  }

  setBcc(bcc: string) {
    this.#bcc = bcc;
  }

  displayEmail() {
    super.displayEmail();
    console.log("CC : ", this.#cc);
    console.log("BCC : ", this.#bcc);
  }
}
