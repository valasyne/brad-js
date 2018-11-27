// WINDOW METHODS / OBJECTS / PROPS
// window.console.log(123);

// // ALERT
// alert('Life is beatiful!');

// // PROMPT
// const inpt = prompt();
// alert(inpt);

// // CONFIRM
// if (confirm('Are you sure?')) {
//   console.log('Yes, sure');
// } else {
//   console.log('Not sure');
// }

// HEIGHT, WIDTH 
let val;
val = window.outerHeight;
val = window.outerWidth;
val = innerHeight;
val = innerWidth;

// SCROLL POINTS
val = window.scrollX;
val = window.scrollY;

// LOCATION OBJECT
val = window.location;
val = window.location.port;
val = window.location.hostname;
val = window.location.href;
// Provide a namespace
val = window.location.search;

//REDIRECT
// window.location.href='https://google.com';


// RELOAD
// window.location.reload();
// window.location.reload();

// HISTORY OBJECT
// val = window.history.length;
// window.history.go(-2);

// NAVIGATOR OBJECT
val = window.navigator;

// geolocation, userAgent (), platform
val = window.navigator.appName; // Netscape
val = window.navigator.appVersion; // 5.0 Window NT 10.0 ... (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36
val = window.navigator.userAgent; // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36
val = window.navigator.platform; // Win 32 | inux x86_64
val = window.navigator.vendor; // Google Inc
val = window.navigator.language; // en-US




console.log(val);