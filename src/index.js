module.exports = function check(str, bracketsConfig) {
  arr = str.split('');

  function checkBrackets(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < bracketsConfig.length; k++) {
        if (arr[i] === bracketsConfig[k][0] && arr[i + 1] === bracketsConfig[k][1]) {
          arr.splice(i, 2);
          checkBrackets(arr);
        }
      }
    }
  }

  checkBrackets(arr);

  if (arr.length === 0) {
    return true;
  }

  return false;
}