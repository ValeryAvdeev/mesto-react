import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import {useState} from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =useState(false);

  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (card) => {
    console.log(card)
    setSelectedCard(card)
  }

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfile = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

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
        <Main
          onEditProfile={handleEditProfile}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
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
        <button type="submit" className="form__submit form__submit_btn_edit">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name='place'
        title='Новое место'
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
        <button
          type="submit"
          className="form__submit form__submit_btn_add form__submit_disabled"
          disabled
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
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
        <button
          type="submit"
          className="form__submit form__submit_btn_avatar form__submit_disabled"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'>
        <button
          type="button"
          className="popup__button  popup__delete-card"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;