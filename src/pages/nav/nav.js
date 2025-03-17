import React, { useEffect, useState } from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Nav() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null); // 🔹 사용자 이름 상태

  // 🔹 컴포넌트 마운트 시 localStorage에서 사용자 정보 가져오기
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('user')); // JSON 데이터 가져오기
  //   if (storedUser && storedUser.username) {
  //     setUserName(storedUser.username); // 사용자 이름 설정
  //   }
  // }, []);

  // 🔹 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('user'); // 사용자 정보 삭제
    setUserName(null); // 상태 초기화
    alert("로그아웃되었습니다.");
    navigate('/businessLogin'); // 로그인 페이지로 이동
  };

  return (
    <nav className="navbar">
      {/* 상단: 로고 + 사용자 정보 */}
      <div className="nav-top">
        <div className="nav-logo">
          <span onClick={() => navigate('/main')}>소담</span>
          <span className="highlight" onClick={() => navigate('/main')}>365</span>
        </div>

        <div className="nav-user">
              <span id="user-name">{userName}님</span>
              <span onClick={() => navigate('/bookMarkBoardList')}>찜</span>
              <span onClick={handleLogout}>로그아웃</span>
              <i className="fas fa-user-circle clickable" onClick={() => navigate('/mypage')}></i>
          
        </div>
      </div>

      {/* 하단: 메뉴 바 (남색 배경) */}
      <div className="nav-menu">
        <div className="nav-item-container">
          <button className="nav-item" data-page="finance">금융</button>
          <div className="submenu">
            <button data-page="finance" onClick={() => navigate('/bankBoardList')}>금융 안내 보기</button>
          </div>
        </div>
        <div className="nav-item-container">
          <button className="nav-item" data-page="product">상품</button>
          <div className="submenu">
            <button data-page="product" onClick={() => navigate('/productRegister')}>상품 등록</button>
            <button data-page="product" onClick={() => navigate('/productBoardList')}>상품 보기</button>
          </div>
        </div>
        <div className="nav-item-container">
          <button className="nav-item" data-page="business">비즈니스</button>
          <div className="submenu">
            <button data-page="business" onClick={() => navigate('/businessRegister')}>비즈니스 등록</button>
            <button data-page="business" onClick={() => navigate('/businessBoardList')}>비즈니스 보기</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
