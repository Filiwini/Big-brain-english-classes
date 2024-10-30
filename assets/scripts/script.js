document.addEventListener("DOMContentLoaded", function () {
  let smallVersion = false;
  let previousScrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;
    console.log(smallVersion);


    if (currentScrollPosition > previousScrollPosition) {
    //   console.log("Scroll w dół");
      if (smallVersion == true) {
      } else {
        chanigeHeader("small");
        smallVersion = true;
      }
    } else if (currentScrollPosition < previousScrollPosition) {
    //   console.log("Scroll w górę");
      if (smallVersion == true) {
        chanigeHeader("big");
        smallVersion = false;
      } else {
      }
    }
    previousScrollPosition = currentScrollPosition;
  });
});
function chanigeHeader(BigOrSmall) {
  let text_under_icons_els = Array.from(
    document.querySelectorAll(".text_under_icons")
  );
  let icons_in_header_els = Array.from(
    document.querySelectorAll(".icons_in_header")
  );
  let items_in_header_el = Array.from(
    document.querySelectorAll("#items_in_header")
  );
  let header_logo_el = Array.from(document.querySelectorAll("#header_logo"));
  header_logo_el.push(document.querySelector(".header_logo_div"));

  let newClassListLabel = [
    "text_under_icons_small",
    "icons_in_header_small",
    "items_in_header_small",
    "header_logo_small",
  ];
  let classListLabel = [
    text_under_icons_els,
    icons_in_header_els,
    items_in_header_el,
    header_logo_el,
  ];
  //   console.log(classListLabel);
  //   console.log(text_under_icons_els);
  //   console.log(icons_in_header_els);
  //   console.log(items_in_header_el);
  //   console.log(header_logo_el);
  if (BigOrSmall == "small") {
    for (let index = 0; index < classListLabel.length; index++) {
      for (let number = 0; number < classListLabel[index].length; number++) {
        classListLabel[index][number].classList.add(newClassListLabel[index]);

        // console.log(number, index);
        // console.log(classListLabel[index][number]);
        // console.log(text_under_icons_els[number]);
      }
    }
  } else {
    for (let index = 0; index < classListLabel.length; index++) {
      for (let number = 0; number < classListLabel[index].length; number++) {
        classListLabel[index][number].classList.remove(
          newClassListLabel[index]
        );

        // console.log(number, index);
        // console.log(classListLabel[index][number]);
        // console.log(text_under_icons_els[number]);
      }
    }
  }
}
