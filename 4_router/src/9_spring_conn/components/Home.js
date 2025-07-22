import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>초기화면</h2>
      <button onClick={() => navigate('/member/viewAllMember')}>회원목록 보기</button>
    </div>
  );
};

export default Home;
