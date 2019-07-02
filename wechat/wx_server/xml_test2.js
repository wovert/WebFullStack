const xml=require('xml');

let xmlstr=xml({
  xml: [
    {name: 'blue'},
    {age: 18}
  ]
});

console.log(xmlstr);
