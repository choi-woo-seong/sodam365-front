import React, { useState } from "react";
import "../styles/BusinessSignup.css"; // 스타일 적용

function BusinessSignup() {
    const [formData, setFormData] = useState({
        userid: "",  
        password: "",
        confirmPassword: "",
        name: "",
        ownername: "",
        ownernum: "",
        ownerloc: "",
        email: "",
        phone1: "",
        phone2: "",
    });

    const [isIdAvailable, setIsIdAvailable] = useState(null);  // 중복확인 결과 상태
   


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("회원가입 데이터:", formData);

        fetch("http://192.168.0.102:8080/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log("회원가입 성공:", data);
                } else {
                    console.error("회원가입 실패:", data.message);
                }
            })
            .catch(error => {
                console.error("서버와 연결 중 오류 발생:", error);
            });
    };

    // 중복확인 함수
    const handleDuplicateCheck = () => {
        fetch(`http://192.168.0.102:8080/api/users/check-duplicate?userid=${formData.userid}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // 이미 존재하는 아이디
                    setIsIdAvailable(false);
                    alert("이미 사용 중인 아이디입니다.");
                } else {
                    // 사용 가능한 아이디
                    setIsIdAvailable(true);
                    alert("사용 가능한 아이디입니다.");
                }
            })
            .catch(error => {
                console.error("중복 확인 오류 발생:", error);
            });
    };

    return (
        <div className="signup-container">
            <div className="user-type-container">
  <div className="user-type selected">사업자회원</div>
  <div className="user-type">일반회원</div>
</div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>아이디</label>
                    <div className="input-with-button">  {/* input과 버튼을 감싸는 div */}
                    <input
                        type="text"
                        name="userid"
                        value={formData.userid}
                        onChange={handleChange}
                    />
                    <button type="button" className="submit-btn" onClick={handleDuplicateCheck}>
                        중복확인
                    </button>
                    </div>
                    </div>



                    <div>
                    {isIdAvailable === false && <span style={{ color: 'red' }}>아이디가 이미 존재합니다.</span>}
                    {isIdAvailable === true && <span style={{ color: 'green' }}>사용 가능한 아이디입니다.</span>}
                    </div>
                <div className="input-group">
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>사업자 명</label>
                    <input
                        type="text"
                        name="ownername"
                        value={formData.ownername}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>사업자 번호</label>
                    <input
                        type="text"
                        name="ownernum"
                        value={formData.ownernum}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>사업자 주소</label>
                    <input
                        type="text"
                        name="ownerloc"
                        value={formData.ownerloc}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>연락처1</label>
                    <input
                        type="text"
                        name="phone1"
                        value={formData.phone1}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>연락처2</label>
                    <input
                        type="text"
                        name="phone2"
                        value={formData.phone2}
                        onChange={handleChange}
                    />
                </div>

                <div className="btn2">
                <button type="submit" className="submit-btn">
                    가입
                </button>
                </div>
            </form>
        </div>
    );
}

export default BusinessSignup;
