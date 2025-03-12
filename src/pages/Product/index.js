import React, { useState, useRef } from "react";


const ProductRegister = () => {
  // 상품 등록 폼 데이터 상태
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    link: "",
  });

  // 오류 메시지 상태
  const [errors, setErrors] = useState({});

  // 각 입력 필드에 대한 ref 생성
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);

  // 폼 입력값 변경 시 호출되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 유효성 검사 함수
  const validateForm = () => {
    const newErrors = {};

    // 제목 유효성 검사
    if (!formData.title) {
      newErrors.title = "제목을 입력하세요.";
    }

    // 금액 유효성 검사
    if (!formData.price) {
      newErrors.price = "금액을 입력하세요.";
    }

    // 설명 유효성 검사
    if (!formData.description) {
      newErrors.description = "설명을 입력하세요.";
    }

    // 링크 유효성 검사
    if (!formData.link) {
      newErrors.link = "링크를 입력하세요.";
    }

    setErrors(newErrors);
  

    // 첫 번째 오류가 발생한 입력 필드에 포커스를 설정
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      switch (firstErrorField) {
        case "title":
          titleRef.current.focus();
          break;
        case "price":
          priceRef.current.focus();
          break;
        case "description":
          descriptionRef.current.focus();
          break;
        case "link":
          linkRef.current.focus();
          break;
        default:
          break;
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("상품이 등록되었습니다.");
    } else {
      alert("빈칸을 확인해주세요.");
    }
  };

  return (
    <div className="business-register-container">
      <h2>상품 등록</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* 제목 입력 */}
        <div className="business-input-container">
          <label>제목:</label>
          <input
            type="text"
            name="title"
            ref={titleRef}
            value={formData.title}
            onChange={handleChange}
           
          />
        </div>

        {/* 금액 입력 */}
        <div className="business-input-container">
          <label>금액:</label>
          <input
            type="number"
            name="price"
            ref={priceRef}
            value={formData.price}
            onChange={handleChange}
          
          />
        </div>

        {/* 설명 입력 */}
        <div className="business-input-container">
          <label>설명:</label>
          <textarea
            name="description"
            ref={descriptionRef}
            value={formData.description}
            onChange={handleChange}
            
          />
        </div>

        {/* 링크 입력 */}
        <div className="business-input-container">
          <label>링크:</label>
          <input
            type="text"
            name="link"
            ref={linkRef}
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

export default ProductRegister;
