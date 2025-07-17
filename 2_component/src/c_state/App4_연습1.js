import '../App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('맛집정보');
  const storeList = ['돈까스맛집', '호남식당', '학식'];

  return (
    <div className="App">
      <ul>
        {storeList.map((name, index) => (

          <li key={index} className='App-title' onClick={() => setTitle(name)}>
            {name}
          </li>
          
        ))}
      </ul>
      <div className='App-header'>{title}</div>
    </div>
  );
}

export default App;
















// import React, { Component } from 'react';
// import '../App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '맛집정보',
//       storeList: ['돈까스맛집', '호남식당', '학식'],
//     };
//   }

//   handleClick = (name) => {
//     this.setState({ title: name });
//   };

//   render() {
//     return (
//       <div className="App">
//         <ul>
//           {this.state.storeList.map((name, idx) => (
//             <li
//               key={idx}
//               className="App-title"
//               onClick={() => this.handleClick(name)}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//         <div className="App-header">{this.state.title}</div>
//       </div>
//     );
//   }
// }

// export default App;
