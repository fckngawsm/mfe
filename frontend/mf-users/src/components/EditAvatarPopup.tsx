import { useRef } from "react";

interface EditAvatarPopup {
  isOpen: boolean;
  onUpdateAvatar: ({ avatar }: { avatar: string }) => void;
  onClose: () => void;
}

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }: EditAvatarPopup) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Обновить аватар"
      name="edit-avatar"
    >
      <label className="popup__label">
        <input
          type="url"
          name="avatar"
          id="owner-avatar"
          className="popup__input popup__input_type_description"
          placeholder="Ссылка на изображение"
          required
          ref={inputRef}
        />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
