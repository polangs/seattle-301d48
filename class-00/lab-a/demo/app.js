'use strict';

var global = 'I am a global variable';

//now lets make a function to create some scope
function scopeMaker(){
  var local = 'I am a local variable.'
  console.log(global,'logged from inside scopemaker().')
  console.log(local,'logged from inside scopeMaker().')
}
scopeMaker();

const anotherGlobal = true;

if(anotherGlobal){
  console.log('Do global variable declared with const behave like other global variables with respect to scope?', anotherGlobal);
  let anotherLocal = 'This is a local variable declared with let';
  console.log(anotherLocal);
}
console.log(anotherLocal);

anotherGlobal = 'foo';



