// Decorator Design Pattern -> The Decorator pattern is a structural design pattern that allows you to dynamically add new behavior to objects. The Decorator pattern is useful when you want to add behavior to individual objects, rather than to an entire class of objects. It is also useful when you want to add behavior without affecting the existing hierarchy, or when you want to add behavior that can be changed dynamically at runtime.

// https://dev.to/jmalvarez/decorator-pattern-in-typescript-na5

class FileDataSource {
  data = null;
  constructor(fileName) {
    this.fileName = fileName;
  }

  writeData(data) {
    console.log(
      `[FileDataSource] Writing to file: ${this.fileName}, data: ${data}`
    );
    this.data = data;
  }

  readData() {
    console.log(
      `[FileDataSource] Reading from file: ${this.fileName}, data: ${this.data}`
    );
    return this.data;
  }
}

// This class will be the base class for the decorators.

class DataSourceDecorator {
  constructor(source) {
    this.source = source;
  }

  writeData(data) {
    this.source.writeData(data);
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  encrypt(data) {
    const base64Data = btoa(data);
    console.log(`[EncryptionDecorator] Encrypted data: ${base64Data}`);
    super.writeData(base64Data);
  }
}

const file = new FileDataSource(".env");
const encryptedFile = new EncryptionDecorator(file);
console.log(file);
encryptedFile.encrypt("SECRET=abcdef");
console.log(file);
