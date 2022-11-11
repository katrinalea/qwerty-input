export default isInputStrong;

function isInputStrong(password: string): boolean {
  if (
    password.length > 7 &&
    password.match(/['*', '$', '!']/g) &&
    password.match(/[QWERTYUIOP]/g) &&
    password.match(/[k]/g)
  ) {
    return true;
  } else {
    return false;
  }
}
