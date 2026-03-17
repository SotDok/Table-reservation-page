const body = document.querySelector("body");
body.style.cssText = `
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  min-height: 100vh; 
  background-color: #f0f0f0; 
  margin: 0; 
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;


const container = document.createElement("div");
container.id = "container";

container.style.cssText = `
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 20px; 
  width: 100%;
  max-width: 900px;
  background-color: #b9ddfb;
  padding: 30px;
  justify-content: flex-start;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`;
body.appendChild(container);

//Our title of the restaurant
const h1 = document.createElement("h1");
h1.textContent = "Restaurant ESTIA";
container.appendChild(h1);
h1.style.cssText = `
  font-size: 36px; 
  color: #333; 
  margin-bottom: 10px; 
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
`;

const panels = document.createElement('div');
panels.style.cssText =  `
  display: flex; 
  gap: 20px; 
  width: 100%; 
  justify-content: space-between;
  flex-wrap: wrap;
`;

container.appendChild(panels);

//Our form to reserve a table
const availableTablesDiv = document.createElement('div');
availableTablesDiv.id = 'available-tables';
availableTablesDiv.textContent = 'Available Tables for tonight:'
availableTablesDiv.style.cssText = `
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  text-align: center;
  font-size: 22px;
  justify-content: center;
  padding: 10px;
`;




const yourDesiredTable = document.createElement('div');
yourDesiredTable.id = 'desired-table';
yourDesiredTable.textContent = "Your Table is: "
yourDesiredTable.style.cssText = `
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  background: linear-gradient(135deg, #ec9c67, #ffaaa5);
  color: #333;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  transition: transform 0.2s, box-shadow 0.2s;
`;



panels.appendChild(availableTablesDiv);
panels.appendChild(yourDesiredTable)
container.appendChild(panels);

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

let selectedTableButton = null;

function renderTables(table){
    
    const tableBtn = document.createElement('button');
    tableBtn.style.cssText = `
      background-color: #4CAF50; 
      color: white; 
      padding: 15px 25px; 
      border: none; 
      border-radius: 8px; 
      cursor: pointer;
      font-size: 16px;
      flex: 1 1 150px;
      transition: 0.2s;
    `;
    tableBtn.textContent = `Table: ${table.id} - Seats: ${table.seats}`;

    //Add option to select time for the table
    

    tableBtn.addEventListener('click', () => {
        if (selectedTableButton && selectedTableButton !== tableBtn) {
            selectedTableButton.style.backgroundColor = '#4CAF50';
        } 

        if (selectedTableButton === tableBtn) {
            tableBtn.style.backgroundColor = '#4CAF50';
            selectedTableButton = null;
            yourDesiredTable.textContent = "Your Table is: ";         
        } else {
            tableBtn.style.backgroundColor = '#FF9800';
            selectedTableButton = tableBtn;
            yourDesiredTable.textContent = `Your Table is: Table ${table.id} with ${table.seats} seats. We are waiting you at ESTIA!`;

            // Cancel button
            yourDesiredTable.innerHTML = `
                Your Table is: Table ${table.id} with ${table.seats} seats. See you soon<br>
                <button id="cancelBtn" style="
                    background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px; 
                    cursor: pointer; margin-top: 15px;
                ">Cancel Reservation</button>
            `;

            document.getElementById('cancelBtn').addEventListener('click', () => {
                tableBtn.style.backgroundColor = '#4CAF50';
                yourDesiredTable.textContent = "Your Table is: "; 
                selectedTableButton = null;
            });
        }
    });    


    availableTablesDiv.appendChild(tableBtn);
}


tables.forEach(renderTables);




