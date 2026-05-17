import IPrototype from "./Prototype";

export default class Email implements IPrototype {
  #sender: string;
  #receiver: string;
  #subject: string;
  #body: string;

  constructor(sender: string, receiver: string, subject: string, body: string) {
    this.#sender = sender;
    this.#receiver = receiver;
    this.#subject = subject;
    this.#body = body;
  }

  clone(): Email {
    return new Email(this.#sender, this.#receiver, this.#subject, this.#body);
  }

  getSender(): string {
    return this.#sender;
  }

  getReceiver(): string {
    return this.#receiver;
  }

  getSubject(): string {
    return this.#subject;
  }

  getBody(): string {
    return this.#body;
  }

  setSender(sender: string) {
    this.#sender = sender;
  }

  setReceiver(receiver: string) {
    this.#receiver = receiver;
  }

  setSubject(subject: string) {
    this.#subject = subject;
  }

  setBody(body: string) {
    this.#body = body;
  }

  displayEmail() {
    console.log("Sender : ", this.#sender);
    console.log("Receiver : ", this.#receiver);
    console.log("Subject : ", this.#subject);
    console.log("Body : ", this.#body);
  }
}
