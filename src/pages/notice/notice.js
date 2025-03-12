import React from "react";
import "./notice.css";

function Notice() {
  return (
<div className="notice-container">
      <div className="notice-content">
        <h2 className="notice-title">공지사항</h2>
        <div className="divider"></div>

        <div className="notice-box">
          <div className="notice-row">
            <div className="notice-label">제목</div>
            <div className="notice-text"></div>
          </div>
          <div className="notice-row content-row">
            <div className="notice-label">내용</div>
            <div className="notice-text large"></div>
          </div>
        </div>

        <button className="notice-button">목록</button>
      </div>
    </div>
  )
}

export default Notice;