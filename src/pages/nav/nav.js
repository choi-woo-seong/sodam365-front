import React from 'react';
import './nav.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Nav() {
  return (
    <nav className="navbar">
      {/* 상단: 로고 + 사용자 정보 */}
      <div className="nav-top">
        <div className="nav-logo">
          <span>소담</span><span className="highlight">365</span>
        </div>
        <div className="nav-user">
          <span id="user-name">000님</span>
          <span>찜</span>
          <span >로그아웃</span>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      {/* 하단: 메뉴 바 (남색 배경) */}
      <div className="nav-menu">
        <div className="nav-item-container">
          <button className="nav-item" data-page="finance">금융</button>
          <div className="submenu">
            <button data-page="finance">금융 안내 보기</button>
          </div>
        </div>
        <div className="nav-item-container">
          <button className="nav-item" data-page="product">상품</button>
          <div className="submenu">
            <button data-page="product">상품 등록</button>
            <button data-page="product">상품 보기</button>
          </div>
        </div>
        <div className="nav-item-container">
          <button className="nav-item" data-page="business">비즈니스</button>
          <div className="submenu">
            <button data-page="business">비즈니스 등록</button>
            <button data-page="business">비즈니스 보기</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
