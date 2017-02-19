const fs = require('fs');
var testFile;
testFile = fs.readFile('test.txt', 'utf-8', (err,data) => {
  testFile = data;
});
console.log('TestFile contents = ' + testFile);
setTimeout(() => console.log('TestFile contents = ' + testFile), 100)
