import { Link, useLocation, useNavigate } from "react-router-dom";
import React , {useState,useRef}from "react";
import "./login.css";

const PersonLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [Token, setToken] = useState("");
  const [UserName, setUserName] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  
  // 일반폼 입력 상태
  const [formData, setFormData] = useState({
    nUserid: "",
    nPassword: "",
  });
  
  
  // 일반입력값 변경 핸들러
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const refs = {
    nUserid: useRef(null),
    nPassword: useRef(null),
  };

  // // 로그인 함수
  // const handleLogin = () => {
  //   if (!userid || !password) {
  //     alert("아이디와 비밀번호를 입력해주세요.");
  //     return;
  //   }

  //   // 🔹 로그인 성공 (실제 백엔드 연결 시 fetch 요청 추가 가능)
  //   localStorage.setItem("user", userid); // ✅ 로컬 스토리지에 사용자 정보 저장
  //   alert("로그인 성공!");
  //   navigate("/main"); // ✅ 로그인 후 메인 페이지로 이동
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch("http://192.168.0.102:8080/auth/login/nuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nUserid: formData.nUserid, // 🔥 필드명 확인 (백엔드와 동일해야 함)
              nPassword: formData.nPassword,
          }),

            credentials: "include",
            mode: 'cors', 
        });
  
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "로그인 실패");
        }
  
        const data = await response.json();
        localStorage.setItem("jwt", data.token); // 🔥 JWT 저장
        localStorage.setItem("userName", data.name); // 🔥 사용자 이름 저장
  
        alert("로그인 성공! JWT:"+data.token + "이름:" + data.name);
        setToken(data.token);
        setUserName(data.name);
        setErrorMessage("");
        navigate("/main")
  
    } catch (error) {
        console.error("로그인 오류:", error.message);
        setErrorMessage(error.message);
    }
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
          <input type="text" placeholder="아이디" className="input-box" name="nUserid" id="nUserid"
            ref={refs.nUserid} value={formData.nUserid} onChange={handleChange} />
          <input type="password" placeholder="비밀번호" className="input-box" name="nPassword" id="nPassword"
            ref={refs.nPassword} value={formData.nPassword} onChange={handleChange} />
        </div>
        <button className="login-button" onClick={handleLogin}>로그인</button>
      </div>

      <div className="divider-down"></div>
      <p className="register" onClick={() => navigate("/signup")}>회원가입</p>
    </div>
  );
};

export default PersonLogin;
