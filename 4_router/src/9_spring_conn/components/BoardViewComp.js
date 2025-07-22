import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardViewComp() {

    const { seq } = useParams();
    const [board, setBoard] = useState({});
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`/api/board/${seq}`)
            .then(result => setBoard(result.data))
            
    }, [seq]);

    const deleteBoard = () => {
        axios.delete(`/api/board/${seq}`)
            .then(() => navigate('/')) 
            
    };

    const returnBoard = () => {
        navigate('/');
    };

    return (
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보기 </h3>
                <div className='card-body'>
                    <div className='row'>
                        <div className='alert alert-success'>제목: {board.title}</div>
                    </div>
                    <div className='row'>
                        <div className='alert alert-success'>작성자: {board.writer}</div>
                    </div>
                    <div className='row'>
                        <div className='alert alert-success'>내용: {board.content}</div>
                    </div>
                    <button className='btn btn-primary' onClick={returnBoard} style={{ marginLeft: '10px' }}>
                        글목록으로 이동
                    </button>
                    <button className='btn btn-danger' onClick={deleteBoard} style={{ marginLeft: '10px' }}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BoardViewComp;
