document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const childLabels = form.children; // Use a descriptive name

  for (let index = 0; index < childLabels.length; index++) {
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
    if (element.value == null ||element.value == '') {
      element.value = oldValue; // Restore the old value

      element.removeEventListener("blur", addText);
      element.addEventListener("click", removeText);
    }
  }

  form.addEventListener('submit', xdxdxd)
  




});
