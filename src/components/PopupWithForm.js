function PopupWithForm(props) {
  return (
    <div className={`popup popup_element_${props.name}`}>
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button
          type="button"
          aria-label="Кнопка закрытия редактора формы"
          className="popup__close"
        />
        <form name="popup" className={`form form_element_${props.name}`}>
          <h3 className="form__title">
            {props.title}
          </h3>
          <button type="submit" className="form__submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;