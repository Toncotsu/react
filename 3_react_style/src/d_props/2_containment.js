
import { Children } from 'react'
import './temp.css'

const FancyBoarder = (props) => {

    return (

        <div className='FancyBoarder'>
            <div className='Dialog-title'>{props.children}</div>
            <div className='Dialog-title'>{props.data}</div>
        </div>
    )
}

const WelcomeDialog = (props) => {

    return (
    <FancyBoarder data ='data'>

        <h1 className='Dialog-message'> 환영합니다 </h1>
        <hr/>
        <p className='Dialog-message'> 반갑습니다 </p>

    </FancyBoarder>
         

    )
}

const App = () => {

        return <WelcomeDialog/>
}

export default App