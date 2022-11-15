function accum(s) {
  let out = '';
	for (let i = 0; i < s.length; i++) {
    for(let a = 0; a <= i; a++) {
      let b = '';
      b = s[i];
      if (a === 0) {
        b = b.toUpperCase(); 
      }
      else {
        b = b.toLowerCase();
      }
      out += b;
    }
    if (i !== (s.length - 1))
      out += '-';
  }
  return out;
}
