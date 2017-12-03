(function(doc, win) {
  var docEl = doc.documentElement,
      width, last,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var changeRem = function() {
      width = docEl.clientWidth > 540 ? 540 : docEl.clientWidth;
      if (last === width) { return; }
      last = width;
      win.rem = 100 * (width / 750);
      if (/ZTE U930_TD/.test(navigator.userAgent)) {
          win.rem = win.rem * 1.13;
      }
      docEl.style.fontSize = win.rem + 'px';
      // 乘以100，px : rem = 100 : 1
      docEl.style.fontSize = 100 * (width / 750) + 'px';
  };
  changeRem()
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, changeRem, false);
})(document, window);