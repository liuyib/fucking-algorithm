function random(m, n) {
  return Math.floor(Math.random() * (n - m) + m);
}

module.exports = {
  random,
};
