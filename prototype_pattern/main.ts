// The Prototype Pattern is a creational design pattern that allows you to create new objects by cloning an existing instance (the "prototype") instead of creating them from scratch using the new keyword.

import Email from "./Email";
import PremiumEmail from "./PremiumEmail";

export default class Main {
  init() {
    // 1. Create a Standard Email
    const e1 = new Email(
      "sender1@example.com",
      "receiver1@example.com",
      "Subject 1",
      "Body 1",
    );

    // 2. Create a Premium Email
    const p1 = new PremiumEmail(
      "premium@example.com",
      "client@example.com",
      "Priority Support",
      "Your ticket is resolved.",
      "manager@example.com",
      "archive@example.com",
    );

    // 3. Use the Prototype Pattern (Cloning)
    // We don't call 'new' here; we ask the object to copy itself.
    const e1Copy = e1.clone();
    const p1Copy = p1.clone();

    // 4. Modify the copies (Demonstrating they are independent objects)
    e1Copy.setReceiver("new-receiver@example.com");
    p1Copy.setSubject("Updated Priority Support");

    console.log("--- Original Standard Email ---");
    e1.displayEmail();

    console.log("\n--- Cloned & Modified Standard Email ---");
    e1Copy.displayEmail();

    console.log("\n--- Cloned Premium Email (with CC/BCC) ---");
    p1Copy.displayEmail();
  }
}

const main = new Main();
main.init();
