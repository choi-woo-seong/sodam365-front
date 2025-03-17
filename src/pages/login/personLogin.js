import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";

const PersonLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 함수
  const handleLogin = () => {
    if (!userid || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 🔹 로그인 성공 (실제 백엔드 연결 시 fetch 요청 추가 가능)
    localStorage.setItem("user", userid); // ✅ 로컬 스토리지에 사용자 정보 저장
    alert("로그인 성공!");
    navigate("/main"); // ✅ 로그인 후 메인 페이지로 이동
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
        <div className="input-container2">
          <input type="text" placeholder="아이디" className="input-box" name="userid" id="userid"
            value={userid} onChange={(e) => setUserid(e.target.value)} />
          <input type="password" placeholder="비밀번호" className="input-box" name="password" id="password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-button" onClick={handleLogin}>로그인</button>
      </div>

      <div className="divider-down"></div>
      <p className="register" onClick={() => navigate("/personsignup")}>회원가입</p>
    </div>
  );
};

export default PersonLogin;
