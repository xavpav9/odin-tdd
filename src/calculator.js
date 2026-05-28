const calculator = (function() {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid numbers");
    return a+b;
  }

  function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid numbers");
    return a-b;
  }

  function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid numbers");
    return a*b;
  }

  function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid numbers");
    return a/b;
  }

  return {add, subtract, multiply, divide,}
})();

export {calculator}
