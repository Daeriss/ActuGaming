import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ArticlesPage from "./pages/ArticlesPages/ArticlesPage";
import MentionLegalPage from "./pages/MentionLegalPage/MentionLegalPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className='container-fluid p-0'>
            <Router>
                <div className="row g-0" >
                    <NavBar />
                </div>
                <Routes>
                    <Route path=""  element={<HomePage/>} ></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/contact" element={<ContactPage/>}></Route>
                    <Route path="/login"  element={<LoginPage/>} ></Route>
                    <Route path="/article/:id" element={<ArticlePage/>}></Route>
                    <Route path="/articles" element={<ArticlesPage/>}></Route>
                    <Route path="/mentionLegal" elemet={<MentionLegalPage/>}></Route>
                </Routes>
                <div className="row g-0" style={{backgroundColor:"#EE9F9F", position:"fixed" ,left: 0,bottom: 0}}>
                    <Footer></Footer>
                </div>
            </Router>
        </div>
    );
}

export default App;
