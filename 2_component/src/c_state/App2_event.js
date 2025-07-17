// App2_event.js

import '../App.css';

function App() {
    function btnClick() {
        alert('확인1');
    }

    return (
        <div className='App'>
            {/* 소문자 onclick은 HTML 속성이므로 React에선 무시됨 */}
            <button onClick={btnClick}>이벤트확인</button>
            <hr />
            <button onClick={function() { alert('확인'); }}>이벤트확인2</button>
            <hr />
            <button onClick={() => { alert('확인'); }}>이벤트확인3</button>
        </div>
    );
}

export default App;
