// Builder Design Pattern -> This pattern is useful when you need to create objects that have many different working parts and they come all together to create one single object.

// Builder Design Pattern has 4 parts :-
// 1) First part is the product or the complex object we are going to create(Desktop).
// 2) Builder corresponsding to that product(DesktopBuilder). It is an interface which will tell that these functions need to be implemnted by ConcreteBuilder
// 3) ConcreteBuilder(DellDesktopBuilder and HPDesktopBuilder). ConcreteBuilder will actually do the building like they will build their own type of mouse, keyboard, ram, processor, etc which is mentioned in the DesktopBuilder.
// 4) Director -> Responsible for actually generation of product. Will check whether all the steps have been followed or not. It is going to direct the actual process.

class Desktop {
  constructor(monitor, keyboard, mouse, speaker, ram, processor, motherBoard) {
    this.monitor = monitor;
    this.keyboard = keyboard;
    this.mouse = mouse;
    this.speaker = speaker;
    this.ram = ram;
    this.processor = processor;
    this.motherBoard = motherBoard;
  }

  showSpecs() {
    console.log("___________________________________________");
    console.log(`Monitor: ${this.monitor}`);
    console.log(`KeyBoard: ${this.keyboard}`);
    console.log(`Mouse: ${this.mouse}`);
    console.log(`Speaker: ${this.speaker}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Processor: ${this.processor}`);
    console.log(`Mother Board: ${this.motherBoard}`);
    console.log("___________________________________________");
  }
}

class DesktopBuilder {
  constructor() {
    this.desktop = new Desktop();
  }
  buildMonitor() {}
  buildKeyBoard() {}
  buildMouse() {}
  buildSpeaker() {}
  buildRam() {}
  buildProcessor() {}
  buildMotherBoard() {}
  getDesktop() {
    return this.desktop;
  }
}

class DellDesktopBuilder extends DesktopBuilder {
  buildMonitor() {
    this.desktop.monitor = "Dell Monitor";
  }

  buildKeyBoard() {
    this.desktop.keyboard = "Dell KeyBoard";
  }

  buildMouse() {
    this.desktop.mouse = "Dell Mouse";
  }

  buildSpeaker() {
    this.desktop.speaker = "Dell Speaker";
  }

  buildRam() {
    this.desktop.ram = "Dell RAM";
  }

  buildProcessor() {
    this.desktop.processor = "Dell Processor";
  }

  buildMotherBoard() {
    this.desktop.motherBoard = "Dell MotherBoard";
  }
}

class HPDesktopBuilder extends DesktopBuilder {
  buildMonitor() {
    this.desktop.monitor = "HP Monitor";
  }

  buildKeyBoard() {
    this.desktop.keyboard = "HP KeyBoard";
  }

  buildMouse() {
    this.desktop.mouse = "HP Mouse";
  }

  buildSpeaker() {
    this.desktop.speaker = "HP Speaker";
  }

  buildRam() {
    this.desktop.ram = "HP RAM";
  }

  buildProcessor() {
    this.desktop.processor = "HP Processor";
  }

  buildMotherBoard() {
    this.desktop.motherBoard = "HP MotherBoard";
  }
}

class DesktopDirector {
  constructor(desktopBuilder) {
    this.desktopBuilder = desktopBuilder;
  }

  buildDesktop() {
    this.desktopBuilder.buildMonitor();
    this.desktopBuilder.buildMouse();
    this.desktopBuilder.buildRam();
    this.desktopBuilder.buildProcessor();
    this.desktopBuilder.buildKeyBoard();
    this.desktopBuilder.buildSpeaker();
    this.desktopBuilder.buildMotherBoard();
    return this.desktopBuilder.getDesktop();
  }
}

const hp = new HPDesktopBuilder();
const dell = new DellDesktopBuilder();

const director1 = new DesktopDirector(hp);
const director2 = new DesktopDirector(dell);

const desktop1 = director1.buildDesktop();
const desktop2 = director2.buildDesktop();

desktop1.showSpecs();
desktop2.showSpecs();
