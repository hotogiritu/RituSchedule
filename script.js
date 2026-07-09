const schedule = {
  3: {
    title: "雑談配信",
    time: "21:00〜",
    image: "https://picsum.photos/80",
    comment: "まったりお話しよう♡"
  },

  5: {
    title: "耐久配信",
    time: "20:00〜",
    image: "https://picsum.photos/81",
    comment: "目標達成まで頑張る！"
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
<div class="date-number">${day}</div>
<img class="thumb" src="${schedule[day].image}">
`;
  } else {
    cell.innerHTML = `<strong>${day}</strong>`;
  }

  cell.addEventListener("click", () => {

    if(schedule[day]){
alert(
`${schedule[day].title}

⏰ ${schedule[day].time}

💬 ${schedule[day].comment}`
);
    }

});
  calendar.appendChild(cell);
}
