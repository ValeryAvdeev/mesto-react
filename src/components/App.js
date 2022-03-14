import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import {useState, useEffect} from "react";
import Api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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
            setCurrentCard(card)
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
      .catch(err => console.log(`Ошибка в index.js при лайку карточки ${err}`))
  }

  const handleCardDelete = (card) => {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeDeleteCard(card._id)
      .then(() => {
        setCurrentCard((state) => {
          return state.filter((i) => i._id != card._id)
        })
      })
      .catch(err => console.log(`Ошибка в index.js при удалении карточки ${err}`))
  }

  const handleUpdateUser = (currentUser) => {
    Api.editProfile({name: currentUser.name, info: currentUser.about})
      .then(user => {
        setCurrentUser(user)
      })
      .catch(err => console.log(`Ошибка в index.js при редактировании информации о user ${err}`))
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

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

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

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
      />

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