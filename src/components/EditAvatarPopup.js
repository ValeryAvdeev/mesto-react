import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  return(
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      submit='Сохранить'
      isOpen={props.isOpen}
      onClose={props.isClose}
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
  )
}

export default EditAvatarPopup;