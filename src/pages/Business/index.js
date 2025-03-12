import React, { useState, useRef } from "react";
import "./Business.css";

const BusinessRegister = () => {
  // 비즈니스 등록 폼 데이터 상태
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    description: "",
    link: "",
  });

  // 각 입력 필드에 대한 오류 메시지를 저장하는 상태 변수
  const [errors, setErrors] = useState({});

  // 각 입력 필드에 대한 ref 생성
  const refs = {
    title: useRef(null),
    amount: useRef(null),
    description: useRef(null),
    link: useRef(null),
  };

  // 폼의 입력값 변경 시 호출되는 함수
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 폼 유효성 검사 함수
  const validateForm = () => {
    const newErrors = {};
    // formData의 모든 필드에 대해 값이 비어있으면 오류를 기록
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "입력하세요.";  // 오류 메시지
    });

    setErrors(newErrors);

    // 첫 번째 오류가 발생한 필드에 포커스를 설정
    if (Object.keys(newErrors).length > 0) {
      refs[Object.keys(newErrors)[0]].current.focus();  // 포커스 이동
    }

    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("비즈니스 등록이 완료되었습니다!");
    } else {
      alert("빈칸을 확인해주세요.");
    }
  };

  return (
    <div className="business-register-container">
      <h2>비즈니스 등록</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* 제목 입력 */}
        <div className="business-input-container">
          <label>제목:</label>
          <input
            type="text"
            name="title"
            ref={refs.title}
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* 금액 입력 */}
        <div className="business-input-container">
          <label>금액:</label>
          <input
            type="number"
            name="amount"
            ref={refs.amount}
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        {/* 설명 입력 */}
        <div className="business-input-container">
          <label>설명:</label>
          <textarea
            name="description"
            ref={refs.description}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* 링크 입력 */}
        <div className="business-input-container">
          <label>링크:</label>
          <input
            type="url"
            name="link"
            ref={refs.link}
            value={formData.link}
            onChange={handleChange}
          />
         
        </div>

        {/* 제출 버튼 */}
        <button className="business-submit" type="submit">등록</button>
      </form>
    </div>
  );
};

export default BusinessRegister;
