import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./Components/Nav";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='Courses' element={<Courses />}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
