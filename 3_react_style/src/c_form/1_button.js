// c_form / 1_button.js

function App (){

    const inputClick = () =>{
        alert('input button click')
    }

    const buttonPressed = (event) =>{
        event.preventDefault(); // submit역할을 막아주기
        alert('button press')
    }

    const handleSubmit = (event)=>{
        event.preventDefault() //  submit역할을 막아주기
        alert('submit button')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='button' value='버튼1' onClick={inputClick}/><br/>

                <button onClick={buttonPressed}>버튼2</button><br/>

                <input type='submit' value='버튼3'/>
            </form>
        </>
    )
}

export default App;