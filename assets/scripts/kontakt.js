document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const childLabels = form.children; // Use a descriptive name

  for (let index = 0; index < childLabels.length - 2; index++) {
    const element = childLabels[index];
    // Check if the element is an input field
    if (element.tagName.toLowerCase() === "input") {
      element.addEventListener("click", removeText);
    }
  }

  function removeText(event) {
    const element = event.target;

    let oldValue = element.value; // Get the current value

    element.value = ""; // Clear the input value

    element.removeEventListener("click", removeText);
    element.addEventListener("blur", function () {
      addText(element, oldValue); // Pass the element and old value
    });
  }

  function addText(element, oldValue) {
    // Check if the data-input attribute is not set
    if (element.value == null || element.value == "") {
      element.value = oldValue; // Restore the old value

      element.removeEventListener("blur", addText);
      element.addEventListener("click", removeText);
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    element = event.target;
    sumbit(form);
  });

  function sumbit(form) {
    let childLabels = form.children;
    let outPut = [];
    let error =false
    for (let index = 0; index < childLabels.length - 2; index++) {
      const element2 = childLabels[index];
      if (element2.tagName.toLowerCase() === "input") {
        outPut.push(element2.value);
        // console.log(outPut);
      }
    }
    // console.log(outPut);
    for (let index = 0; index < outPut.length; index++) {
      // sprwadzenie czy nie ma błędu
      const element = outPut[index];
      switch (outPut[index]) {
        case "Imie":
          error_form();
          index = 99;
          error = true;
          break;
        case "Nazwisko":
          error_form();
          index = 99;
          error = true;
          break;
        case "E-mail":
          error_form();
          index = 99;
          error = true;
          break;
        case "Telefon":
          break;
        case "Temat":
          error_form();
          index = 99;
          error = true;
          break;
        case "Wiadomość":
          error_form();
          index = 99;
          error = true;
          break;
      }
    }
    let index = 0;

    outPut[index] = `Imie: ${outPut[index]}`;
    index++;

    outPut[index] = `Nazwisko: ${outPut[index]}`;
    index++;
    outPut[index] = `E-mail: ${outPut[index]}`;
    index++;
    outPut[index] = `Telefon: ${outPut[index]}`;
    index++;
    outPut[index] = `Temat: ${outPut[index]}`;
    index++;
    outPut[index] = `Wiadomość: ${outPut[index]}`;

    // console.log(outPut);
    if (!error) {
      sumbit_suces(outPut);
    }
  }
  function error_form() {
    // alert("Wypełnij wszystkie opcjonalne okienka");
    const message = document.querySelector("#message");
    message.innerHTML = "Wypełnij wszystkie wymagane okienka";
    message.classList.add("error");
  }
  function sumbit_suces(outPut) {
    const message = document.querySelector("#message");
    message.innerHTML =
      "wszystko przebiegło pomyślnie czekaj odpoweiedzi na e-mailu lub w SMS. Opiszemy najszybciej jak to możliwe <br> Big-Brain";
  }
  // specjalny przypaedek zawijania textu w segment 1 w emali
  
  if(outerWidth < 400){
    let email = document.querySelector('#email_info_special_przypadek');
    email.innerHTML = 'bigbrain.englishclasses<br>@gmail.com'
    
  }
});
