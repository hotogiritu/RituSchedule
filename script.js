const schedule = {
  3: {
    title: "雑談配信",
    image: "https://picsum.photos/200"
    comment: "まったりお話しよう♡"
  },

  5: {
    title: "耐久配信",
    image: "https://picsum.photos/200"
    comment: "目標達成まで頑張る！"
  }
};const calendar = document.getElementById("calendar");

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

    if (schedule[day]) {
    cell.innerHTML = `
        <strong>${day}</strong>
        <img class="thumb" src="${schedule[day].image}">
    `;
} else {
    cell.innerHTML = `
        <strong>${day}</strong>
    `;
    }

    calendar.appendChild(cell);

}
