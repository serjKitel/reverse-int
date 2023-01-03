module.exports = function reverse (n) {
    let reversedInt = "";
    for(let i = String(n).length - 1; i >= 0 ; i--){
      reversedInt += n.toString()[i];
    }
    return parseInt(reversedInt);
  
  
}
