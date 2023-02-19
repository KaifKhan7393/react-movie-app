import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const MovieCard = ({ data }) => {
    return (
        <CardItem>
            <Link to={`/movie/${data.imdbID}`}>
                <CardInner>
                    <CardTop>
                        <img src={data.Poster} alt={data.Title} />
                    </CardTop>
                    <CardBottom>
                        <CardInfo>
                            <h4>{data.Title}</h4>
                            <p>{data.Year}</p>
                        </CardInfo>
                    </CardBottom>
                </CardInner>
            </Link>
        </CardItem>
    )
}

const CardItem = styled.div`
    background:#1a242f;
    cursor:pointer;
    transition: all 0.5s ease-in-out;
    min-height:450px;
    height:100%;
    margin:10px;
    &:hover{
        transform:scale(1.1);
    }
`

const CardInner = styled.div`

`

const CardTop = styled.div`
    height:300px;
    img{
        width:100%;
        height:100%;

    }
`
const CardBottom = styled.div`
    padding:20px;
`
const CardInfo = styled.div`
    color:#ffffff;
    h4{
        font-size:20px;
        font-weight:400;
        margin-bottom:10px;
    }
`

export default MovieCard