const editbutton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const сlosePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

const nameInputContent = document.querySelector('.profile__title')
const jobInputContent = document.querySelector('.profile__subtitle')
const nameValue = document.getElementById('name')
const jobValue = document.getElementById('job')

editbutton.addEventListener('click', openPopup)
сlosePopupButton.addEventListener('click', сlosePopup)

function openPopup(event) {
    event.preventDefault()
    nameValue.value = nameInputContent.textContent
    jobValue.value = jobInputContent.textContent
    popup.classList.add('popup_opened')

}
function сlosePopup() {
    popup.classList.remove('popup_opened')
}
function formSubmitHandler(event) {
    event.preventDefault()
    nameInputContent.textContent = nameValue.value
    jobInputContent.textContent = jobValue.value
    сlosePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 