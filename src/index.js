module.exports = function reverse (n) {
  let res = '';
  n = n.toString();
  if (n[0] === '-') {
    n = n.slice(1);
  };
  for (let i = n.length - 1; i >= 0; i--) {
    res += n[i]
  };
  return Number(res)
}
