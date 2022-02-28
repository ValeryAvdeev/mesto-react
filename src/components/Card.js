import React from "react";

function Card(props){
  const handleClick = () => props.onCardClick(props.card);

  return (
    <div className="place">
      <button className="button button_item_delete button_delete" type="button"></button>
      <img
        src={props.card.link}
        alt={props.card.title}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__content">
        <h2 className="place__title">{props.card.title}</h2>
        <div className="place__like">
          <button type="button" className="button button_item_like"></button>
          <span className="place__like-amount">{props.card.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;