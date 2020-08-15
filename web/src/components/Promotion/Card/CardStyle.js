import styled from 'styled-components';

export const Card = styled.div `
    border-radius: .5rem;
    border: 1px solid var(--color-border);
    max-width: 50rem; /* 50 rem = 800px || 1 rem = 16px */
    max-height: 10rem;
    margin: 2rem auto;
    box-shadow: 0 .125rem .5rem 0 rgba(0,0,0,.15);
    display: flex;
    padding: 1rem;
    align-items: flex-start;
`;

export const Image = styled.img `
   max-width: 6.2rem;
   margin-right: 1.2rem;
`;

export const Title = styled.h1 `
    font-size: .7rem;
    color: var(--color-card-text);
    @media (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const Price = styled.span `
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-price);
    @media (min-width: 600px) {
        font-size: 2rem;
    }
`;

export const Comment = styled.div `
    color: var(--color-comment);
    font-weight: 700;
    font-size: .8rem;
    @media (min-width: 600px) {
        font-size: 1rem;
    }
`; 

export const Footer = styled.footer `
    display: flex;
    align-items: center;
`;

export const CommentsCount = styled.div `
    margin-left: auto;
    margin-right: .5rem;
    color: var(--color-price);
    font-size: .8rem;
    text-align: center;
    @media (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const LinkPage = styled.a `
    text-transform: uppercase;
    border: 1px solid var(--color-price);
    border-radius: .25rem;
    color: var(--color-price);
    text-decoration: none;
    padding: .5rem .6rem;
    font-size: .8rem;
`;