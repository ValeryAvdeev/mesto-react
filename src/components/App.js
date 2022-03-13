import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import {useState, useEffect} from "react";
import Api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =useState(false);

  const [currentUser, setCurrentUser ] = useState();
  const [currentCard, setCurrentCard ] = useState([]);


  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfile = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  useEffect(() => {
    Api.getUser()
      .then(res => {
        setCurrentUser(res)
      })
      .then(() => {
        Api.getCards()
          .then(card => {
            setCurrentCard(
              card.map(i => ({...i}))
                // title: i.name,
                // link: i.link,
                // likes: i.likes.length,
                // id: i._id,
                // owner: i.owner,

            )
          })
          .catch(err => console.log(`Ошибка в index.js при создании карточек ${err}`))
      })
      .catch(err => console.log(`Ошибка в index.js при запросе информации о пользователе ${err}`))
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCurrentCard((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(`Ошибка в index.js при лайку карточки ${err}`));
  }

  const handleCardDelete = (card) => {
    // const isDelete = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    console.log(card._id)
    Api.changeDeleteCard(card._id)
      .then(() => {
        setCurrentCard((state) => state.filter(i => {
          i._id === currentUser._id
          console.log(i._id)
          console.log(currentUser._id)
        }));
      })
      .catch(err => console.log(`Ошибка в index.js при удалении карточки ${err}`));
  }

  return (
    <>
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
            <Main
              onEditProfile={handleEditProfile}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              cards={currentCard}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
        </CurrentUserContext.Provider>
        <Footer />
      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        submit='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          className="form__input form__input_popup_name"
          id="user-name"
          required
        />
        <span className="error" id="user-name-error"></span>
        <input
          type="text"
          name="info"
          minLength="2"
          maxLength="200"
          placeholder="Род деятельности"
          className="form__input form__input_popup_job"
          id="user-job"
          required
        />
        <span className="error" id="user-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='place'
        title='Новое место'
        submit='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="title"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="form__input form__input_popup_title"
          id="place-name"
          required
        />
        <span className="error" id="place-name-error"></span>
        <input
          type="url"
          name="image"
          placeholder="Ссылка на картинку"
          className="form__input form__input_popup_image"
          id="place-image"
          required
        />
        <span className="error" id="place-image-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        submit='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="avatar"
          placeholder="Ссылка на фотографию профеля"
          className="form__input form__input_popup_image"
          id="avatar-image"
          required
        />
        <span className="error" id="avatar-image-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        submit='Да'
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;