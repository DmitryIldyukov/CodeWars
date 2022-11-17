function digPow(n, p){
  result = 0;
  n = String(n);
  
  for (let i = 0; i < n.length; i++) {
    a = Math.pow(n[i], p);
    result += a;
    p++;
  }
  k = result / Number(n); 

  if (!Number.isInteger(k)) 
    k = -1;

  return k;
}

digPow(89, 1);