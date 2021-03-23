let currentDate = moment().format('MMMM D, YYYY- h:mm a');
let currentTime = moment().format('HH');
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

const currentDateBox = document.querySelector('#currentDay');
const container = document.querySelector('.container');
const saveButts = document.querySelectorAll('.save');

currentDateBox.append(currentDate);

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
