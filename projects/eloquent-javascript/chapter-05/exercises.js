// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
return array.reduce(function(flat, current) {return flat.concat(current)}, [])
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
for(let val = start; test(val); val = update(val) ){
  body(val)
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
for(let key of array){
  if(!func(key)) return false
  }
  return true
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
let scripts = countBy(text, function(char){
  let script = characterScript(char.codePointAt(0));
  if(script){
    return script.direction;
  
  }else {
    return 'none'
  }
}).filter(function({name}) {return name != 'none'});
if(scripts.length === 0){
  return 'no dominant direction found';
}else if(scripts.length === 1){
  return scripts[0].name;
}else{
  if(scripts.reduce(function (acc, curr) {return acc.count === curr.count})){
    return 'no dominant direction found';
  }else{
    return scripts.reduce(function (acc, curr) {if (acc.count >= curr.count) {return acc.name} else {return curr.name} })
  }
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
