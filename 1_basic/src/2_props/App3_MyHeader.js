// App3_MyHeader.js

/*
    MyHeader 컴포넌트

    <header>   
        <h1> 제목 </h1>
        <p> 내용 </p>
    </header>
*/

// function MyHeader(props) {
//     console.log(props)

//     // props.title = '제목변경' ; props 는 read-only 라서 변경 안 됨 

//     let mytitle = props.title + '변경';

//     return (
//         <header>
//             <h1> 제목 : {props.title}</h1>
//             <h4>{mytitle}</h4>
//             <p> 내용 : {props.content}</p>
//         </header>
//     );
// }
import React, { Component } from 'react';

class MyHeader extends Component {
        render(){

                let mytitle = this.props.title + '변경2';

                return(     

                  <header>
                    <h1>{this.props.title}</h1>
                    <h2>{mytitle}</h2>
                    <p>{ this.props.content }</p>

                  </header>      

                );

        }

}

function App() {
    return (
        <div className="App">
            <MyHeader title="자바" content="노잼 자바" />
            <MyHeader title="파이썬" content="노잼 파이썬" />
        </div>
    );
}

export default App;
