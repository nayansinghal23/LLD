// Adapter Design Pattern -> If there are 2 incompatible objects and we want to use them as a single entity

// Let's assume we have an XML data, and we have a tool that analyse the data. The tool only takes data in json format but we have data in XML form. Now, we will put an adapter in between which will convert XML to JSON but user doesn't know about this adapter.

class XMLData {
  constructor(xmlData) {
    this.xmlData = xmlData;
  }

  getXMLData() {
    return this.xmlData;
  }
}

class DataAnalyticsTool {
  constructor() {
    this.jsonData = null;
  }

  analyseData(jsonData) {
    this.jsonData = jsonData;
    console.log(`Data Analyzed successfully : ${this.jsonData}`);
  }
}

class Client {
  constructor() {}

  processData(tool) {
    tool.convertXMLDataToJSON();
  }
}

class Adapter extends DataAnalyticsTool {
  constructor(xmlData) {
    super();
    this.xmlData = xmlData;
  }

  convertXMLDataToJSON() {
    console.log(
      `Converting XML Data : '${this.xmlData.getXMLData()}' to JSON Data`
    );
    super.analyseData("XMLConvertedToJSONData");
  }
}

const xmlData = new XMLData("Sample XML Data");
const tool = new Adapter(xmlData);
const client = new Client();
client.processData(tool);
