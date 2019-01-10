function helloToGoodbye(string) {
  // your code goes here
  return string.replace(/hello/g, 'goodbye');
}

var s = 'hello vurld';

console.log(helloToGoodbye(s));
