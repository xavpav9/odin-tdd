function analyseArray(arr) {
  const length = arr.length;
  let average = 0;
  let min = Infinity;
  let max = -Infinity;

  if (length !== 0) {

    arr.forEach(item => {
      if (typeof item !== "number") throw Error("Invalid array");
      average += item;
      min = item < min ? item : min;
      max = max > item ? max : item;
    });

    average /= length;

  } else {
    average = min = max = undefined;
  }


  return {
    average,
    min,
    max,
    length,
  };
}

export {analyseArray};
