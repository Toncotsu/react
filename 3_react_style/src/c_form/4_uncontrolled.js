
import {useRef,useState} from 'react'

const App = () => {

        const elemX = useRef(null);
        const elemY = useRef(null);

        const [result,setResult] = useState(0);
        const add = () => {

            setResult( parseInt(elemX.current.value)+parseInt(elemY.current.value))
        }
        return(
            <div>
                <h2>비제어 컴포넌트</h2>
                x값: <input type = 'text' ref={elemX}/><br/>
                y값:<input type = 'text' ref={elemY}/><br/><hr/>
                 <button onClick={add}>더하기</button>
                결과:{result}
            </div>
        )
}

export default App;