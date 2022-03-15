import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";

function EditAvatarPopup(props) {
  const avatarRef = useRef('')

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    e.target.reset();
  }

  return(
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      submit='Сохранить'
      isOpen={props.isOpen}
      onClose={props.isClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        placeholder="Ссылка на фотографию профеля"
        className="form__input form__input_popup_image"
        id="avatar-image"
        required
        ref={avatarRef}
        defaultValue=''
      />
      <span className="error" id="avatar-image-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;