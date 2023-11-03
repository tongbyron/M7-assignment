// GLOBAL VARIABLES
let addForm             // THE ADD FORM
let id                  // THE ID TEXT BOX
let name            // THE NAME TEXT BOX
let ext                 // THE EXT TEXT BOX
let email               // THE EMAIL TEXT BOX
let department          // THE DEPARTMENT TEXT BOX
let employees           // THE EMPLOYEES TABLE

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
addForm         = $('addForm')
id              = $('id')
name            = $('name')
extension       = $('extension')
email           = $('email')
department      = $('department')
employees       = $('employees')
empCount        = $('empCount')

// INTILAIZE THE NUMBER OF EMPLOYEES IN THE TABLE TO ZERO
empCount.value  = 0;

// FUNCTION TO INSERT A CELL INTO ROW
function insertCellRow(row, elementId) {
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell = row.insertCell()
    // GET THE VALUES FROM THE TEXT BOXES
    let newItem = document.getElementById(elementId).value
    let text = document.createTextNode(newItem)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell.appendChild(text)
}

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow()

    insertCellRow(row, 'id');
    insertCellRow(row, 'name');
    insertCellRow(row, 'extension');
    insertCellRow(row, 'email');
    insertCellRow(row, 'department');

    // CREATE THE DELETE BUTTON
    let cellDelete = row.insertCell()
    let deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end'
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    // APPEND DELETE BUTTON TO TR
    cellDelete.appendChild(deleteBtn)

    // RESET THE FORM
    addForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount.value++;
});

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
    if (confirm('Are you sure you want to delete this employee?')) {
        // REMOVE THE SELECTED TR
        employees.deleteRow(e.target.parentNode.parentNode.rowIndex)
        // DECREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
        empCount.value--;
    }
});