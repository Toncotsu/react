
// b_conditional / 1_truthy.js

import { useState } from "react";

function MemberGreeting(props){
    return <h1>오늘도 반갑습니다</h1>
}

function GuestGreeting(props){
    return <h2>회원가입을 해주세요</h2>
}

function Greeting(props){

    //const isLoggedIn = true;
    //const isLoggedIn = false; 

    // false == NaN == undefined == null
    
    //const isLoggedIn = ''; // true | false
    // const isLoggedIn = []; // true | false
    // const isLoggedIn = {}; // true | false
    // const isLoggedIn = 0; // true | false
    // const isLoggedIn = -1; // true | false
    // const isLoggedIn = 1; // true | false

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) return <MemberGreeting/>
    else return <GuestGreeting/>
}

function App(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // [추가작업] '변경'버튼을 클릭하면 Greeting 컴포넌트 안에 isLoggedIn의 값을 변경

    return (
        <div>
            {/* <button onClick={()=> setIsLoggedIn(!isLoggedIn) }>변경</button> */}
            <button onClick={()=> setIsLoggedIn((isLoggedIn)=> !isLoggedIn ) }>변경</button>
            <hr/>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default App;