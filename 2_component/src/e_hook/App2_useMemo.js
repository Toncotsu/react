// App2_useMemo.js

import { useMemo, useState } from "react";

/*

***************** hook 
            -> 함수형 컴포넌트에서 특정 기능 지원하기 위한 함수 
    useMemo

        - 성능 개선을 위해서 리턴 값을 캐슁(cash)
        - 일반적인 경우 많이 사용 하진 않고, 잘못하면 오리혀 성능 저하 될 수 있음

    리턴변수 = useMemo( func, [변수])

*/

const getCalc = (nums) => {
    console.log(`계산중.....: ${nums}`)
    if(nums.length === 0) return 0;

    //[1,2,3,4,5] => (1,2) => (앞의결과값,3) => (앞의결과값,4) => (앞의결과값,5)
    const sum = nums.reduce((a,b)=> a+b )
    return sum;
}

const Average = ()=>{
    const [list, setList]   = useState([])
    const [num, setNum]     = useState('')

    const onChange = (evt)=>{ setNum(evt.target.value)}

    const onInsert = () => {
        list.push(parseInt(num))
        console.log(list)
        //setList(list);
        setList([...list]);
        setNum('')
    }
    //---------------------------------
    // const result = useMemo(()=> { return getCalc(list)}, [list])
    const result = useMemo(()=> getCalc(list), [list])

    return(
        <div>
            <input type='text' value={num} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <hr/>
            <div>
               <ul>
                    {
                        list.map((item, idx)=> {
                           return  <li key={idx}>{item}</li>
                        })
                        // list.map((item, idx)=> <li key={idx}>{item}</li> )

                    }
                </ul>                
            </div>
            <hr/>
            <div>
                {/* 결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/> */}

                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
            </div>
        </div>
    )
}

export default Average;