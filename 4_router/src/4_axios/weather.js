

// 4_axios / weather.js

/*
    fetch : 
    axios :
*/
import axios from "axios";
import { useEffect } from "react";

const App = ()=>{

    useEffect(()=>{

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then(result => console.log(result))

    },[])

    return(
        <div>
            {/* 온도, 날씨, 습도 화면에 출력 */}
        </div>
    )
}

export default App;