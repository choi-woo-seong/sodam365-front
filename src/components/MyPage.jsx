import React, { useState } from "react";
import "../styles/MyPage.css"; // 스타일 적용

function MyPage() {
    const [formData, setFormData] = useState({
        id: "user123",
        password: "",
        confirmPassword: "",
        name: "홍길동",
        businessName: "소담365",
        businessNumber: "123-45-67890",
        email: "example@sodam.com",
        phone1: "010-1234-5678",
        phone2: "010-9876-5432"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("수정된 데이터:", formData);
    };

    return (
        <div className="mypage-container">
            <h2>마이페이지</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>아이디</label>
                    <input type="text" name="id" value={formData.id} readOnly />
                </div>
                <div className="input-group">
                    <label>비밀번호 수정</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>비밀번호 확인</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>이름</label>
                    <input type="text" name="name" value={formData.name} readOnly />
                </div>
                <div className="input-group">
                    <label>사업자 명</label>
                    <input type="text" name="businessName" value={formData.businessName} readOnly />
                </div>
                <div className="input-group">
                    <label>사업자 번호</label>
                    <input type="text" name="businessNumber" value={formData.businessNumber} readOnly />
                </div>
                <div className="input-group">
                    <label>이메일 수정</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>연락처1 수정</label>
                    <input type="text" name="phone1" value={formData.phone1} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>연락처2 수정</label>
                    <input type="text" name="phone2" value={formData.phone2} onChange={handleChange} />
                </div>

                <div className="btn1">
                <button type="submit" className="submit-btn1">탈퇴</button>
                <button type="submit" className="submit-btn2">수정</button>
                </div>

            </form>
        </div>
    );
}

export default MyPage;
