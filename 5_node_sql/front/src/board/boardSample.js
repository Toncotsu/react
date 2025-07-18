import '../css/board.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [boardContent, setBoardContent] = useState({
    btitle: '',
    bname: '',
    mid: '',
    bpw: '',
    bcontent: ''
  });
  const [viewContent, setViewContent] = useState([])
  const [editId, setEditId] = useState(null)

  const getValue = (e) => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/insert', boardContent)
      .then(() => {
        alert('등록 완료');
        setBoardContent({ btitle: '', bname: '', mid: '', bpw: '', bcontent: '' })
        boardLoad();
      })
  }

  const handleUpdate = () => {
  
    axios.post(`http://localhost:8000/api/update/${editId}`, boardContent)
      .then(() => {
        alert('수정 완료')
        setEditId(null)
        setBoardContent({ btitle: '', bname: '', mid: '', bpw: '', bcontent: '' })
        boardLoad()
      })
  }

  const handleDelete = (bnum) => {
    axios.delete(`http://localhost:8000/api/delete/${bnum}`)
      .then(() => {
        alert('삭제 성공')
        boardLoad()
      })
  }

  const boardLoad = () => {
    axios.get('http://localhost:8000/api/get')
      .then((result) => { setViewContent(result.data) })
  }

  useEffect(() => {
    boardLoad();
  }, [])

  return (
    <div>
      <table>
        <tr>
          <td><label>글제목</label></td>
          <td><input type="text" name="btitle" onChange={getValue} value={boardContent.btitle} /></td>
        </tr>
        <tr>
          <td><label>작성자</label></td>
          <td><input type="text" name="bname" onChange={getValue} value={boardContent.bname} /></td>
        </tr>
        <tr>
          <td><label>아이디</label></td>
          <td><input type="text" name="mid" onChange={getValue} value={boardContent.mid} /></td>
        </tr>
        <tr>
          <td><label>비밀번호</label></td>
          <td><input type="text" name="bpw" onChange={getValue} value={boardContent.bpw} /></td>
        </tr>
        <tr>
          <td><label>내용</label></td>
          <td><textarea name="bcontent" id="bcontent" cols="30" rows="5" onChange={getValue} value={boardContent.bcontent}></textarea></td>
        </tr>
        <td colSpan="2">
              {
                editId === null ? (
                  <input type="submit" value="입력" onClick={handleSubmit} />
                ) : (
                  <input type="submit" value="수정" onClick={handleUpdate} />
                )
              }
        </td>
      </table>

      <hr />
      <div className='App'> [ 목록 ] </div>
      <table>
        {
          viewContent.map((item, idx) =>
            <tr className='listBox' key={idx}>
              <td>{item.btitle}</td>
              <td>{item.bname}</td>
              <td>
                <button onClick={() => {
                  setBoardContent(item)
                  setEditId(item.bnum)
                }}>수정</button>
                <button onClick={() => handleDelete(item.bnum)}>삭제</button>
              </td>
            </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
