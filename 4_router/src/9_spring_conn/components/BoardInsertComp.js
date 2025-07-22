import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function BoardInsertComp() {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const cancelBtnHandler = () => {
    navigate('/');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    
    axios.post("/api/board/write", {
      title,
      writer,
      content
    })
    .then(() => {
      alert("등록 완료");
      navigate('/');
    })
    .catch((err) => {
      console.error(err);
      alert("등록 실패");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">새글을 작성해주세요</h3>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label> 제목 </label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> 작성자 </label>
                  <input
                    type="text"
                    className="form-control"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> 내용 </label>
                  <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success">저장하기</button>
                <button type="button" className="btn btn-danger" onClick={cancelBtnHandler} style={{ marginLeft: "10px" }}>
                  취소하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardInsertComp;
