import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getDetailsOfMovieOrShow, removeDetailsOfMovieOrShow } from '../features/movieSlice';

const MovieDetails = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getDetailsOfMovieOrShow);
    console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeDetailsOfMovieOrShow);
        }
    }, [dispatch, imdbID]);


    return (
        <MovieSection>
            {Object.keys(data).length === 0 ? (<h3>Loading...</h3>) : (
                <>
                    <SectioniLeft>
                        <MovieTitle>
                            <MovieTitle>{data.Title}</MovieTitle>
                            <MovieRating>
                                <span>
                                    IMDB Rating ⭐: {data.imdbRating}
                                </span>
                                <span>
                                    IMDB Votes 👍: {data.Votes}
                                </span>
                                <span>
                                    Runtime ⌚: {data.Runtime}
                                </span>
                                <span>
                                    Year : {data.Year}
                                </span>
                            </MovieRating>
                            <MoviePlot>{data.Plot}</MoviePlot>
                            <MovieInfo>
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Generes</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </MovieInfo>
                        </MovieTitle>
                    </SectioniLeft>
                    <SectionRight>
                        <img src={data.Poster} alt={data.Title} />
                    </SectionRight>
                </>
            )}

        </MovieSection>
    )
}

const MovieSection = styled.div`
    display:flex;
    justify-content:space-evenly;
    padding:5%;
    color:#ffffff;
    font-weight:400;
    @media (max-width:500px){
        flex-direction:column;
    }
`
const SectioniLeft = styled.div`

`

const MovieTitle = styled.div`
    font-size:25px;
    color:#ffffff;
`
const MovieRating = styled.div`
    padding-left:3px;
    margin-top:20px;
    color:#79b8f3;
    display:flex;
    span{
        margin-right:20px;
        font-size:15px;
    }

`

const MoviePlot = styled.div`
    margin-top:20px;
    line-height:1.8rem;
    font-size:15px;
    padding-right:40px;
`
const MovieInfo = styled.div`
    span:first-child {
        padding:10px 0;
        color:#ffffff;
        font-weight:600;
        width:100px;
        display: inline-block;
    }
    span{
        color:#79b8f3;
        font-size:18px;
    }
`

const SectionRight = styled.div`
`
export default MovieDetails