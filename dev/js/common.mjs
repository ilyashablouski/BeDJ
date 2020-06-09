// Define variables & objects
const elemPaidArray = document.querySelectorAll('.is-paid');
const elemNotPaidArray = document.querySelectorAll('.is-not-paid');
const bracketPaid = document.querySelector('.brackets__bracket_paid');
const bracketNotPaid = document.querySelector('.brackets__bracket_not-paid');

const sidebarArray = document.querySelectorAll('.js-nav-button');
const elemSidebar = document.querySelector('.sidebar');


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

/**
 * Toogle active sidebar button
 *
 * @param {EventTarget} target
 */
function toogleActiveButton(target) {
  for (const element of sidebarArray) {
    element.classList.remove('js-nav-button_active');
  }

  target.classList.add('js-nav-button_active');
}


// Handler's call
window.addEventListener('resize', setBracketHeight);

document.addEventListener('DOMContentLoaded', () => {
  setBracketHeight();

  /**
   * Dilocation and call events in sidebar
   */
  elemSidebar.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('js-nav-button')) {
      toogleActiveButton(target);
    }
  });
});
