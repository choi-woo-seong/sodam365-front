import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "./login.css";

const BusinessLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

// 중복확인 함수
const handleDuplicateCheck = () => {
  fetch(`http://192.168.0.102:8080/api/users/check-duplicate`)
      .then(response => response.json())
      .then(data => {
          // if (data) {
          //     // 이미 존재하는 아이디
          //     setIsIdAvailable(false);
          //     alert("이미 사용 중인 아이디입니다.");
          // } else {
          //     // 사용 가능한 아이디
          //     setIsIdAvailable(true);
          //     alert("사용 가능한 아이디입니다.");
          // }
      })
      .catch(error => {
          console.error("중복 확인 오류 발생:", error);
      });
};

// 🔹 회원가입 버튼 클릭 시 회원가입 페이지로 이동하는 함수
const handleRegisterClick = () => {
  navigate("/businesssignup"); // "/register" 경로로 이동
};

  return (
    <div className="login-container">
      <h1 className="title">
        소담<span className="highlight">365</span>
      </h1>

      <div className="divider-up"></div>

      <div className="tab-container">
  <Link to="/businessLogin" className={`tab ${location.pathname === "/businessLogin" ? "active" : ""}`}>
    사업자 회원
  </Link>
  <Link to="/personLogin" className={`tab ${location.pathname === "/personLogin" ? "active" : ""}`}>
    일반 회원
  </Link>
</div>

      <div className="form-container">
      <div className="input-container3">
        <input type="text" placeholder="아이디" className="input-box" name="b_userid" id="b_userid"/>
        <input type="password" placeholder="비밀번호" className="input-box" name="b_password" id="b_password" />
        <input type="text" placeholder="사업자 번호" className="input-box"  name="ownernum" id="ownernum"/>
      </div>
      <button className="login-button" onClick={handleDuplicateCheck}>로그인</button>
      </div>
      <div className="divider-down"></div>

      <p className="register" onClick={() => navigate("/signup")}>회원가입</p>
    </div>
  );
};

export default BusinessLogin;