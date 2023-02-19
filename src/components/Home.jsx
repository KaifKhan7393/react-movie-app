import React, { useEffect } from 'react'
import styled from 'styled-components';
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movieSlice';
const Home = () => {

    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);


    return (
        <HomeContainer>
            <MovieListing />
        </HomeContainer>
    )
}

const HomeContainer = styled.div``

export default Home