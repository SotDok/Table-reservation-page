const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #e0e0e0; margin: 0; font-family: 'Arial', sans-serif;";

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);
container.style.cssText = "display: flex; flex-direction: column;    align-items: center; gap: 20px; margin-top: 50px";

//Our title of the restaurant
const h1 = document.createElement("h1");
h1.textContent = "Restaurant ESTIA";
container.appendChild(h1);
h1.style.cssText = "font-size: 36px; background-color: #f0f0f068; color: #333; margin-bottom: 20px; font-family: 'Arial', sans-serif; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);";


//Our form to reserve a table
const availableTablesDiv = document.createElement('div');
availableTablesDiv.id = 'available-tables';
availableTablesDiv.textContent = 'Available Tables for tonight:'
availableTablesDiv.style.cssText = "display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; background-color: #f0f0f068; padding: 20px; border-radius: 10px;";


container.appendChild(availableTablesDiv);

const yourDesiredTable = document.createElement('div');
yourDesiredTable.id = 'desired-table';
yourDesiredTable.textContent = "Your Table is: "
container.appendChild(yourDesiredTable)
yourDesiredTable.style.cssText = "background-color: #f0f0f068; padding: 10px; border-radius: 5px; font-weight: bold;"


//Available tables
const tables = [
    { id: 1, seats: 2, available: true },
    { id: 2, seats: 4, available: true },
    { id: 3, seats: 6, available: true },
    { id: 4, seats: 8, available: true },
    { id: 5, seats: 10, available: true },
    { id: 6, seats: 12, available: true },
    { id: 7, seats: 14, available: true },
    { id: 8, seats: 16, available: true },
    { id: 9, seats: 18, available: true },
    { id: 10, seats: 20, available: true }
]

function renderTables(table){
    
    const tableBtn = document.createElement('button');
    tableBtn.style.cssText = "background-color: green; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
    tableBtn.textContent = `Table: ${table.id} - Seats: ${table.seats}`;
    availableTablesDiv.appendChild(tableBtn);
    console.log(table);


    //Event listener to select button and move it to the desired table section only if it's available, and change the color of the button to red, and make it unavailable (can select only one table at a time)
    tableBtn.addEventListener('click', () => {
        if(table.available){
            table.available = false;
            tableBtn.style.backgroundColor = 'red';
            yourDesiredTable.textContent = `Your Table is: Table ${table.id} with ${table.seats} seats.`
        } else {
            table.available = true;
            tableBtn.style.backgroundColor = 'green';
            yourDesiredTable.textContent = "Your Table is: "
        }
    })
} 

const selectedTable = [];

//FUnction to select table only if available (but can select only one table at a time)
function selectTable(table){
    if(table.available){
        table.available = false;
        selectedTable.push(table);
        yourDesiredTable.textContent = `Your Table is: Table ${table.id} with ${table.seats} seats.`
    } else {
        table.available = true;
        const index = selectedTable.indexOf(table);
        if(index !== -1){
            selectedTable.splice(index, 1);
        }  
        yourDesiredTable.textContent = "Your Table is: "
    }
}
tables.forEach(renderTables);




