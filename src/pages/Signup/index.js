import React, { useState, useRef } from "react";
import "./Signup.css";

const Signup = () => {
  // 폼의 입력값을 저장하는 상태 변수
  const [formData, setFormData] = useState({
    id: "", 
    password: "", 
    confirmPassword: "",
    name: "", 
    address: "", 
    email: "", 
    contact: "",
  });

  // 각 입력 필드에 대한 오류 메시지를 저장하는 상태 변수
  const [errors, setErrors] = useState({});

  // 선택된 탭 (일반 회원 또는 사업자 회원)을 저장하는 상태 변수
  const [selectedTab, setSelectedTab] = useState("general");

  // 아이디 중복 확인 상태 변수 (아이디가 사용 가능한지 여부)
  const [isIdAvailable, setIsIdAvailable] = useState(null);

  // 각 입력 필드에 대한 ref를 생성하여 포커스 등을 관리할 수 있도록 함
  const refs = {
    id: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    name: useRef(null),
    address: useRef(null),
    email: useRef(null),
    contact: useRef(null),
  };

  // 폼의 입력값이 변경될 때마다 호출되는 함수
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 폼 유효성 검사 함수
  const validateForm = () => {
    const newErrors = {}; // 오류 메시지를 저장할 객체
    // formData의 모든 필드에 대해 값이 비어있으면 오류를 기록
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "입력하세요."; // 필드가 비어있으면 "입력하세요." 메시지 추가
    });

    // 비밀번호와 비밀번호 확인이 일치하는지 검사
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다."; // 불일치 시 오류 메시지 추가
    }

    setErrors(newErrors); // 오류 메시지 상태 업데이트

    // 첫 번째 오류가 발생한 필드에 포커스를 설정
    if (Object.keys(newErrors).length > 0) {
      refs[Object.keys(newErrors)[0]].current.focus(); // 첫 번째 오류 필드로 포커스 이동
    }

    // 오류가 없으면 true, 오류가 있으면 false 반환
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작을 막음
    if (validateForm() && isIdAvailable) {
      alert("회원가입 완료!"); // 모든 유효성 검사 통과 시 회원가입 완료 메시지
    } else {
      alert("빈칸을 확인해주세요."); // 유효성 검사 실패 시 알림
    }
  };

  // 아이디 중복 확인 함수
  const checkIdAvailability = () => {
    // 예시로 존재하는 아이디들 (실제 데이터베이스에서 확인해야 함)
    const existingIds = ["user123", "testuser", "admin"];
    setIsIdAvailable(!existingIds.includes(formData.id)); // 아이디가 이미 존재하는지 확인
  };

  return (
    <div className="signup-container">
      {/* 탭 버튼 (일반 회원, 사업자 회원 선택) */}
      <div className="signup-buttons">
        <button onClick={() => setSelectedTab("business")} className={selectedTab === "business" ? "active" : ""}>
          사업자 회원
        </button>
        <button onClick={() => setSelectedTab("general")} className={selectedTab === "general" ? "active" : ""}>
          일반 회원
        </button>
      </div>

      {/* '일반 회원' 탭일 때만 보이는 회원가입 폼 */}
      {selectedTab === "general" && (
        <form onSubmit={handleSubmit}>
          {/* 아이디 입력 필드 */}
          <div className="input-container">
            <label>아이디:</label>
            <input 
              type="text" 
              name="id" 
              ref={refs.id} 
              value={formData.id} 
              onChange={handleChange} 
            />
            <button type="button" onClick={checkIdAvailability}>중복확인</button>
          </div>

          {/* 아이디 중복 검사 결과 */}
          {isIdAvailable === false && <div className="error-msg">아이디가 이미 존재합니다.</div>}
          {isIdAvailable === true && <div className="success-msg">사용 가능한 아이디입니다.</div>}

          {/* 비밀번호 입력 필드 */}
          <div className="input-container">
            <label>비밀번호:</label>
            <input 
              type="password" 
              name="password" 
              ref={refs.password} 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>

          {/* 비밀번호 확인 입력 필드 */}
          <div className="input-container">
            <label>비밀번호 확인:</label>
            <input 
              type="password" 
              name="confirmPassword" 
              ref={refs.confirmPassword} 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </div>

          {/* 이름 입력 필드 */}
          <div className="input-container">
            <label>이름:</label>
            <input 
              type="text" 
              name="name" 
              ref={refs.name} 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>

          {/* 주소 입력 필드 */}
          <div className="input-container">
            <label>주소:</label>
            <input 
              type="text" 
              name="address" 
              ref={refs.address} 
              value={formData.address} 
              onChange={handleChange} 
            />
          </div>

          {/* 이메일 입력 필드 */}
          <div className="input-container">
            <label>이메일:</label>
            <input 
              type="email" 
              name="email" 
              ref={refs.email} 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>

          {/* 연락처 입력 필드 */}
          <div className="input-container">
            <label>연락처:</label>
            <input 
              type="text" 
              name="contact" 
              ref={refs.contact} 
              value={formData.contact} 
              onChange={handleChange} 
            />
          </div>

          {/* 제출 버튼 */}
          <button type="submit">가입</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
