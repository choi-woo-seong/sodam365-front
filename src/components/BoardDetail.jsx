import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/BoardDetail.css";

const BoardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    
    
    // 임시 데이터 (테스트용)
    const dummyData = {
        title: `테스트 게시글 ${id}`,
        content: "이곳은 게시글 상세 내용입니다. 백엔드 없이 테스트 중",
      };
  
      setTimeout(() => {
        setPost(dummyData);
      }, 500); // 0.5초 후 데이터 설정 (로딩 효과 확인용)
    
    
      // axios
    //   .get(`http://localhost:8080/board/${id}`)
    //   .then((response) => setPost(response.data))
    //   .catch((error) => console.error(error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="board-detail-container">
      <h2 className="board-detail-title">상품</h2>
      <table className="board-detail-table">
        <tbody>
          <tr>
            <td className="board-detail-label">제목</td>
            <td>{post.title}</td>
          </tr>
          <tr>
            <td className="board-detail-label">내용</td>
            <td>{post.content}</td>
          </tr>
          <tr>
            <td className="board-detail-label">링크</td>
            <td><a href="#">관련 링크</a></td>
          </tr>
        </tbody>
      </table>
      <Link to="/board" className="back-button">목록</Link>
    </div>
  );
};

export default BoardDetail;
