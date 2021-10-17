import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const Header = styled.div`
    /*box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 50%);
    */
    background-color: rgba(255, 255, 255, 0.95);

    display: flex;
    width: 100%;
    height: 100px;
`;

export const AsideContainer = styled.aside`
    display: block;
    width: 100%;
`;

export const MainContainer = styled.main`
    padding: 0 32px;

    display: block;
`;

export const InnerContainer = styled.div`
    padding: 20px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: medium;
    font-family: "Poppins", sans-serif;
    text-align: left;

    color: #000;
    margin-bottom: 10px;
`;

export const SubTitle = styled.h3`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.017em;

    margin-bottom: 10px;
`;



export const LogoImg = styled.img`
    width: 150px;
    height: 60px;

    object-fit: fill;
`;
