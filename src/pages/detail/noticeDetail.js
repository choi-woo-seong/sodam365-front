import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./detail.css";

function NoticeDetail() {
  const navigate = useNavigate(); // 🔹 페이지 이동을 위한 useNavigate 사용
  const b_contents = "금융"; // 📌 실제 데이터와 연결 필요

  // 📌 찜 상태 (DB 연결 전에는 localStorage 사용)
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 📌 1️⃣ 마운트 시 localStorage에서 찜 여부 확인
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setIsBookmarked(savedBookmarks.includes(b_contents));
  }, []);

  // 📌 2️⃣ 찜 버튼 클릭 시 실행 (localStorage에서 저장/삭제)
  const handleBookmarkClick = () => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (isBookmarked) {
      // 📌 찜 해제 (배열에서 삭제)
      const updatedBookmarks = savedBookmarks.filter((item) => item !== b_contents);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      // 📌 찜 추가 (배열에 추가)
      savedBookmarks.push(b_contents);
      localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
      setIsBookmarked(true);
    }
  };

  // 🔹 목록 버튼 클릭 시 이동하는 함수
  const handleGoToList = () => {
    navigate("/noticeBoardList"); // 🔹 "/noticelist" 페이지로 이동
  };
  
  return (
<div className="detail-container">
      <div className="detail-content">
        <h2 className="detail-title">공지사항</h2>
  <hr />
        
        <div className="detail-header">
  <FontAwesomeIcon
    icon={faBookmark}
    className={`bookmark-icon ${isBookmarked ? "active" : ""}`}
    onClick={handleBookmarkClick}
  />
</div>

        <div className="detail-box">
          <div className="detail-row">
            <div className="detail-label">제목</div>
            <input type="text" className="detail-text" name="n_title" id="n_title" disabled={true}/>
          </div>
          <div className="detail-row content-row">
            <div className="detail-label">내용</div>
            <textarea className="detail-text large" name="n_contents" id="n_contents" disabled={true}></textarea>
          </div>
        </div>

        <button className="detail-button" onClick={handleGoToList}>목록</button>
      </div>
    </div>
  )
}

export default NoticeDetail;
