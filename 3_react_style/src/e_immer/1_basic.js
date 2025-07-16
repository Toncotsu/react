
/*
        불변성 : 원본을 변경하지 않은 상태 유지

        1> 전개연산자(...) 이용
        2> immer 라이브러리 이용 
       
        immer : 불변성 라이브러리 

         [Current]  > [draft]   >  [New(next)]
            원본     >  변경 후 원본과 비교 > 새로운 객체 

            새로운 객체 = produce(변경대상객체 , 불변성 변경함수) 
*/

import { useState } from "react"
import produce from "immer"
const App = () => {

        const [todo,SetTodo] = useState([

                                {item : '밥먹기' , done : false }
                                ,{item : '숨쉬기' , done : true }
                                ,{item : '멍때리기' , done : true }
                                ,{item : '집중하기' , done : false }

        ])
        
        const listData = () => console.log({todo})

        //잘못된 방법
        const modifyData0 = () => {
            
            SetTodo(()=>todo[2].item='공부하기')
            //console.log('0>', todo)
        }

        //[1] 전개연산자
        const modifyData1 = () => {

            const temp = todo.map((data,idx) => (idx===2)?{...data , item:'공부하기'} : data )
            SetTodo(temp)
            //console.log('1', temp)
            //console.log('1', todo)

        }

        //[2] immer의 produce() 이용 
        const modifyData2 = () => {

            const temp = produce(todo, (draft) => {

                draft[2].item='밥먹고 ㄱㄱ'
            })

            SetTodo(temp);

        }
        return (

            <div>
                <button onClick={listData}>확인</button>
                <hr/>
                <button onClick={modifyData0}>수정0</button>
                <button onClick={modifyData1}>수정1</button>
                <button onClick={modifyData2}>수정2</button>
            </div>
        )
}

export default App 