
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcept from './components/CoreConcept';
import {useState} from 'react';

function App() {

    const [state, setState] = useState('Please click a button');

  function handleSelect(selectButton){
      // selectButton => 'component , JSX , props , state 
        
        //console.log('hello-world-selected');
       // console.log({selectButton});
        setState(selectButton);
       
  }

  console.log('App COMPONENT EXECUTING');

  return (
    <div>
      <header>
        <h1>Core concepts</h1>
      </header>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>            
            <TabButton onSelect = {() => handleSelect('components')}>Components</TabButton> 
            <TabButton onSelect = {() => handleSelect('JSX')}>JSX</TabButton> 
            <TabButton onSelect = {() => handleSelect('props')}>props</TabButton> 
            <TabButton onSelect = {() => handleSelect('state')}>state</TabButton> 
          </menu>
          {state}
        </section>
      </main>
    </div>
  );
}
export default App;
