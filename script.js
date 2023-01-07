const addingWindow = document.getElementById("adding-window");
const closeIcon = document.getElementById("close-icon");

// initiates when user clicks on add button
function toggleActive() {
  if (addingWindow.getAttribute("data-active") == "false") {
    addingWindow.setAttribute("data-active", "true");
  } 
}

// initiates when user clicks on close button
function closeWindow() {
  addingWindow.setAttribute("data-active", "false");
}

// When user click on Already Finished check box => Pages Read should be filled with value of Total Pages

//This is input tag for Total Pages
const totalPages = document.getElementById("totalPage").querySelector("input");
let totalNumOfPages = 0;

//Adding an event listener so when it's changed by user it records the change
totalPages.addEventListener("change", () => {
  totalNumOfPages = totalPages.value;
});

//This is input tag for Pages Read
const pagesRead = document.getElementById("pagesComp").querySelector("input");

//Adding an event listener so when it's changed by user it records the change
pagesRead.addEventListener("change", () => {
  pagesRead.value = pagesRead.value;
});

//This is input tag for Already Finished?
const checkBox = document.getElementById("finished").querySelector("input");

//Adding event listener for Already finished, it listens for a change so that it can copy it to pagesRead's value
checkBox.addEventListener("change", () => {
  pagesRead.value = totalNumOfPages;
});

//prevent the form to reload
const form = document.getElementById("addBookForm");
function handleForm(e) {
  e.preventDefault();
  form.reset();
  closeWindow();
}
form.addEventListener("submit", handleForm);

/***************Accessing the information after form submit***************/

const myLibrary = [];

//This is input tag for Add button
const submitAddBook = document.getElementById("form-submit").querySelector("input");

//Cliking the Add Button
submitAddBook.addEventListener("click", () => {

  //This is input tag for Book Title
  const bookTitle = document.getElementById("bookTitle").querySelector("input");
  const bookAuthor = document
    .getElementById("bookAuthor")
    .querySelector("input");

  //Condition
  if (pagesRead.value > totalPages.value){
    return pagesRead.setCustomValidity("This cannot be greater than total pages")
  } else if (
        bookTitle.value != "" &&
        bookAuthor.value != "" &&
        totalPages.value != "" &&
        pagesRead.value != "" 
      ) {

        function pushingValueInside() {
          //Adding all the info in library array as objects
          
          myLibrary.push({
            title: bookTitle.value,
            author: bookAuthor.value,
            totalPages: totalPages.value,
            pagesRead: pagesRead.value,
          });
          }
        
        pushingValueInside();


        function creatingNewCard() {
          // After Submitting form, creating new card
          let div = document.createElement("div");
          let author = document.createElement("p");
          let title = document.createElement("p");

          let pageRead = document.createElement("span");
          let totalPage = document.createElement("span");

        
          
        
          let addingCard = document.getElementById("adding-cards");
          addingCard.style.display = "none";
        

          div.classList.add("card");
          div.classList.add("thumbnail");

          document.querySelector(".card-container").appendChild(div);
          
          addingCard.style.display = "flex";

          // to capitalize
          let capBookTitle = bookTitle.value.charAt(0).toUpperCase() + bookTitle.value.slice(1);
          let capBookAuthor = bookAuthor.value.charAt(0).toUpperCase() + bookAuthor.value.slice(1);

          author.innerHTML = "- " + capBookAuthor;
          title.innerHTML = capBookTitle;
          pageRead.innerHTML = pagesRead.value;
          totalPage.innerHTML = totalPages.value;
        
          document.querySelector(".card-container").appendChild(addingCard);
        


          //appending author info inside the new created card
          div.appendChild(title);
          div.appendChild(author);
          div.appendChild(pageRead);
          div.appendChild(totalPage);
        }

        creatingNewCard();


        if (pagesRead.value <= totalPages.value){
          closeWindow();
          form.reset();
        }

        console.log(myLibrary);
      }
  
});






/*********************Create new Cards***************/
