//2_callback_function.js

function order(coffee, callback){

    console.log(`${coffee}주문`)
    setTimeout(()=>{
            callback(coffee);
    }, 2000);
}

function pickup(result){

    console.log(`${result} 준비완료`)

}

order('카페라떼', pickup);

console.log('다른 작업가능')