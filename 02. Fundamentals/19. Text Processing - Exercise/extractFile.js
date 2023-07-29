function extractFile(path) {
   let start = path.lastIndexOf("\\");

   let file = path.substring(start+1).split(".");
   let fileName = "";
   let arrayFileName = [];
   let extension = "";

   if(file.length > 2) {
      for (let i = 0; i < file.length-1; i++) {
         arrayFileName.push(file[i]);
      }
      fileName = arrayFileName.join(".");
      extension = file[file.length-1];
   } else {
      fileName = file[0];
      extension = file[1];
   } 

   console.log(`File name: ${fileName}`);
   console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bat.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
