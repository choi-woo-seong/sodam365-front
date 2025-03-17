import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./detail.css";

function CommunityDetail() {

  const [c_comments, setComments] = useState([]);
  const [c_comment, setComment] = useState("");
  const [c_title, setTitle] = useState("");
  const [c_content, setContent] = useState("");
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

  // const handleCommentSubmit = () => {
  //   if (c_comment.trim() === "") return;
  //   const newComment = {
  //     id: Date.now(), 
  //     author: "익명",
  //     content: c_comment,
  //     date: new Date().toLocaleDateString(),
  //   };
  //   setComments([...c_comments, newComment]);
  //   setComment("");
  // };

  const navigate = useNavigate(); // 🔹 페이지 이동을 위한 useNavigate 사용

  // 🔹 목록 버튼 클릭 시 이동하는 함수
  const handleGoToList = () => {
    navigate("/communityBoardList"); // 🔹 "/noticelist" 페이지로 이동
  };
  
  return (
<div className="detail-container">
      <div className="detail-content">
        <h2 className="detail-title">자유게시판</h2>
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
            <input type="text" className="detail-text" name="c_title" id="c_title" disabled={true}/>
          </div>
          <div className="detail-row content-row">
            <div className="detail-label">내용</div>
            <textarea className="detail-text large" name="c_contents" id="c_contents" disabled={true}></textarea>
          </div>
        </div>

        {/* 댓글 목록 */}
      <h3 className="detail-comment-list-title">댓글 목록</h3>
      <div className="detail-comment-table">
        {c_comments.map((c) => (
          <div key={c.id} className="detail-comment-card">
            <div className="detail-comment-author-date">
              <span>{c.author}</span> | <span>{c.date}</span>
            </div>
            <div className="detail-comment-content">
              {c.content}
            </div>
          </div>
        ))}
      </div>

      {/* 댓글 입력 */}
      <div className="detail-comment-input-section">
        <input
          type="text"
          className="detail-comment-text-input"
          placeholder="댓글을 입력해주세요."
          name="c_comment"
          id="c_comment"
          value={c_comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="detail-submit-comment-btn"
          // onClick={handleCommentSubmit}
        >
          등록
        </button>
      </div>

        <button className="detail-button" onClick={handleGoToList}>목록</button>
      </div>
    </div>
  )
}

export default CommunityDetail;
