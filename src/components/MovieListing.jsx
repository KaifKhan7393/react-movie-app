import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../features/movieSlice';
import MovieCard from './MovieCard';
import Slider from "react-slick";

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies = "";
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) :
        (<div className="movies-error"><h3>{movies.Error
        }</h3></div>);


    let renderShows = "";
    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />
        })
    ) :
        (<div className="show-error"><h3>{movies.Error
        }</h3></div>);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <MovieWrapper>
            <MovieList>
                <h2>Movies</h2>
                <MovieContainer>
                    <Slider {...settings}>
                        {renderMovies}
                    </Slider>
                </MovieContainer>
            </MovieList>
            <ShowList>
                <h2>Shows</h2>
                <MovieContainer>
                    <Slider {...settings}>
                        {renderShows}
                    </Slider>
                </MovieContainer>
            </ShowList>
        </MovieWrapper>
    )
}

const MovieWrapper = styled.div`
`

const MovieList = styled.div`
    margin:30px;
    h2{
        color:#79b8f3;
        margin-bottom:26px;
        font-weight:400;
    }
`
const ShowList = styled(MovieList)`
`

const MovieContainer = styled.div`
    ${'' /* display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    grid-gap:25px; */}
`

export default MovieListing