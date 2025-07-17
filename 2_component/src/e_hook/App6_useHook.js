// App6_useHook.js

import { useEffect, useState } from "react";

/*
    사용자 hook
*/

function useCounter(initValue) {

  const [count, setCount] = useState(initValue);
  const incrementCount = () => setCount(count => count + 1);
  const decrementCount = () => setCount(count => Math.max(count - 1, 0));

    return [count,incrementCount,decrementCount]
}

const Max = 5;

function Room() {

const [count, incrementCount, decrementCount] = useCounter(0)
const [isFull, setIsFull] = useState(false);

useEffect(() => {

  setIsFull(count >= Max);

}, [count]);

            return(
                <div>
                    <p>{`총 ${count}명 입실`}</p>
                    <p>{isFull ? '정원이 가득 찼습니다!' : '입실 가능합니다.'}</p>
                    <button onClick={incrementCount} disabled={isFull}>입실</button>
                    <button onClick={decrementCount} disabled={count===0}>퇴실</button>
                </div>
            )
}

export default Room;