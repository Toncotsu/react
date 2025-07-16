var arr = ['one', 'two'];
var first = arr[0];
var third = arr[2];

console.log(first);
//console.log(second);
console.log(third);

//논리연산자 결합
console.log(first||'empty');
console.log(third||'empty');

// [2] 삼항연산자와 truthy, falsy
// const truthy = true;
// const truthy = 1;     // 0이 아닌 모든 숫자
// const truthy = -1;
// const truthy = '0';
// const truthy = 'false';
// const truthy = [];
// const truthy = {};


// const samhang = truthy ? '참' : '거짓';
// console.log(`truthy: ${samhang}`);


// const falsy = false;
// const falsy = 0;
// const falsy = '';
// const falsy = null;
// const falsy = undefined;
// const falsy = NaN;


// const samhang = falsy ? '참' : '거짓';
// console.log(`falsy: ${samhang}`);

let list = [100,200];
let [item1, item2, item3=1004] = list;
console.log(item1);
console.log(item2);
console.log(item3);

[item2, item1] = [item1, item2];
console.log(item1);
console.log(item2);

const obj1 = {one :1, two:2, gita:0};
const obj2 = {three:3, four:4, gita:-1};
const old_combined= {

        one : obj1.one,
        two : obj2.two,
        gita: obj1.gita,
        three: obj2.three,
        four: obj2.four,
        gita: obj2.gita


}

console.log(old_combined);

const combined = {
  ...obj1,
  ...obj2
};

console.log(combined);

const {gita, ...others} = combined;
console.log(gita);
console.log(others);

let origin = { name:'godofreact', age:28, dept:'it'}
let temp = origin;
temp.name = '이순신';
console.log(temp);
console.log(origin);

let origin2 = { name:'carryking', age:28, dept:'it'}
let temp2 = {...origin, name:'세종'}
console.log(temp2);
console.log(origin2);
