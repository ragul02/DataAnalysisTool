// const { AttractionsOutlined } = require("@mui/icons-material");

const { getItem } = require("localforage");

// const promise_p1 = new Promise ((resolve , reject) => {
// console.log("promise 1")
// });

// const a = promise_p1.then( (response) => {
//   //promise logic here
//   console.log("call p1" + response);
// });
// a.then( response  => {
//   console.log(response);
// })
// console.log(a);

const a = [1, 1, 100, "c", "11", 2, 21, 6, "a", "f", "d"];
console.log(a.sort()); //[1, 1, 100, '11', 2, 21, 6, 'a', 'c', 'd', 'f']

// 1,1,2,6,21,100,a,c,d,f

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (!isNaN(a[i]) && !isNaN(a[j])) {
      let temp = 0;
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
}

console.log(a.reverse());

// 1, 100
// i , j
// i> j ? swap
