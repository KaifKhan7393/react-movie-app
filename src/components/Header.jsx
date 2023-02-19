import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movieSlice'

const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    }
    console.log(term);

    return (
        <Container>
            <Logo>
                <Link className="logo-text" to='/'>
                    MovieApp
                </Link>
            </Logo>
            <SearchBar>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'>🔍</button>
                </form>
            </SearchBar>
            <UserImage>
                <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="user" />
            </UserImage>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:72px;
    padding:0 5%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:3rem;
    background-color: #1a242f;
`
const Logo = styled.div`
    font-size:20px;
    font-weight:600;
    .logo-text{
        color:#fff;
        text-decoration:none;
    }
`
const SearchBar = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    max-width:500px;

    form{
        width:100%;
        max-width:500px;
        display:flex;
        justify-content:center;

        input{
            font-size:18px;
            width:100%;
            padding:5px 5px 5px 10px;
            height:38px;
            outline:none;
        }

        button{
            padding:0px 8px;
            font-size:20px;
            cursor:pointer;
            height:38px;
        }
    }

`
const UserImage = styled.div`
    width:38px;
    height:38px;
    img{
        width:38px;
        height:38px;
    }
    @media (max-width: 768px) {
        display:none;
    }
`

export default Header