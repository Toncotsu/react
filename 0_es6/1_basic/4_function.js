// [1] function 명령어 방식 (Function Declaration)
function greet1(name) {
  return `Hello, ${name}`;
}
console.log(greet1('라멘'));  // Hello, 라멘



// [2] function 리터럴 방식 (Function Expression)
const greet2 = function(name) {
  return `Hello, ${name}`;
};
console.log(greet2('라멘'));  // Hello, 라멘



// [3] arrow function 방식 (화살표 함수, ES6+)
const greet3 = (name) => {
  return `Hello, ${name}`;
};
console.log(greet3('라멘'));  // Hello, 라멘

// [3-1] arrow function 간단한 버전 (return 한 줄일 때)
const greet4 = name => `Hello, ${name}`;
console.log(greet4('라멘'));  // Hello, 라멘

/*
class MyClass {
  value = 10;

  constructor() {
    const func_add = (first, second) => this.value + first + second;

    console.log('확인: ' + func_add(1, 2));
    console.log('확인: ' + func_add(3, 4));
  }
}

const my = new MyClass();
*/
class MyClass {
  value = 10;

  constructor() {
    // [1] function + this 바인딩 (수동)
    var func2_add = function(first, second) {
      return this.value + first + second;
    }.bind(this);  // ⬅️ 수동으로 this 바인딩

    console.log('확인2: ' + func2_add(1, 2));  // 10 + 1 + 2 = 13


    // [2] 화살표 함수 (자동으로 this 바인딩)
    var func3_add = (first, second) => this.value + first + second;

    console.log('확인3: ' + func3_add(3, 4));  // 10 + 3 + 4 = 17
  }
}

var my = new MyClass();
