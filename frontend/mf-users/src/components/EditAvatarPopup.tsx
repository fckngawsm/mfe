import { PopupWithForm } from "@mf/shared";
import { FormEvent, useRef } from "react";
import { getUserApiInstance } from "../utils/api";

interface EditAvatarPopup {
  isOpen: boolean;
  onClose: () => void;
}

function EditAvatarPopup({ isOpen, onClose }: EditAvatarPopup) {
  const api = getUserApiInstance();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUpdateAvatar = (avatar: string) => {
    api.setUserAvatar(avatar);
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current) return;
    onUpdateAvatar(inputRef.current.value);
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
        <span className="popup__error" id="owner-avatar-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
