import { useContext } from "react";
import editAvatar from '../images/avatar__edit.png'
import Card from "./Card";
import {CurrentUserContext, CurrentCardContext} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  const currentCard = useContext(CurrentCardContext);

  console.log(currentUser)
  console.log(currentCard)

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="avatar">
          <img
            src={currentUser?.avatar}
            alt="фотография профиля."
            className="avatar__image"
          />
          <div className="avatar__over">
            <img
              src={editAvatar}
              alt="редактирование аватар"
              className="avatar__edit"
              onClick={props.onEditAvatar}
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title profile__title_popup_name">
            {currentUser?.name}
          </h1>
          <button
            type="button"
            aria-label="Кнопка редактирования профиля"
            className="button button_item_edit"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle profile__subtitle_popup_job">\
            {currentUser?.about}
          </p>
        </div>
        <button
          type="button"
          aria-label="Кнопка добавления контента"
          className="button button_item_add"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places">
          {
            currentCard.card.map(i => {
              <Card
                key={currentCard._id}
                {...i}
                onCardClick={props.onCardClick}
                card={i}
                onCardLike={handleCardLike}
              />
            })
          }
      </section>
    </main>
  )
};

export default Main;