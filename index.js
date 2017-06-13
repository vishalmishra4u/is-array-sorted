module.exports = function isArraySorted(array){
  for(var i = 0; i < array.length, i++){
    var a = array[i];
    var b = array[i+1];

    if(comaperer(a,b) > 0) ? return false;
  }
  return true;
}

function comaperer(a,b){
  return a-b;
}
