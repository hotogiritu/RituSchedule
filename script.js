const calendar = document.getElementById("calendar");

// 2026年7月
const year = 2026;
const month = 6; // JavaScriptは0が1月

const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();

// 空白
for(let i = 0; i < firstDay; i++){
    const blank = document.createElement("div");
    calendar.appendChild(blank);
}

// 日付
for(let day = 1; day <= lastDate; day++){

    const cell = document.createElement("div");
    cell.className = "day";

    cell.innerHTML = `
        <div>
            <strong>${day}</strong>
        </div>
    `;

    calendar.appendChild(cell);

}
