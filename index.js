const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);
container.style.cssText = "  margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);";


//Our title of the restaurant
const h1 = document.createElement("h1");
h1.textContent = "Restaurant ESTIA";
h1.style.cssText = "text-align: center; color: #333; font-family: Arial, sans-serif; margin-top: 20px;";
container.appendChild(h1);

//Our form to reserve a table
const availableTablesDiv = document.createElement('div');
availableTablesDiv.id = 'available-tables';
availableTablesDiv.style.cssText = "margin-top: 20px; padding: 10px; background-color: #e0f7fa; border-radius: 8px;";
container.appendChild(availableTablesDiv);

const yourDesiredTable = document.createElement('div');
yourDesiredTable.id = 'desired-table';
yourDesiredTable.textContent = "Your Table is: "
yourDesiredTable.style.cssText = "margin-top: 20px; padding: 10px; background-color: #111111; border-radius: 8px;"

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

const updateAvailableTables = () => {
    for (let i = 0; i < tables.length; i++){
        const tableBtn = document.createElement('button');
        tableBtn.textContent = `${tables.id} /n Seats: ${tables.seats}`;
        tableBtn.style.cssText = "color: green; border: 1px solid black;"

        if (tables[i].available) {
            tableBtn.style.cssText = "color: green";
        } else {
            tableBtn.disabled = true;
        }

        availableTablesDiv.appendChild(tableBtn);
    }
}
