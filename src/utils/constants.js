//находим форму редактирования по нэйм
const formEditProfile = document.forms.formDetails

//находим форму создания карточек по нэйм
const formAddProfile = document.forms.formAddElement

//находим форму обновления аватара по нэйм
const formUpdateAvatar = document.forms.editAvatarForm

//кнопки открытия попапов
const profileUpdateAvatar = document.querySelector(".profile__edit-avatar")
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")

//константы профиля
const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__details")
const avatarProfile = document.querySelector(".profile__avatar")