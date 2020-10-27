const ToCsv = require("sqlite-to-csv");

let filePath = "./database.sqlite";
let outputPath = "./output_csv";
let logPath = ".";

let sqliteToCsv = new ToCsv()
  .setFilePath(filePath)
  .setOutputPath(outputPath)
  .setLogPath(logPath);

sqliteToCsv
  .convert()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });
