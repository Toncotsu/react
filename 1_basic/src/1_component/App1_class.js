
/*
      컴포넌트 

            -클래스형   : 기존부터 사용
            -함수형     : 최근에 부각            
*/

// const { Component } = require("react");
import { Component } from "react";
import "../App.css";
//클래스형 컴포넌트
class App extends Component{

    // 렌더링 : 브라우저에 화면을 출력
    render(){
        // 자바스크립트 주석 1
        /* 자바스크립트 주석 2*/
        return(
            //여기 안에 주석
            <div className = 'App'>
                {/* 여기영역은 jsx 문법 영역이다 */}
                {/* 여기 안에 주석  */}
                <div className="App-link">안녕하세요</div>
                <div className="App-logo">집가고싶다</div>
            <hr/>  
            <img src='../logo192.png'/>
            </div>
            
        );

    }
    
}

export default App;
