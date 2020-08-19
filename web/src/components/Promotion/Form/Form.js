import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  PromotionFormGroup,
  FormGroupLabel,
  FormTitle,
  FormSubTitle,
  FormGroupInput,
  SubmitButton,
} from "./FormStyle";
import axios from "axios";

const initialValue = {
  title: "",
  url: "",
  imageUrl: "",
  price: 0,
};

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();
  
  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post("http://localhost:5000/promotions", values).then((response) => {
      history.push("/");
    });
  }
  
  return (
    <div>
      <FormTitle>promo hot</FormTitle>
      <FormSubTitle>Nova Promoção</FormSubTitle>

      <form onSubmit={onSubmit}>
        <PromotionFormGroup>
          <FormGroupLabel htmlFor="title">Título</FormGroupLabel>
          <FormGroupInput
            id="title"
            name="title"
            type="text"
            onChange={onChange}
          />

          <FormGroupLabel htmlFor="url">Link</FormGroupLabel>
          <FormGroupInput id="url" name="url" type="text" onChange={onChange} />

          <FormGroupLabel htmlFor="imageUrl">Imagem (URL)</FormGroupLabel>
          <FormGroupInput
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={onChange}
          />

          <FormGroupLabel htmlFor="price">Preço</FormGroupLabel>
          <FormGroupInput
            id="price"
            name="price"
            type="text"
            onChange={onChange}
          />

          <SubmitButton type="submit"> Salvar </SubmitButton>
        </PromotionFormGroup>
      </form>
    </div>
  );
};

export default PromotionForm;
