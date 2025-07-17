// App0_state_class.js

import { Component } from "react";


class ClassComponent extends Component {

            constructor (props){               
                super(props);
                //정적 변수
                // this.data = 100;

                // 값이 변경되는 변수

                this.state = {

                    number : 100

                }
            }

            render(){
                return(
                    <div>
                        <h3>클래스 컴포넌트</h3>
                        <p>숫자 : {this.state.number}</p>
                        <hr/>
                        <input type='button' value="+1" onClick={()=>{

                            this.setState({number: this.state.number + 1 })
                        }}></input>
                         <input type='button' value="Random" onClick={()=>{

                              this.setState({number: Math.ceil(Math.random()*100) })
                        }}></input>
                        <input type='button' value="-1" onClick={()=>{

                              this.setState({number: this.state.number -1 })
                        }}></input>
                    </div>
                )
            }
                 

}

export default ClassComponent;