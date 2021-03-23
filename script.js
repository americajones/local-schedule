let currentYear = moment().format('YYYY');
let currentDate = moment().format('MMMM D');
let currentTime = moment().format('h:mm a');
let currentHour = moment().format('HH');
const clockArr24 = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const clockArr = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
const numArr = [
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelvepm',
  'onepm',
  'twopm',
  'threepm',
  'fourpm',
  'fivepm',
  'sixpm',
  'sevenpm',
  'eightpm',
];

const currentTimeBox = document.querySelector('#currentTime');
const currentDateBox = document.querySelector('#currentDate');
const container = document.querySelector('.container');
const saveButts = document.querySelectorAll('.save');

currentDateBox.append(currentDate);
currentTimeBox.append(currentTime);

for (let i = 0; i < numArr.length; i++) {
  console.log(localStorage.getItem(numArr[i]));
  document.querySelector(
    '#' + numArr[i]
  ).childNodes[3].textContent = localStorage.getItem('saveNote' + i);
}

// for (let i = 0; i < numArr.length; i++) {
// }

let i = 0;

saveButts.forEach((butt) => {
  butt.setAttribute('id', 'saveNote' + i);
  butt.addEventListener('click', function () {
    console.log(this.id);
    console.log(this.previousElementSibling.value);
    const slot = this.id;
    const note = this.previousElementSibling.value;
    localStorage.setItem(slot, note);
  });
  i++;
});
