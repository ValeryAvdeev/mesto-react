function Main(props) {
  return (
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
              className="avatar__edit"
              onClick={() => props.onEditAvatar()}
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title profile__title_popup_name">Жак-Ив Кусто
          </h1>
          <button
            type="button"
            aria-label="Кнопка редактирования профиля"
            className="button button_item_edit"
            onClick={() => props.onEditProfile()}
          ></button>
          <p className="profile__subtitle profile__subtitle_popup_job">Исследователь океана</p>
        </div>
        <button
          type="button"
          aria-label="Кнопка добавления контента"
          className="button button_item_add"
          onClick={() => props.onAddPlace()}
        ></button>
      </section>
      <section className="places">
        {/*// Контейнер для добавления карточек*/}
      </section>
    </main>
  )
};

export default Main;