const s = '{{4,2,3},{3},{2,3,4,1},{2,3}}';

// let test = s.replace(/{/g, '').replace(/}/g, '').split(',');
// let obj = [];
// test.map((v) => {
//   if (!obj.includes(Number(v))) {
//     obj[test.filter((c) => c === v).length - 1] = Number(v);
//   }
//   return v;
// });

// console.log(obj.reverse());

JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
  .sort((a, b) => a.length - b.length)
  .reduce((arr, v, n) => {
    console.log(arr, v, n);
    if (n) {
      return arr.concat(v.filter((f) => !arr.includes(f)));
    }
    return v;
  }, []);
