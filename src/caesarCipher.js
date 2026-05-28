function getNewCharCode(letter, key) {
  let offset;
  if (letter.match(/[a-z]/i)) {
    if (letter.match(/[A-Z]/)) offset = 65;
    else offset = 97;

    let newCharCode = (letter.charCodeAt(0)+key-offset) % 26;
    if (newCharCode < 0) newCharCode += 26;

    return String.fromCharCode(newCharCode + offset);
  } else {
    return letter;
  }
}

function caesarCipher(s, key) {
  return s.split("")
    .map(letter => getNewCharCode(letter, key))
    .join("");
}

export {caesarCipher};
