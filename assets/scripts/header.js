document.addEventListener("DOMContentLoaded", function () {
  let smallVersion = false;
  let previousScrollPosition = window.scrollY;
  let currentScrollPosition;
  window.addEventListener("scroll", () => {
    currentScrollPosition = window.scrollY;
   

    if (currentScrollPosition > previousScrollPosition) {
      
      if (smallVersion == true) {
      } else {
        changeHeader("small");
        smallVersion = true;
      }
    } else if (currentScrollPosition < previousScrollPosition) {
      if (smallVersion == true) {
        changeHeader("big");
        smallVersion = false;
      } else {
      }
    }
    previousScrollPosition = currentScrollPosition;
  });

  let text_under_icons_els;
  let icons_in_header_els;
  let items_in_header_el;
  let header_logo_el;
  let newClassListLabel;
  let classListLabel;
  function changeHeader(BigOrSmall) {
    text_under_icons_els = Array.from(
      document.querySelectorAll(".text_under_icons")
    );
    icons_in_header_els = Array.from(
      document.querySelectorAll(".icons_in_header")
    );
    items_in_header_el = Array.from(
      document.querySelectorAll("#items_in_header")
    );
    header_logo_el = Array.from(document.querySelectorAll("#header_logo"));
    header_logo_el.push(document.querySelector(".header_logo_div"));

    newClassListLabel = [
      "text_under_icons_small",
      "icons_in_header_small",
      "items_in_header_small",
      "header_logo_small",
    ];
    classListLabel = [
      text_under_icons_els,
      icons_in_header_els,
      items_in_header_el,
      header_logo_el,
    ];
    //   
    if (BigOrSmall == "small") {
      for (let index = 0; index < classListLabel.length; index++) {
        for (let number = 0; number < classListLabel[index].length; number++) {
          classListLabel[index][number].classList.add(newClassListLabel[index]);

          
        }
      }
    } else {
      for (let index = 0; index < classListLabel.length; index++) {
        for (let number = 0; number < classListLabel[index].length; number++) {
          classListLabel[index][number].classList.remove(
            newClassListLabel[index]
          );

          
        }
      }
    }
  }

  let header = document.querySelector("#header_menu");
  let idListLabel;
  header.addEventListener("click", function (event) {
    idListLabel = ["logo", "kontakt", "o_nas", "galeria", "aktualności"];

    if (
      event.target.parentElement.id.includes(idListLabel[0]) ||
      event.target.parentElement.parentElement.id.includes(idListLabel[0])
    ) {
      window.location.href = "./index.html";
    } else if (
      event.target.parentElement.id.includes(idListLabel[1]) ||
      event.target.parentElement.parentElement.id.includes(idListLabel[1])
    ) {
      window.location.href = "./kontakt.html";
    } else if (
      event.target.parentElement.id.includes(idListLabel[2]) ||
      event.target.parentElement.parentElement.id.includes(idListLabel[2])
    ) {
      //dodać link
    } else if (
      event.target.parentElement.id.includes(idListLabel[3]) ||
      event.target.parentElement.parentElement.id.includes(idListLabel[3])
    ) {
      window.location.href = "./galeria.html";
    } else if (
      event.target.parentElement.id.includes(idListLabel[4]) ||
      event.target.parentElement.parentElement.id.includes(idListLabel[4])
    ) {
      //dodać link
    } else {
    }
  });
});
