console.log('clear')

const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-creator')
const buttonSettings = document.querySelector('.button-settings')

const homePage = document.querySelector('.page-home')
const bookmarksPage = document.querySelector('.page-bookmarks')
const createPage = document.querySelector('.page-create')
const settingsPage = document.querySelector('.page-settings')

buttonBookmarks.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarksPage.classList.remove('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.remove('hidden')
  settingsPage.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonSettings.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.remove('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.add('active')
})

buttonBookmarks.addEventListener('click', () => {
  homePage.classList.remove('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')

  buttonHome.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
})
