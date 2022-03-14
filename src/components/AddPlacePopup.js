import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onAddPlace({
      avatar: props.onUpdateAvatar
    });
  }

  return (
    <PopupWithForm
      name='place'
      title='Новое место'
      submit='Создать'
      isOpen={props.isOpen}
      onClose={props.isClose}
      onSubmit={handleSubmit}
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
  )
}

export default AddPlacePopup;