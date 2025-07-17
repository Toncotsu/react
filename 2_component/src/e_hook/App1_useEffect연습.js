
import { useEffect, useState } from 'react';
import '../App.css';


const Clock = () => {

        const [nowTime, setNowTime] = useState(new Date().toString());

        useEffect(()=>{

            const handle = setInterval(() => {

                setNowTime(new Date().toString())

            }, 1000)

            return () => {clearInterval(handle)}

        }, [])

        return(

            <div className='App-link'>
                <h4>{nowTime}</h4>
            </div>

        )
}

const App = () => {

    const  [Iv ,setIv] = useState(false)

        
        
        return (
            <div className='App-header'>
                <h2>clock</h2>
                <button onClick={()=>{
                    setIv(!Iv)
                }}>on/off</button>
                <hr/>
                {Iv && <Clock />} 
            </div>
    )



}

export default App;