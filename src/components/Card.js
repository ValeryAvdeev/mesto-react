import {useContext} from "react";
import {CurrentCardContext} from "../contexts/CurrentCardContext";

function Card(props){
  const currentCard = useContext(CurrentCardContext);
  // const handleClick = () => props.onCardClick(props.card);
  const handleClick = () => props.onCardClick(currentCard.card);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_item_delete' : 'button_item_delete-none'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`button ${ isLiked ? 'button_item_like-active' : 'button_item_like'}`);

  const handleLikeClick = () => props.onCardLike(currentCard.card)

  return (
    <div className="place">
      <button className={cardDeleteButtonClassName} type="button"></button>
      {/*<button className="button button_item_delete button_delete" type="button"></button>*/}
      <img
        // src={props.card.link}
        // alt={props.card.title}
        src={currentCard.link}
        alt={currentCard.title}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__content">
        <h2 className="place__title">
          {/*{props.card.title}*/}
          {currentCard.title}
        </h2>
        <div className="place__like">
          <button
            type="button"
            // className="button button_item_like"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="place__like-amount">
            {/*{props.card.likes}*/}
            {currentCard.likes}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card;