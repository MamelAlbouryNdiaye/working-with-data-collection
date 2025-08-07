// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// //  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable

// // Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     console.log(cell1, cell2, cell3, cell4); // print new line

//     // Clear previous data for new row
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // for all chars
//     if (commas == 0) {
//       // put in the appropriate cell, based on commas
//       cell1 += csvStr[i];
//     } else if (commas == 1) {
//       cell2 += csvStr[i];
//     } else if (commas == 2) {
//       cell3 += csvStr[i];
//     } else {
//       cell4 += csvStr[i];
//     }
//   }

//   // If last char in string print final cells
//   if (csvStr.length - 1 == i) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

// //  How can I tell when a cell ends? commas!!!

let numOfColumns= "";

// for(let i in csvStr) {
//     if(csvStr[i]=="\n") numOfColumns += csvStr[i]
// }

/////////////////////////////Part2
let array = [];
numOfColumns = csvStr.split("\n"); /// sptit() crée un nouveau tableau
//console.log(numOfColumns);
for(let i=0; i<numOfColumns.length; i++){
    let str =  numOfColumns[i].split(",");
    array.push(str);
}
console.log(array);
//////////////////////////////////// Part 3 : Transforming Data 
let keys = array[0];
const array2 = array.slice(1).map(row =>{ /////slice(1) ici ignore array[0] et map pertmet de creer un objet {Cle : valeur}
    
    //////test 
    //return {id: array[1][0], name: array[1][1], Occupation: array[1][2],  Age: array[1][3] }
    let object = {};
    keys.forEach((key, i) => {
        object[key.toLowerCase()] = row[i];
    })
    return object;
});

console.log(array2);

///////////////////////Part 4

 array2.sort((a, b) => Number(a.id) - Number(b.id));

// const removed = array2.pop();

// console.log("the removed element :", removed, "\n");

// console.log("the array after the deletion :", array2);

let newObject = {id:"48", name:"Barry", occupation:"Runner", age:"25"}
array2.splice(1,0, newObject);
console.log("\n after the adding newObject", array2);



