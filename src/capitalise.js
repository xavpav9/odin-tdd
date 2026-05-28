function capitalise(s) {
  if (s.length === 0) return "";
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export {capitalise};
