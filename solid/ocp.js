// OCP -> Open/Close Principle

// wrong -> if we want to extend a feature that states that tell me why the boolean ques is true or false, for that we need to modify our existing code.
/*
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: ____________");
        break;
      case "range":
        console.log("Minimum: ____________");
        console.log("Maximum: ____________");
        break;
      default:
        break;
    }
    console.log("");
  });
}
*/

// correct
class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: ____________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Minimum: ____________");
    console.log("Maximum: ____________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        const booleanQuestion = new BooleanQuestion(question.description);
        booleanQuestion.printQuestionChoices();
        break;
      case "multipleChoice":
        const multipleChoiceQuestion = new MultipleChoiceQuestion(
          question.description,
          question.options
        );
        multipleChoiceQuestion.printQuestionChoices();
        break;
      case "text":
        const textQuestion = new TextQuestion(question.description);
        textQuestion.printQuestionChoices();
        break;
      case "range":
        const rangeQuestion = new RangeQuestion(question.description);
        rangeQuestion.printQuestionChoices();
        break;
      default:
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "Do I love JavaScript",
  },
  {
    type: "multipleChoice",
    description: "What is your favourite color?",
    options: ["Red", "Green", "Blue", "Pink"],
  },
  {
    type: "text",
    description: "Tell me about yourself?",
  },
  {
    type: "range",
    description: "What is the speed limit in your city",
  },
];

printQuiz(questions);
