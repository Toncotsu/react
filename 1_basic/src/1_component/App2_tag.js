/*
    리액트의 장점 <- 사용이유
    1> 태그 재사용
    2> 데이터 바인딩

*/
import { Component } from "react";
import "../App.css";

function Myheader(){

    return(<div>
        <h1 className="App-link">우리 사이트</h1>
        <hr/>

    </div>);
}

class MyFooter extends Component{

    render(){
        
        return(<div className="App-logo">
            
            <h2>광고사이트</h2>

        </div>);

    }
}

function App(){

    return(
        <div className="App">
            <Myheader></Myheader>
            <Myheader/>
            <hr/>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
        </div>
    );
}
export default App;