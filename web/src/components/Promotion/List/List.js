import React from "react";
import PromotionCard from "../Card/Card";

const PromotionList = ({ loading, promotions }) => {
  if (loading) {
    return <div>Carregando...</div>;
  } else
    return (
      <div>
        {promotions.map((promotion) => (
          <PromotionCard promotion={promotion} />
        ))}
      </div>
    );
};

export default PromotionList;
