function ImagePopup() {
  return (
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
  )
}

export default ImagePopup;