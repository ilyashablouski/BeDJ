// Define variables & objects
const elemPaidArray = document.querySelectorAll('.is-paid');
const elemNotPaidArray = document.querySelectorAll('.is-not-paid');
const bracketPaid = document.querySelector('.brackets__bracket_paid');
const bracketNotPaid = document.querySelector('.brackets__bracket_not-paid');


// Define handler's functions
/**
 * Set height to brackets
 *
 */
function setBracketHeight() {
  let sumHeightPaid = 0;
  let sumHeightNotPaid = 0;

  // Paid element's collection
  for (let i = 0, heightElem; i < elemPaidArray.length; i++) {
    heightElem = elemPaidArray[i].parentElement.offsetHeight;
    sumHeightPaid += heightElem + 13;
  }
  // Not paid element's collection
  for (let i = 0, heightElem; i < elemNotPaidArray.length; i++) {
    heightElem = elemPaidArray[i].parentElement.offsetHeight;
    sumHeightNotPaid += heightElem + 13;
  }

  // Set heights
  bracketPaid.style.height = sumHeightPaid + 'px';
  bracketNotPaid.style.height = sumHeightNotPaid + 'px';
};


// Handler's call
window.addEventListener('resize', setBracketHeight);

document.addEventListener('DOMContentLoaded', () => {
  setBracketHeight();
});
