function foo(a) {
  if (a === undefined || a === null) {
    return 0;
  }
  return a.length;
}