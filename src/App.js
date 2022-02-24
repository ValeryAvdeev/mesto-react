import mainLogo from "./images/header-logo.svg";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img
            src={mainLogo}
            alt="логотип проекта Место России."
            className="header__logo"
          />
        </header>
        <main className="content">
          <section className="profile">
            <div className="avatar">
              <img
                src="<%=require('./images/profile-images.jpg')%>"
                alt="фотография профиля."
                className="avatar__image"
              />
              <div className="avatar__over">
                <img
                  src="<%=require('./images/avatar__edit.png')%>"
                  alt="редактирование аватар"
                  className="avatar__edit"/>
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__title profile__title_popup_name">Жак-Ив Кусто
              </h1>
              <button
                type="button"
                aria-label="Кнопка редактирования профиля"
                className="button button_item_edit"
              ></button>
              <p className="profile__subtitle profile__subtitle_popup_job">Исследователь океана</p>
            </div>
            <button
              type="button"
              aria-label="Кнопка добавления контента"
              className="button button_item_add"
            ></button>
          </section>
          <section className="places">
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_element_profile">
      <div className="popup__overlay popup__overlay_select_profile"></div>
      <div className="popup__content">
        <button
          type="button"
          aria-label="Кнопка закрытия редактора формы"
          className="popup__close popup__close_element_edit"
        ></button>
        <form name="popup" className="form form_element_profile form_profile">
          <h3 className="form__title form__title_element_edit">
            Редактировать профиль
          </h3>
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
        </form>
      </div>
    </div>

      <div className="popup popup_element_place">
      <div className="popup__overlay popup__overlay_select_place"></div>
      <div className="popup__content">
        <button
          type="button"
          aria-label="Кнопка закрытия редактора формы"
          className="popup__close popup__close_element_place"
        ></button>
        <form name="popup" className="form form_element_place form_place">
          <h3 className="form__title">Новое место</h3>
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
        </form>
      </div>
    </div>

      <div className="popup popup_type_image popup_element_image">
      <div className="popup__overlay popup__overlay_select_image"></div>
      <div className="popup__content popup__content_type_image">
        <button
          type="button"
          aria-label="Кнопка закрытия редактора формы"
          className="popup__close popup__close_place_img"
        ></button>
        <figure className="figure">
          <img src="#" alt="картинка." className="figure__image"/>
          <figcaption className="figure__title"></figcaption>
        </figure>
      </div>
    </div>

      <div className="popup popup_element_avatar">
      <div className="popup__overlay popup__overlay_select_avatar"></div>
      <div className="popup__content">
        <button
          type="button"
          aria-label="Кнопка закрытия редактора фотографии профеля"
          className="popup__close popup__close_element_avatar"
        ></button>
        <form name="popup" className="form form_element_avatar">
          <h3 className="form__title">Обновить аватар</h3>
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
        </form>
      </div>
    </div>

      <div className="popup popup_element_delete-card">
      <div className="popup__overlay popup__overlay_select_delete-card"></div>
      <div className="popup__content">
        <h3 className="popup__title">Вы уверены?</h3>
        <button
          type="button"
          className="popup__button  popup__delete-card"
        >
          Да
        </button>
        <button
          type="button"
          aria-label="Кнопка закрытия редактора фотографии профеля"
          className="popup__close popup__close_element_delete-card"
        ></button>
      </div>
    </div>

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
