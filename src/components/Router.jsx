import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Header from "./Header/index";
import Footer from "./Footer/index";
import About from "../Pages/About";
import Logements from "../Pages/Logements";

import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    font-family: 'Montserrat', sans-serif;
    }
    body {
        background-color: #f5f5f5;
    }
`
const DivApp = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0 100px;
`

function Router () {
    return (
    <BrowserRouter>
        <GlobalStyle />
        <DivApp>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/Logements/:id" element={<Logements />} />
                    <Route path='*' element={<Error />} />
                    <Route exact path='/About' element={<About />} />
                </Routes>
            <Footer />
        </DivApp>
    </BrowserRouter>
    );
}

export default Router;