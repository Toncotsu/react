import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberList = () => {
  const [member, setMember] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/member/viewAllMember')
      .then(result => setMember(result.data))
      .catch(err => console.error("불러오기 실패", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">회원 리스트</h2>

      <ul className="list-group">
        {member.map((m, idx) => (
          <li key={idx} className="list-group-item">
            <strong>ID:</strong> {m.id}
            <span className="mx-2">|</span>
            <strong>이름:</strong> {m.name}
            <span className="mx-2">|</span>
            <strong>PASS:</strong> {m.pass}
          </li>
        ))}
      </ul>

      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          ← 돌아가기
        </button>
      </div>
    </div>
  );
};

export default MemberList;
