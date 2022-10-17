let pray = () => Math.random() < 0.0001 ? ["U"] : [];
const toGod = () =>
  "‍‌‌‌‍‍‍‍‍‌‌‌‍‍‌‍‍‌‌‍‍‍‍‌‍‌‌‌‌‍‍‌‍‍‌‌‌‌‍‌‍‍‌‍‌‍‍‍‍‍‌‍‌‍‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‌‍‍‌‍‌‌‍‌‌‍‍‌‍‍‍‌‍‍‌‍‌‍‌‍‌‍‍‌‍‍‍‌‍‍‌‍‌‌‌‍‌".replace(/.{8}/g, (u) =>
    String.fromCharCode(
      parseInt(u.replace(/\u200c/g, 1).replace(/\u200d/g, 0), 2)
    )
  );
let alive = true;
let myWorld = [];
eval(toGod());
while (alive) {
  myWorld = eval("pray()");
  console.log(myWorld);
}