import { useIsOpen } from "@mf/shared";
import { useUser } from "../../../shared/context/CurrentUserContext";
import { AddPlacePopup } from "./AddPlacePupup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

export const UserInformation = () => {
  const { user: currentUser } = useUser();
  const {
    isOpen: isEditModalOpen,
    onClose: onCloseEditModal,
    onOpen: onOpenEditModal,
  } = useIsOpen();

  const {
    isOpen: isAvatarModalOpen,
    onClose: onCloseAvatarModal,
    onOpen: onOpenAvatarModal,
  } = useIsOpen();

  const {
    isOpen: isPlaceModalOpen,
    onClose: onClosePlaceModal,
    onOpen: onOpenPlaceModal,
  } = useIsOpen();

  const imageStyle = { backgroundImage: `url(${currentUser?.avatar})` };

  return (
    <>
      <section className="profile page__section">
        <div
          className="profile__image"
          onClick={onOpenAvatarModal}
          style={imageStyle}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onOpenEditModal}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onOpenPlaceModal}
        ></button>
      </section>

      <EditAvatarPopup
        isOpen={isAvatarModalOpen}
        onClose={onCloseAvatarModal}
      />
      <EditProfilePopup isOpen={isEditModalOpen} onClose={onCloseEditModal} />
      <AddPlacePopup isOpen={isPlaceModalOpen} onClose={onClosePlaceModal} />
    </>
  );
};
