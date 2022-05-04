// global var saves the previous column, used to determine if the same column is clicked again
let cPrev = -1;

function sortBy(columnIndex) {
    // number of rows
    const rows = document.getElementById("sortable").rows.length;
    // num of columns
    const columns = document.getElementById("sortable").rows[0].cells.length;
    // create an empty 2d array
    const arrTable = [...Array(rows)].map(e => Array(columns));

    // cycle through rows
    for (let ro=0; ro<rows; ro++) {
        // cycle through columns
        for (let co=0; co<columns; co++) {
            // assign the value in each row-column to a 2d array by row-column
            arrTable[ro][co] = document.getElementById("sortable").rows[ro].cells[co].innerHTML;
        }
    }

    // remove the header row from the array, and save it
    let th = arrTable.shift(); 

    // different column is clicked, so sort by the new column
    if (columnIndex !== cPrev) {
        arrTable.sort(
            function (a, b) {
                if (a[columnIndex] === b[columnIndex]) {
                    return 0;
                } else {
                    return (a[columnIndex] < b[columnIndex]) ? -1 : 1;
                }
            }
        );
    } else {
        // if the same column is clicked then reverse the array
        arrTable.reverse();
    }
    
    // save in previous c
    cPrev = columnIndex;

    // put the header back in to the array
    arrTable.unshift(th);

    // cycle through rows-columns placing values from the array back into the html table
    for (let ro=0; ro<rows; ro++) {
        for (let co=0; co<columns; co++) {
            document.getElementById("sortable").rows[ro].cells[co].innerHTML = arrTable[ro][co];
        }
    }
}