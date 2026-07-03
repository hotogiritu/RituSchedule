const schedule = {
  3: {
    title: "雑談配信",
    image: "https://picsum.photos/80"
  },
  5: {
    title: "耐久配信",
    image: "https://picsum.photos/81"
  }
};

const calendar = document.getElementById("calendar");

const year = 2026;
const month = 6;

const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  calendar.appendChild(document.createElement("div"));
}

for (let day = 1; day <= lastDate; day++) {
  const cell = document.createElement("div");
  cell.className = "day";

  if (schedule[day]) {
    cell.innerHTML = `
      <strong>${day}</strong><br>
      <img class="thumb" src="${schedule[day].image}" alt="">
    `;
  } else {
    cell.innerHTML = `<strong>${day}</strong>`;
  }

  calendar.appendChild(cell);
}
