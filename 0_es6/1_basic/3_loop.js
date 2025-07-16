/*let queryString = 'kind=it&itle=python&cnt=3';
let chunks = queryString.split('&');
console.log(chunks);
const result = {};  

for (const chunk of chunks) {
  const parts = chunk.split('=');
  const key = parts[0];
  const value = parts[1];
  result[key] = value;
}

console.log(result);*/

// [1] forEach()
/*
let queryString = 'kind=it&title=python&cnt=3';
let chunks = queryString.split('&');
const result = {};

chunks.forEach((chunk)=>{

        const [key,value] = chunk.split('=');
        result[key]=value;

})

console.log(result);
*/

//[2] map()
/*
var queryString = 'kind=it&title=python&cnt=3';
var chunks = queryString.split('&');
var result = chunks.map((chunk) => {
  const [key, value] = chunk.split('=');
  return { key, value };
});

console.log(result);
*/
