import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GlobalStyles from "../../../styles/GlobalStyles";
import PromotionList from "../List/List";
import {
  PromotionHeader,
  PromotionHeaderTitle,
  PromotionHeaderInput,
} from "./SearchStyle";

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};  
    if (search) {
        params.title_like = search;
    }

    axios
      .get("http://localhost:5000/promotions?_embed=comments", { params })
      .then((response) => {
        setPromotions(response.data);
      });
  }, [search]);

  return (
    <div className="promotions-search">
      <PromotionHeader>
        <PromotionHeaderTitle>promo hot</PromotionHeaderTitle>

        <Link to="/create">Nova Promoção</Link>
      </PromotionHeader>
      <PromotionHeaderInput 
      type="search" 
      placeholder="Buscar" 
      value={search}
      onChange={(ev) => setSearch(ev.target.value)}
      />

        <PromotionList promotions={promotions} loading={!promotions.length} />
        
      <GlobalStyles />
    </div>
  );
};

export default PromotionSearch;
