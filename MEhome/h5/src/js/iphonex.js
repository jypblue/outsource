function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  console.log(ua);
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  return true;
  } else {
  return false;
  }
}

function addIphonexLink() {
  var style = document.createElement('link');
  style.href = 'css/iphonex.css';
  style.rel = 'stylesheet';
  style.type = 'text/css';
  document.getElementsByTagName('HEAD').item(0).appendChild(style);
}

if(isWeiXin()) {
 addIphonexLink();
}

