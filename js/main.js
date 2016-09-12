// http://stackoverflow.com/questions/641857/javascript-window-resize-event
var addEvent = function(object, type, callback) {
    if (object === null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};



// -----------------------------------
// Main Header SCROLL actions


var mainHead = document.querySelector('.head'),
    mainHeadHght = mainHead.offsetHeight,
    hideHead;

// SCROLL
var
  previousTop = 0,
  currentTop  = 0,
  scrollDelta = 10,
  scrollOffset = mainHeadHght;


function checkHead(currentTop) {
  // scrolling down
  if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
    console.log('down');
    mainHead.classList.add('slide-up');
  }
  //  scrolling up
  else if (previousTop - currentTop > scrollDelta) {
    console.log('up');
    mainHead.classList.remove('slide-up');
  }
}

function actionHead() {
  currentTop = document.body.scrollTop;
  checkHead(currentTop);
  previousTop = currentTop;
}

addEvent(document, "scroll", actionHead);
