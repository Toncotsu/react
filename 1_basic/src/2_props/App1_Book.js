

function Book(props){

    return (<div>
        <h2>책제목:{props.title}</h2>
        <h4>저자: {props.writer}</h4>
        <h5>가격: {props.price}</h5>
    </div>);
}

function App(){

    return(
    
    <div className="App">
         <Book title='자바' writer='Tom' price='10000' />
        <Book title='파이썬' writer='Jane' price='20000' />
        <Book title='리액트' writer='Son' price='30000' />
    </div>
    
    );

}

export default App;

