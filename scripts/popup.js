const signInPopUpOpenBtn = document.querySelector("[data-signIn-Btn]")
const signInPopUpCloseBtn = document.querySelector("[data-signIn-close-Btn]")
const signInPopup = document.querySelector("[data-popup]")
signInPopUpOpenBtn.addEventListener("click", () => {
    signInPopup.classList.add('show');
})
signInPopUpCloseBtn.addEventListener("click", () => {
    signInPopup.classList.remove('show');
})