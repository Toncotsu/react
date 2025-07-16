/*
        변수 선언

        -var 
        -let : 재선언 안됨
        -const : 재설정 안됨


*/

var msg_a = '안녕하세요';
var msg_b = '반갑습니다';

var old_msg = msg_a + "  " + msg_b;
const new_msg = `${msg_a} ${msg_b}`;
console.log(old_msg)
console.log(new_msg)

const num1=100;
const num2=200;

// 100*200 = 20000 출력
const result =  `${num1 * num2}`;
console.log(result);
