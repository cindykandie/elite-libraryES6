import Book from './modules/book.js';
import Store from './modules/store.js';
import UI from './modules/UI.js';
import {
  contactSection, linksAdd, linksAll, linksContact,

  bookList, addList, contactList, allSection, inputSection,
} from './modules/variables.js';
import displayTime from './modules/time.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#enter').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Store.addBook(book);
  UI.clearfields();
});

document.querySelector('#bookList').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling
    .previousElementSibling.previousElementSibling.textContent);
});

bookList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksContact.style.color = 'black';
});

addList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
  linksContact.style.color = 'black';
});

contactList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  linksContact.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});

setInterval(displayTime, 1000);