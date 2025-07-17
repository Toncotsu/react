// App2_Button.js

/*
 - 컴포넌트와 엘리먼트

 - props
   ` 컴포넌트에 전달되는 데이터 객체
   ` read-only

 I. 컴포넌트 방식
   ` 클래스
   ` function
   => 첫글자를 대문자로
*/
import '../App.css';

function Button(props) {
    return (
        <button className={`App-${props.css}`}>
            {/* JSX 문법입니다 */}
            {props.label}
        </button>
    )
}

function App(props) {
    return (
        <div className="App">
            <Button label="확인1" css='link' />
            <Button label="확인2" css='header'/>
        </div>
    )
}

export default App;
