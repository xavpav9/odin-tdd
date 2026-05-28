function reverseString(s) {
  let reversedString = "";
  for (let i=0; i<s.length;++i) {
    reversedString += s[s.length-1-i];
  }
  return reversedString;
}

export {reverseString};
