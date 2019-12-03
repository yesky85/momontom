//alert('Im working. Im JS.');

const BASE_COLOR = 'red';
const OTHER_COLOR = 'blue';
const CLICKED_CLASS = 'clicked';

// Variables (Camel case)
// String
const str = 'Niceguy';
// Boolean
const bl = true;
// Float
const ft = 3.14;
// Array
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 7.7, true];
// Object
const personInfo = {
  name: 'name',
  age: 35,
  gender: 'Male',
  favFoods: [
    {
      name: 'Kimchi',
      calorie: 100,
    },
    {
      name: 'pizza',
      calorie: 500,
    },
  ],
};
// Function
function info(name, age) {
  // ES6 Before ('',"")
  console.log('hello ' + name + ' You "have" ' + age);
  console.log('hello', name, 'You "have"', age);
  // ES6 Backtick (``)
  console.log(`hello ${name} You "have" ${age}`);
}
// Function in Object
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
};
// Event
function handleResize() {
  console.log('Resize');
}

function handleMouseEnter() {
  const currentColor = h1.style.color;

  if (currentColor == BASE_COLOR) {
    h1.style.color = OTHER_COLOR;
  } else {
    h1.style.color = BASE_COLOR;
  }
}

function handleClick() {
  h1.classList.toggle(CLICKED_CLASS);

  /*
    const hasClass = h1.classList.contains(CLICKED_CLASS);
    
    if(hasClass){
        h1.classList.remove(CLICKED_CLASS);
    } else{
        h1.classList.add(CLICKED_CLASS);
    }*/

  /*
    const currentClass = h1.className;

    if(currentClass !== CLICKED_CLASS){
        //h1.className = CLICKED_CLASS;
        h1.classList.add(CLICKED_CLASS);
    } else{
        //h1.className = "";
        h1.classList.remove(CLICKED_CLASS);
    }*/
}

function init() {
  h1.style.color = BASE_COLOR;
}

function handleOnline() {
  console.log('Welcome back');
}

function handleOffline() {
  console.log('Bye bye');
}

const h1 = document.getElementById('h1');
//const h1 = document.querySelector("#h1");
h1.innerHTML = 'new world.';
document.title = 'change title';

//console.log(str);
//console.log(bl);
//console.log(ft);
console.log(daysOfWeek);
//console.log(daysOfWeek[0]);
console.log(personInfo);
console.log(personInfo.gender);
//console.log(personInfo.favFoods[0].name);
//console.log(console);
info('kec', 35);
console.log(calculator.plus(10, 10));

//prompt("What you are name?");

// Event (MDN)
init();
window.addEventListener('resize', handleResize);
h1.addEventListener('click', handleClick);
h1.addEventListener('mouseenter', handleMouseEnter);
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);
