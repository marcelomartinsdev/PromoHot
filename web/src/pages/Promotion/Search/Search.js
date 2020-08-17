import React, { useEffect, useState } from "react";
import PromotionCard from "../../../components/Promotion/Card/Card";
import axios from "axios";
import GlobalStyles from "../../../styles/GlobalStyles";

const PagesPromotionSearch = () => {

	const [promotions, setPromotions] = useState([]);
	
  useEffect(() => {
    axios
      .get("http://localhost:5000/promotions?_embed=comments")
      .then((response) => {
				setPromotions(response.data);
      });
  }, []);

  return (
    <>
			{promotions.map((promotion) => (
				<PromotionCard promotion={promotion} />
			))}
      <GlobalStyles />
    </>
  );
};

export default PagesPromotionSearch;
