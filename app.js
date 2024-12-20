const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline h4");

const futureDate = new Date(2025, 9, 4, 12, 30, 0);

const futureYear = futureDate.getFullYear();

const futureDat = futureDate.getDate();

const futureMonth = months[futureDate.getMonth()];
const futureDay = weekdays[futureDate.getDay()];
const futureHours = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();
giveAway.textContent = `giveaway ends on ${futureDay}, ${futureDat} ${futureMonth} ${futureYear} ${futureHours}:${futureMinutes}pm`;

// 1sec = 1000ms
// 1min = 60sec
// 1hr = 60min
// 1day = 24hr

function getRemainigTime() {
  const oneMin = 60 * 1000;
  const oneHr = oneMin * 60;
  const oneDay = oneHr * 24;
  const today = new Date().getTime();
  console.log(today);

  const remaingTime = futureDate.getTime() - today;
  console.log(remaingTime);

  const days = Math.floor(remaingTime / oneDay);
  const hours = Math.floor((remaingTime % oneDay) / oneHr);
  const mins = Math.floor((remaingTime % oneHr) / oneMin);
  const secs = Math.floor((remaingTime % oneMin) / 1000);
  const values = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (remaingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Time is over</h4>`;
  }
}

let countdown = setInterval(getRemainigTime, 1000);

getRemainigTime();
