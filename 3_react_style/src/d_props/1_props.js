import './temp.css'

const FancyBorder = (props) => {

        return (
            <div className='FancyBoarder'>
                <h1 className='Dialog-title'>{props.title}</h1>
                <p className='Dialog-message'>{props.message}</p>
            </div>
        )
}

const TextPart = (props) => {

        return <FancyBorder title = {props.title} message = {props.message}/>
}

const WelcomeDialog = () => {

        return <TextPart title = '환영합니다' message = '집가고싶다'/>
}

const App = () => {

        return (
            <div>
                <WelcomeDialog/>
            </div>
        )
}
export default App;

//props 는 바로 위의 컴포넌트까지만 넘겨줄 수 있는것