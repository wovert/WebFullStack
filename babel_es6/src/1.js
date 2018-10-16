let a = 1;
const b = 5;

import mod from './mod/math';
console.log(mod.sum);

let arr = [{a, b}, {b, a}];

arr.sort((json1, json2)=>{json1.a = json2.a});

alert(arr[0].a);