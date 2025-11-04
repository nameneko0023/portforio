/*pc画面、スマホ画面の表示制御*/

function switchDisplay(mode) {
  const body = document.body;
  body.classList.remove('pc-view', 'sp-view');
  if (mode === 'pc') {
    body.classList.add('pc-view');
  } else if (mode === 'sp') {
    body.classList.add('sp-view');
  }
}

window.onload = function () {
  const displayCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('display='));

  let displayMode;

  if (displayCookie) {
    displayMode = displayCookie.split('=')[1];
  } else {
    displayMode = window.innerWidth < 768 ? 'sp' : 'pc';
    document.cookie = `display=${displayMode}; path=/; max-age=31536000`;
  }

  document.body.classList.toggle('pc-view', displayMode === 'pc');
  document.body.classList.toggle('sp-view', displayMode === 'sp');
};