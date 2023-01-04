document.getElementById("adding-cards").addEventListener("click", function (e) {
  console.log(0);

  let addDetailsWindow = document.getElementById("adding-window");
  addDetailsWindow.setAttribute("data-active", "true");

  


  // var div = document.createElement("div");
  // let addingCard = document.getElementById("adding-cards");
  // addingCard.style.display = "none";

  // // div.innerHTML = "This is a new div!";
  // div.classList.add("book-detail");
  // document.querySelector(".card-container").appendChild(div);

  // addingCard.style.display = "flex";

  // document.querySelector(".card-container").appendChild(addingCard);

  e.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (
    event.target.closest("#adding-window") === null &&
    document.getElementById("adding-window").getAttribute("data-active") ==
      "true"
  ) {
    console.log(1);
    document.getElementById("adding-window").style.display = "none";
    document
      .getElementById("adding-window")
      .setAttribute("data-active", "false");
  }
});

const bookList = [
  {
    bookName: "gdfsdf",
    bookAuthor: "fsdfdsf",
    noOfPages: 234,
    noOFPagesRead: 223,
    isCompleted: false,
  },
];

