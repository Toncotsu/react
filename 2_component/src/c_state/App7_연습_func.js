import { useState } from 'react';
import '../App.css';

function MyNav(props){
    const data = props.data;
   
       return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <a href={item.site}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );

}

function App(){

  let [links, setLinks] = useState(
    [
      { id: 'daum', name: '다음3',  site : 'http://www.daum.net'},
      { id: 'naver', name: '네이버3',  site : 'http://www.naver.com'},
      { id: 'nate', name: '네이트3',  site : 'http://www.nate.com'}
    ]
  )  

    return (
      <div className='App-header'>
          <MyNav data={links}></MyNav>
      </div>
    )
}

export default App;