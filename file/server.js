const fs = require('fs');
var testFile;
testFile = fs.readFileSync('test.txt','utf8');
console.log('TestFile contents = ' + testFile);
