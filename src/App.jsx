import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/header'
import MovieDetail from './components/MovieDetails';
import Home from './components/Home';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
const App = () => {

  return (
    <div className="app">
      <Router>
        <Header />
        <Conatainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Conatainer>
        <Footer />
      </Router>
    </div>
  )
}

const Conatainer = styled.div`
  margin:0 5%;
`

export default App