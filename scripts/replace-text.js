const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../node_modules/backstopjs/core/util/extendConfig.js"
);
const searchText = "BackstopJS";
const replaceText = "UI Regression";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${filePath}`, err);
    process.exit(1);
  }

  const updatedData = data.split(searchText).join(replaceText);

  fs.writeFile(filePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${filePath}`, err);
      process.exit(1);
    }
    console.log(
      `Replaced all occurrences of '${searchText}' with '${replaceText}' in ${filePath}`
    );
  });
});

// Additional logic to replace 'BackstopJS' with 'UI Regression' in another file
const additionalFilePath = path.join(
  __dirname,
  "../node_modules/backstopjs/core/util/extendConfig.js"
);

fs.readFile(additionalFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${additionalFilePath}`, err);
    process.exit(1);
  }

  const updatedAdditionalData = data.split(searchText).join(replaceText);

  fs.writeFile(additionalFilePath, updatedAdditionalData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${additionalFilePath}`, err);
      process.exit(1);
    }
    console.log(
      `Replaced all occurrences of '${searchText}' with '${replaceText}' in ${additionalFilePath}`
    );
  });
});
