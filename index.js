const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; width: 50%; margin: 0 auto; height: 50%;";


const container = document.createElement("div");
container.id = "container";

container.style.cssText = `
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 20px; 
  margin-top: 50px;
  width: 80%;
  background-color: #b9ddfb;
  padding: 40px;
  justify-content: center;
  border-radius: 10px;
`;
body.appendChild(container);

//Our title of the restaurant
const h1 = document.createElement("h1");
h1.textContent = "Restaurant ESTIA";
container.appendChild(h1);
h1.style.cssText = "font-size: 36px; color: #333; margin-bottom: 20px; font-family: 'Arial', sans-serif; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);";

const panels = document.createElement('div');
panels.style.cssText =  `
  display: flex; 
  gap: 30px; 
  width: 100%; 
  justify-content: space-between;
`;

container.appendChild(panels);

//Our form to reserve a table
const availableTablesDiv = document.createElement('div');
availableTablesDiv.id = 'available-tables';
availableTablesDiv.textContent = 'Available Tables for tonight:'
availableTablesDiv.style.cssText = `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  font-size: 30px;
`;




const yourDesiredTable = document.createElement('div');
yourDesiredTable.id = 'desired-table';
yourDesiredTable.textContent = "Your Table is: "
yourDesiredTable.style.cssText =  `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 30px;
  text-align: center;
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
    tableBtn.style.cssText = "background-color: green; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
    tableBtn.textContent = `Table: ${table.id} - Seats: ${table.seats}`;

    //Add option to select time for the table
    

    tableBtn.addEventListener('click', () => {
        if (selectedTableButton && selectedTableButton !== tableBtn) {
            selectedTableButton.style.cssText = "background-color: green; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
            
        } 

        if (selectedTableButton === tableBtn) {
            tableBtn.style.cssText = "background-color: green; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
            selectedTableButton = null;
            yourDesiredTable.textContent = "Your Table is: ";         
            
        } else {
            tableBtn.style.cssText = "background-color: orange; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
            selectedTableButton = tableBtn;
            
            //Make the content of desired table like a card with the table id and seats
            yourDesiredTable.style.cssText = `display: flex; align-items: center; justify-content: center; text-size: 25px
            ; background-color: #b2b4c387; color: #333; padding: 20px; border-radius: 5px;
             font-family: 'Arial', sans-serif; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; font-size: 18px;`;
            yourDesiredTable.textContent = `Your Table is: Table ${table.id} with ${table.seats} seats. We are waiting you at ESTIA! `;
       
          
        }

        if (yourDesiredTable) {
            // Have a cancel reservation button under the desired table card
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = "Cancel Reservation";
            cancelBtn.style.cssText = "background-color: red; color: white; margin-left: 20px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;";
            yourDesiredTable.appendChild(cancelBtn);

            cancelBtn.addEventListener('click', () => {
                tableBtn.style.cssText = "background-color: green; color: white; padding: 20px 30px; border: none; border-radius: 5px; cursor: pointer;";
                yourDesiredTable.removeChild(cancelBtn);
                yourDesiredTable.textContent = "Your Table is: "; 
                alert(`NA PAS STIN TAVERNA PSISTARIA TA 3 POUSTARIA`);
            });
        }
    });    

    availableTablesDiv.appendChild(tableBtn);
}


tables.forEach(renderTables);




