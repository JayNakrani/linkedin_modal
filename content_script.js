console.log('removing #advocate-modal');
modal = document.querySelector('#advocate-modal');
modal.parentNode.removeChild(modal);


// Scroll on arrow keys.
document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 38: // up
      window.scrollBy(0, -100);
      break;

    case 40: // down
      window.scrollBy(0, 100);
      break;

    default:
      return;
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};
