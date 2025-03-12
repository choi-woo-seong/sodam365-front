import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import MyPage from "./components/MyPage";
import BusinessSignup from "./components/BusinessSignup";
import Main from "./pages/MainPage";
import Nav from "./pages/nav/nav";
import Footer from "./pages/footer/footer";
import Notice from "./pages/notice/notice";
import PersonSignup from "./pages/Signup";

function App() {
  return (

    <Router>
      <div>
      <Nav />
      <Routes>
    
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/businesssignup" element={<BusinessSignup />} />
        <Route path="/personsignup" element={<PersonSignup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/notice" element={<Notice/>}/>

      </Routes>
      <Footer />
      </div>
    </Router>

  );
}

export default App;
