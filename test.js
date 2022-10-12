//점프 : 건전지 사용 +N
//순간이동 *2

let n = 5000;
const nArr = Array.from(n.toString(2));

console.log(nArr.reduce((a, b) => +a + +b));
