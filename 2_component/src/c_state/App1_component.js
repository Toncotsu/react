// App1_component.js

import '../App.css';
import './components/MyHeader';
import MyHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';

function App(){
    return(
        <div className='App'>
            <MyHeader title='메뉴1' content='맛있는 밥'></MyHeader>
            <MyHeader title='메뉴2' content='맛있는 면'/>
            <MyHeader title='메뉴3' content='맛있는 거'/>
            <hr/>
            <MyMenu data='안녕하세요'></MyMenu>
            <MyMenu data='하이'/>
        </div>
    )
}

export default App;