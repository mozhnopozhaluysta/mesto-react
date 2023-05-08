import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import PopupWithImage from "./ImagePopup"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({})

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="body">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />

        <PopupWithForm
          name="popupEditProfile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
            <input
              className="popup__input popup__input_type_name"
              id="popupName"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="error popupName-error" />
            <input
              className="popup__input popup__input_type_info"
              id="popupInfo"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="error popupInfo-error" />
        </PopupWithForm>

        <PopupWithForm
          name="popupNewPlace"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
            <input
              className="popup__input popup__input_type_img-name"
              id="imgName"
              name="name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="error imgName-error" />
            <input
              className="popup__input popup__input_type_img-link"
              id="imgLink"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="error ImgLink-error" />
        </PopupWithForm>

        <PopupWithForm
          name="popupConfirmation"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>

        <PopupWithForm
          name="popupEditAvatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
            <input
              className="popup__input popup__input_type_link-avatar"
              id="nameInputAvatar"
              name="avatar"
              type="url"
              placeholder="Введите ссылку URL"
              required
            />
            <span className="error nameInputAvatar-error" />
        </PopupWithForm>
        <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
    </div>
  )
}

export default App