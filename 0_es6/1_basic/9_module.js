//9_module.js

let base = 100;
const getBase = ()=> base;
const add = x => base + x;
const multiply = x => base * x;

export {add,multiply};
export default getBase;


/*

let base = 100;
function getBase(){

    return base;
}

 function add(){
    
    return base + x;
    }
*/