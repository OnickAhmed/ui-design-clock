// CLOCK

const hour = document.getElementById("clock-hour"),
  min = document.getElementById("clock-min"),
  sec = document.getElementById("clock-sec");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  //We add a rotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000); // 1000 = 1s

// CLOCK AND DATE TEXT
const textHour = document.getElementById("text-hour"),
  textMin = document.getElementById("text-min"),
  textSec = document.getElementById("text-sec"),
  textAmPm = document.getElementById("text-ampm"),
  dateDay = document.getElementById("date-dd"),
  dateMonth = document.getElementById("date-mm"),
  dateYear = document.getElementById("date-yy");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    ss = date.getSeconds(),
    dd = date.getDate(),
    MM = date.getMonth(),
    yy = date.getFullYear();

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  if (hh == 0) {
    hh = 12;
  }
  if (mm < 10) {
      mm = `0${mm}`
  }
  if (ss < 10) {
      ss = `0${ss}`
  }

  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  textHour.innerHTML = `${hh}:`;
  textMin.innerHTML = `${mm}:`;
  textSec.innerHTML = ss;
  textAmPm.innerHTML = ampm;
  dateDay.innerHTML = dd;
  dateMonth.innerHTML = `${month[MM]},`
  dateYear.innerHTML = yy;
};

setInterval(clockText, 1000); // 1000 = 1s

// DARK THEME 

const themeButton = document.getElementById('theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'bxs-sun';

//Previously Selected Topic Theme
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(dark-theme) ? 'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})