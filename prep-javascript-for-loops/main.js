// create your loops here.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
let k = 0;

for (; k < 20; k += 2) {
  console.log(k);
}

for (let t = 100; ; t--) {
  if (t < 0) break;
  console.log('Time till explosion', t, '!');
}
