
// App3_state_class.js

/*
    state :  컴포넌트에서 값 변경하는 데이타

    [클래스 컴포넌트인 경우]
    ` state 직접 변경은 안됨
    ` setState()를 이용해서 변경
*/

import { Component } from 'react';
import '../App.css'

class App extends Component{
    
    // let title = '우리동네'; => 에러

    constructor(props){

        super(props)

        // 정적인 데이타
        this.title = '우리동네 사이트';

        // 변경 데이타
        this.state = {
            favorite : '맛집정보'
        }
    }

    render(){
        return(
            <div className='App'>
                <h2> 클래스형 컴포넌트에서 state 변경하기 </h2>
                <div className='App-link'>{this.title}</div>
                <div className='App-subtitle'>{this.state.favorite}</div>
                <hr/>
                <button onClick={()=>{
                    this.title = "너네 동네 사이트";
                    console.log(this.title);
                }}> 일반변수 변경하기 </button><br/>

                <button onClick={()=>{
                    this.state.favorite = "우리집 맛집 변경";
                    console.log(this.state.favorite);
                }}> state 변수 직접 변경하기 </button><br/>

                <button onClick={()=>{
                    this.setState({ favorite : '맛집천하'})
                }}> state 변수 setState()로 변경하기 </button><br/>
            </div>
        )
    }
}

export default App;