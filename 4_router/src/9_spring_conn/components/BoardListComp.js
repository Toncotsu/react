
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardListComp () {

        const[boards,setBoards] = useState([])
       
         useEffect(() => {
            axios.get('/api/board')
                .then(result => {
                console.log(result.data);
                setBoards(result.data);
                });
            }, []);

        const navigate = useNavigate()

        const createBoard =  () => {
            navigate('api/insert-board')

        }

        const readBoard = (e ,seq) => {

                e.preventDefault()
                navigate(`/api/view-board/${seq}`)
        }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        boards.map(board => 
                            <tr key={board.seq}>
                               <td>{board.seq}</td>
                               <td>
                               <button onClick={(e) => readBoard(e, board.seq)} className="link-button">
                                {board.title}
                                </button>
                               </td>
                               <td>{board.writer}</td>
                               <td>{board.regdate}</td> 
                                <td>{board.cnt}</td>       
                            </tr>
                        )
                       }
                    </tbody>
                </table>
            </div>         
                <div className="row">
                    <button className="btn btn-primary" onClick={createBoard}>글 작성</button>
                </div>
        </div>
    );

}

export default BoardListComp;
