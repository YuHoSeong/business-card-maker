const cities = ['LA', 'LA'];
const cacheSize = 0;
let cache = [];
let result = 0;

let temp = cities.map((city) => city.toLowerCase());
for (let i = 0; i < cities.length; i++) {
  if (cache.includes(temp[i])) {
    result += 1;
    cache = cache.filter((v) => v !== temp[i]);
  } else {
    result += 5;
  }
  if (cacheSize === 0) continue;
  if (cache.length >= cacheSize) {
    cache.shift();
    cache.push(temp[i]);
  } else {
    cache.push(temp[i]);
  }
  // console.log(cache);
}
console.log(result);
