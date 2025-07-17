
// 5_movie / component / Movie.js

import '../css/Movie.css'

const Movie = (props) => {

    return(
        <div className='movies'>
            <div> {props.id} : {props.title} (({props.year})) </div>            
            <img  className='movie' src={props.poster} alt={props.title} />
             {/* genres를 받아서 출력 */}
            <ul>{ props.genres.map((genre,idx)=> <li key={idx}>{genre}</li>  )}</ul>
            <hr/>
        </div>
    )
}



export default Movie;