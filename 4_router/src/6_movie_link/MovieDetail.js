
// MovieDetail.js

import { Link, useParams } from "react-router-dom";

const MovieDetail = (props) => {

    const {idx} = useParams();

    return(
        <div>
            <h3>{props.movies[idx].title} ( {props.movies[idx].year})</h3>
            {/* 나머지 상세 정보도 출력 */}
            <img src={props.movies[idx].medium_cover_image}/>
            <p> { props.movies[idx].genres.map((genre,num)=> <li key={num}>{genre}</li>)}</p>
            <Link to='/'>뒤로(목록보기)</Link>
        </div>
    )
}

export default MovieDetail;