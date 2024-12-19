function solve(...args) {

  let obj = {};
  for (const arg of args) {
    
    console.log(typeof(arg) + ': ' + arg);

    if (!obj.hasOwnProperty(typeof(arg))) {
      obj[typeof(arg)] = 0;
    }

    obj[typeof(arg)]++
  }

  
  for (const [key, value] of Object.entries(obj)) {
    console.log(key  + ' = ' + value);
  }
}

solve( 'cat', 'hui', 42, 58, function () { console.log('караи да жари'); }, function () { console.log('Hello world!'); }, null, true, false, undefined );