import styled from 'styled-components';

export const PromotionHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90vw;
    padding-top: 1.3rem;
`;

export const PromotionHeaderTitle = styled.h1 `
    text-align: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--color-title);
    @media (min-width: 600px) {
        padding: 3rem auto;
        font-size: 3rem;
    }
`;

export const PromotionHeaderInput = styled.input `
    display: flex;
    height: 1.2rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    @media (min-width: 600px) {
        height: 3rem;
        font-size: 1rem;
    }
`;