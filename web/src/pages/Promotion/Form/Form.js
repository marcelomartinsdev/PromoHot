import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "../../../components/Promotion/Form/Form";
import GlobalStyles from "../../../styles/GlobalStyles";


import styled from 'styled-components';

const FormWrapper = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <FormWrapper>
      <PromotionForm />
      <GlobalStyles />
    </FormWrapper>
  );
};
export default PagesPromotionForm;
