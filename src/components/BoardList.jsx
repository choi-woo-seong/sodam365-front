import { Link } from "react-router-dom";
import "../styles/BoardList.css";

const BoardList = () => {
  const posts = [
    { id: 1, title: "첫 번째 게시글", author: "홍길동", date: "2025-03-11" },
    { id: 2, title: "두 번째 게시글", author: "이순신", date: "2025-03-10" },
  ];

  return (
    <div className="board-list-container">
      <h2 className="board-title">상품 목록</h2>
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록날짜</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/board/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>&lt;&lt; &lt; </span>
        {[1, 2, 3, 4, 5].map((num) => (
          <span key={num} className="page-number">{num}</span>
        ))}
        <span> &gt; &gt;&gt;</span>
      </div>
    </div>
  );
};

export default BoardList;

