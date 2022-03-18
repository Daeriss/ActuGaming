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

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path=""  element={<HomePage/>} ></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/contact" element={<ContactPage/>}></Route>
                    <Route path="/login"  element={<LoginPage/>} ></Route>
                    <Route path="/article" element={<ArticlePage/>}></Route>
                    <Route path="/articles" element={<ArticlesPage/>}></Route>
                    <Route path="mentionLegal" elemet={<MentionLegalPage/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
