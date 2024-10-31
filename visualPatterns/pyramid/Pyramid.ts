const cellPattern = "*";
const emptyPattern = " ";

const createPyramidWithNRows = (numOfRows: number) => {
   const totalSpace = numOfRows + numOfRows - 1;
   const row = new Array(totalSpace).fill(emptyPattern);
   const mid = Math.ceil(totalSpace / 2) - 1;
   console.log("mid: ", mid);
   for (let i = 0; i < numOfRows; i++) {
       row[mid + i] = cellPattern;
       row[mid - i] = cellPattern;
       console.log(row.join(""));
   }
};


const createInvertedPyramidOfNRows = (numOfRows: number) => {
   const totalSpace = numOfRows + numOfRows - 1;
   const row = new Array(totalSpace).fill(cellPattern);
   const mid = Math.ceil(totalSpace / 2) - 1;

   for (let i = 0; i <= mid; i++) {
      console.log(row.join(""));
      row[i] = emptyPattern;
      row[totalSpace - 1 - i] = emptyPattern; 
   }
};