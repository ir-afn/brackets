module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let open;
  let close;
  for (const item of bracketsConfig) {
    open = item[0];
    close = item[1];
    for (let i = 0; i < str.length; i += 1) {
      let symbol = str[i];
      if (symbol === open) {
        stack.push(symbol);
      } else if (symbol === close) {
        if (!stack.pop()) { 
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}
