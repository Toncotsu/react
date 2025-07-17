// App4_useRef.js

import { useState, useRef } from "react";

/*
    useRef()

        [1] useRef()로 리턴값은 객체는 컴포넌트의 모든 생명주기 동안 유지됨


        [2] 브라우저 DOM 요소에 직접 접근 가능
*/
const App = () => {

        const [realname, setRealname] = useState('김현우');


        const ref = useRef('아또당');
         const [, update] = useState(0);
        return(

            <div>
                <h2>데이터 상태</h2>
                <div>
                    <span>본명 : {realname}</span>
                    <input type = 'text'  onChange={(e) => setRealname(e.target.value)}></input>
                </div>
                <div>
                    <span>특기 : {ref.current} </span>
                    <input type = 'text' onChange={(e)=>{ ref.current = e.target.value;
                                                          update(prev => prev+1)
                    }}></input>
                </div>
            </div>
        )
}



export default App;
