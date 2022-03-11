import React, {useContext, useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import {useState} from "react";
import Api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =useState(false);

  const [currentUser, setCurrentUser ] = useState()

  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfile = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  useEffect(() => {
    Api.getUser()
      .then(res => {
        setCurrentUser({res})
      })
      .catch(err => console.log(`Ошибка в index.js при запросе информации о пользователе ${err}`))
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
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