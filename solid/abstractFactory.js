// Abstract Factory => Client asks for a Toyota Car or Bike, Hundai Car or Bike

// eg-2:- There are different OS and they have different buttons, textbox, etc.

// Diagram ->
/*
        Client
        /
      OSFactory
      /        \ 
WindowsFactory LinuxFactory
       /    \           / \
    Button Textbox Button Textbox

Let's assume a new OS comes, so only the factory code should change & client should remain as it is
*/

class Button {
  constructor(color, shape) {
    this.color = color;
    this.shape = shape;
  }
}

class WindowButton extends Button {
  constructor(color, shape) {
    super(color, shape);
  }
  press() {
    console.log("Windows Button Pressed");
  }
}

class LinuxButton extends Button {
  constructor(color, shape) {
    super(color, shape);
  }
  press() {
    console.log("Linux Button Pressed");
  }
}

class TextBox {
  constructor(color, shape) {
    this.color = color;
    this.shape = shape;
  }
}

class WindowTextBox extends TextBox {
  constructor(color, shape) {
    super(color, shape);
  }
  showText() {
    console.log("Windows TextBox");
  }
}

class LinuxTextBox extends TextBox {
  constructor(color, shape) {
    super(color, shape);
  }
  showText() {
    console.log("Linux TextBox");
  }
}

class OS {
  constructor() {
    this.product = null;
  }
}

class Window extends OS {
  constructor() {
    super();
  }
  createProduct(productType) {
    switch (productType) {
      case "button":
        const windowButton = new WindowButton("Red", "Circle");
        windowButton.press();
        this.product = windowButton;
        break;
      case "textbox":
        const windowTextBox = new WindowTextBox("Grey", "Rectangle");
        windowTextBox.showText();
        this.product = windowTextBox;
        break;
      default:
        break;
    }
    return this.product;
  }
}

class Linux extends OS {
  constructor() {
    super();
  }
  createProduct(productType) {
    switch (productType) {
      case "button":
        const linuxButton = new LinuxButton("Green", "Sqaure");
        linuxButton.press();
        this.product = linuxButton;
        break;
      case "textbox":
        const linuxTextBox = new LinuxTextBox("Grey", "Rectangle");
        linuxTextBox.showText();
        this.product = linuxTextBox;
        break;
      default:
        break;
    }
    return this.product;
  }
}

class OSFactory {
  constructor() {
    this.product = null;
  }
  createOSType(OSType, productType) {
    switch (OSType) {
      case "windows":
        this.product = new Window().createProduct(productType);
        break;
      case "linux":
        this.product = new Linux().createProduct(productType);
        break;
      default:
        break;
    }
    return this.product;
  }
}

const factory = new OSFactory();
console.log(factory.createOSType("windows", "button"));
console.log(factory.createOSType("windows", "textbox"));
console.log(factory.createOSType("linux", "button"));
console.log(factory.createOSType("linux", "textbox"));
