import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  max-width: 50rem; /* 50 rem = 800px || 1 rem = 16px */
  height: 9.5rem;
  margin: 1rem auto;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.15);
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  @media (min-width: 600px) {
    height: 10.5rem;
    margin: 2rem auto;
  }
`;

export const Image = styled.img`
  max-width: 6.2rem;
  margin-right: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 0.7rem;
  color: var(--color-card-text);
  margin-bottom: 0.5rem;
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-price);
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const Comment = styled.div`
  color: var(--color-comment);
  font-weight: 700;
  font-size: 0.8rem;
  display: none;
  @media (min-width: 600px) {
    font-size: 1rem;
    display: flex;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const CommentsCount = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  color: var(--color-price);
  font-size: 0.7rem;
  font-weight: 700;
  @media (min-width: 600px) {
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
  }
`;

export const LinkPage = styled.a`
  text-transform: uppercase;
  border: 1px solid var(--color-price);
  border-radius: 0.25rem;
  color: var(--color-price);
  text-decoration: none;
  padding: 0.5rem 0.6rem;
  font-size: 0.8rem;
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;
