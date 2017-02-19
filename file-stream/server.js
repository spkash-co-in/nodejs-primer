const fs = require('fs');

var fileStream = fs.createReadStream('test.txt');
fileStream.on('open', () => {console.log('File is open');});
fileStream.on('data', (data) => {console.log('Data = ', data);});
fileStream.on('close', () => {console.log('File is closed');});
