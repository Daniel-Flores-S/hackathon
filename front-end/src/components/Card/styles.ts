import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardContainer = styled(Link)`
    max-width: 18rem;
    border-radius: 0.9rem;
    border: 1px solid #808080;
    padding: 5px;
    box-shadow: 5px 10px 18px #888888;

    margin: 1rem;
    text-decoration: none;
    color: black;
`;

export const CardBody = styled.div`
    padding: 1rem;

`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;

`;

export const CardTitle = styled.h5`
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.5rem;


`;

export const CardText = styled.p`
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.5rem;

`;

export const CardButton = styled.button`
    background-color: #f5f5f5;
    border: none;
    border-radius: 0.25rem;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;

`;

