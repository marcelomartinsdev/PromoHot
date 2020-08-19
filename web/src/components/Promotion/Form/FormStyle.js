import styled from "styled-components";

export const PromotionFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

export const FormTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding-top: 1rem;
  color: var(--color-form-text);
  @media (min-width: 600px) {
    font-size: 3rem;
    padding-top: 1.5rem;
  }
`;

export const FormSubTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  padding-top: 2rem;
  color: var(--color-form-text);
  @media (min-width: 600px) {
    font-weight: 500;
  }
`;

export const FormGroupLabel = styled.label`
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  padding-top: 3rem;
  padding-left: 1.1rem;
  padding-bottom: 0.2rem;
  color: var(--color-form-text);
  @media (min-width: 600px) {
    text-align: left;
    padding: 3rem 0 0 0;
    font-size: 1.5rem;
  }
`;

export const FormGroupInput = styled.input`
  width: 90%;
  height: 1.7rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  align-self: center;
  padding: 1rem 1rem;
  font-size: 1rem;
  @media (min-width: 600px) {
    width: 100%;
    height: 2.2rem;
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 20vw;
  margin-top: 2rem;
  align-self: center;
  height: 1.5rem;
  @media (min-width: 600px) {
    align-self: flex-end;
    width: 20%;
    height: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
