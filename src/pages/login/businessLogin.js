import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "./login.css";

const BusinessLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="login-container">
      <h1 className="title">
        소담<span className="highlight">365</span>
      </h1>

      <div className="divider-up"></div>

      <div className="tab-container">
  <Link to="/business-login" className={`tab ${location.pathname === "/business-login" ? "active" : ""}`}>
    사업자 회원
  </Link>
  <Link to="/person-login" className={`tab ${location.pathname === "/person-login" ? "active" : ""}`}>
    일반 회원
  </Link>
</div>

      <div className="form-container">
      <div className="input-container">
        <input type="text" placeholder="아이디" className="input-box" />
        <input type="password" placeholder="비밀번호" className="input-box" />
        <input type="text" placeholder="사업자 번호" className="input-box" />
      </div>
      <button className="login-button">로그인</button>
      </div>
      <div className="divider-down"></div>

      <p className="register" >회원가입</p>
    </div>
  );
};

export default BusinessLogin;