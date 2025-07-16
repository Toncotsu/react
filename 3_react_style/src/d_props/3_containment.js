import { useState } from 'react'
import './temp.css'

const FancyBoarder = (props) => {

        return <div className='FancyBoarder'>{props.children}</div>

}

const TextPart = (props) => {

        return (
            <FancyBoarder>
                <h1>{props.title}</h1>
                <hr/>
                <p>{props.message}</p>

                   {props.children}
            </FancyBoarder>
        )

}

const WelcomeDialog = (props) => {

        return <TextPart title = '집가고싶다' message ='배고프다'/>
}

const MorningDialog = (props) => {

        const [nickname,setNickname] = useState('')
        return (
        <TextPart title = '맥모닝' message ='맥아침'>
                <input type = 'text' value = {nickname} onChange={(e)=>{setNickname(e.target.value)}}/>
                    <br/>
                <button onClick={(e)=>{alert('어서오세요')}}>입력</button>
        </TextPart>

        )

}

const App = () => {

        return(
            <div>
                <WelcomeDialog/>
                <hr/>
                <MorningDialog/>
            </div>
        )

}

export default App