const path = require('path');
console.log(__filename);
console.log(__dirname);
console.log('Base Name:', path.basename(__filename));
console.log('Directory Name:', path.dirname(__filename));
console.log('File Extension:', path.extname(__filename));
console.log('Parsed Path:', path.parse(__filename));
console.log('Formatted Path:', path.format({
  dir: __dirname,
  base: 'example.txt'
}));
console.log('Joined Path:', path.join(__dirname, 'subdir', 'file.txt'));
console.log('Resolved Path:', path.resolve('subdir', 'file.txt'));
console.log(path.isAbsolute(__dirname) ? 'Absolute Path' : 'Relative Path');
