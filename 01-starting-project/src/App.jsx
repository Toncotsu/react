
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcept from './components/CoreConcept';
import {useState} from 'react';
import {EXAMPLES} from './data.js'
function App() {

    const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectButton){
      // selectButton => 'component , JSX , props , state 
        
        //console.log('hello-world-selected');
       // console.log({selectButton});
        setSelectedTopic(selectButton);
       
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
          {! selectedTopic &&  <p> Please select a topic </p> }
          {selectedTopic ?
          <div id='content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : null}
        </section>
      </main>
    </div>
  );
}
export default App;
