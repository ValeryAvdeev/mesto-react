import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";

function App() {
  const handleEditAvatarClick = () => {
    const popupAvatarOpen = document.querySelector('.popup_element_avatar');
    popupAvatarOpen.classList.add('popup_open')
  };

  const EditProfile = () => {
    const popupProfileOpen = document.querySelector('.popup_element_profile');
    popupProfileOpen.classList.add('popup_open')
  };

  const handleAddPlaceClick = () => {
    const popupAddCardOpen = document.querySelector('.popup_element_place');
    popupAddCardOpen.classList.add('popup_open');
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={EditProfile}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}/>
        <Footer />
      </div>

      <PopupWithForm name='profile' title='Редактировать профиль'>
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

      <PopupWithForm name='place' title='Новое место'>
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

      <PopupWithForm name='avatar' title='Обновить аватар'>
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

      <PopupWithForm name='delete-card' title='Вы уверены?'>
        <button
          type="button"
          className="popup__button  popup__delete-card"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup/>

      <template className="place-template">
    <div className="place">
      <button className="button button_item_delete button_delete" type="button"></button>
      <img src="#" alt="картинка." className="place__image"/>
      <div className="place__content">
        <h2 className="place__title"></h2>
        <div className="place__like">
          <button type="button" className="button button_item_like"></button>
          <span className="place__like-amount"></span>
        </div>
      </div>
    </div>
  </template>
    </>
  );
}

export default App;

// <div className="popup popup_element_profile">
//   <div className="popup__overlay popup__overlay_select_profile"></div>
//   <div className="popup__content">
//     <button
//       type="button"
//       aria-label="Кнопка закрытия редактора формы"
//       className="popup__close popup__close_element_edit"
//     ></button>
//     <form name="popup" className="form form_element_profile form_profile">
//       <h3 className="form__title form__title_element_edit">
//         Редактировать профиль
//       </h3>
//       <input
//         type="text"
//         name="name"
//         minLength="2"
//         maxLength="40"
//         placeholder="Имя"
//         className="form__input form__input_popup_name"
//         id="user-name"
//         required
//       />
//       <span className="error" id="user-name-error"></span>
//       <input
//         type="text"
//         name="info"
//         minLength="2"
//         maxLength="200"
//         placeholder="Род деятельности"
//         className="form__input form__input_popup_job"
//         id="user-job"
//         required
//       />
//       <span className="error" id="user-job-error"></span>
//       <button type="submit" className="form__submit form__submit_btn_edit">
//         Сохранить
//       </button>
//     </form>
//   </div>
// </div>
//
// <div className="popup popup_element_place">
//   <div className="popup__overlay popup__overlay_select_place"></div>
//   <div className="popup__content">
//     <button
//       type="button"
//       aria-label="Кнопка закрытия редактора формы"
//       className="popup__close popup__close_element_place"
//     ></button>
//     <form name="popup" className="form form_element_place form_place">
//       <h3 className="form__title">Новое место</h3>
//       <input
//         type="text"
//         name="title"
//         minLength="2"
//         maxLength="30"
//         placeholder="Название"
//         className="form__input form__input_popup_title"
//         id="place-name"
//         required
//       />
//       <span className="error" id="place-name-error"></span>
//       <input
//         type="url"
//         name="image"
//         placeholder="Ссылка на картинку"
//         className="form__input form__input_popup_image"
//         id="place-image"
//         required
//       />
//       <span className="error" id="place-image-error"></span>
//       <button
//         type="submit"
//         className="form__submit form__submit_btn_add form__submit_disabled"
//         disabled
//       >
//         Создать
//       </button>
//     </form>
//   </div>
// </div>
//
// <div className="popup popup_element_avatar">
//   <div className="popup__overlay popup__overlay_select_avatar"></div>
//   <div className="popup__content">
//     <button
//       type="button"
//       aria-label="Кнопка закрытия редактора фотографии профеля"
//       className="popup__close popup__close_element_avatar"
//     ></button>
//     <form name="popup" className="form form_element_avatar">
//       <h3 className="form__title">Обновить аватар</h3>
//       <input
//         type="url"
//         name="avatar"
//         placeholder="Ссылка на фотографию профеля"
//         className="form__input form__input_popup_image"
//         id="avatar-image"
//         required
//       />
//       <span className="error" id="avatar-image-error"></span>
//       <button
//         type="submit"
//         className="form__submit form__submit_btn_avatar form__submit_disabled"
//         disabled
//       >
//         Сохранить
//       </button>
//     </form>
//   </div>
// </div>
// <div className="popup popup_element_delete-card">
//   <div className="popup__overlay popup__overlay_select_delete-card"></div>
//   <div className="popup__content">
//     <form name="popup" className="form form_element_delete-card">
//       <h3 className="popup__title"></h3>
//       <button
//         type="button"
//         className="popup__button  popup__delete-card"
//       >
//         Да
//       </button>
//       <button
//         type="submit"
//         aria-label="Кнопка закрытия редактора фотографии профеля"
//         className="popup__close popup__close_element_delete-card"
//       ></button>
//     </form>
//   </div>
// </div>
