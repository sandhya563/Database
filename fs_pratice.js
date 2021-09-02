const fs = require(`fs`)
// for create new file 
fs.writeFileSync(`read.text`,`Hello guys how arev you`);

// fron append data in file
fs.appendFileSync(`read.text` , ` I am fine dear`)

// read data from the file and convert data in to text format
const buf_data = fs.readFileSync(`read.text`);
org_data = buf_data.toString();
console.log(org_data)

// for rename file
fs.renameSync(`read.text`,`data.text`)

// for delete file 
fs.unlinkSync(`data.text`)

// ###################################################

// const fs = require('fs').promises;

// async function deleteFile(filePath) {
//   try {
//     await fs.unlink(filePath);
//     console.log(`Deleted ${filePath}`);
//   } catch (error) {
//     console.error(`Got an error trying to delete the file: ${error.message}`);
//   }
// }

// deleteFile('groceries.csv');