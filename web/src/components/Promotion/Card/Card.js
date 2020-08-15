import React from "react";
import { Card, Image, Title, Price, Comment, Footer, CommentsCount, LinkPage } from './CardStyle';

const PromotionCard = ({ promotion }) => {
  return (
    <Card>
      <Image src={promotion.imageUrl} alt={promotion.title} />
      <div>
        <Title>{promotion.title}</Title>
        <Price>R$ {promotion.price}</Price>

        <Footer>
            {promotion.comments.length > 0 && (
                <Comment>"{promotion.comments[0].comment}"</Comment>
            )}

            <CommentsCount>
                {promotion.comments.length}{' '}
                {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
            </CommentsCount>
            <LinkPage href={promotion.url} target="_blank" rel="noopener noreferrer">ir para o site</LinkPage>
        </Footer>
      </div>
    </Card>
  );
};

export default PromotionCard;
