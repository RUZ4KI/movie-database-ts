import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: var(--darkGrey);
`;


const  App : React.FC = () => (
     <Router>
       <Wrapper>
        <Header/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/:movieId' element={<Movie/>}/>
           <Route path='/*' element={<NotFound/>}/>
         </Routes>
        <GlobalStyle/>
       </Wrapper>
     </Router>
);

export default App;
