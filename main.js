var str = 'This website is for losers LOL!';

function disemvowel(str) {
  var newStr = '';
  var vowels = ['A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toUpperCase()) == -1) {
      newStr += str[i];
    }
  }
  str = newStr;
  return str;
}

disemvowel(str);
