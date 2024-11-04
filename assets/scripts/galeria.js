document.addEventListener("DOMContentLoaded", function () {
  class Segment {
    contentHolderEl = document.getElementById("content_holder");
    sectionsHolderEl = document.getElementById("sections_holder");
    constructor(ilagesLinkLabel, segmentNumber) {
      const SegmentEl = document.createElement("li");
      this.sectionsHolderEl.appendChild(SegmentEl);
      SegmentEl.id = "segment_" + segmentNumber;

      const titleButtonEl = document.createElement("img");
      SegmentEl.appendChild(titleButtonEl);
      titleButtonEl.id = " title_button_" + segmentNumber;
      titleButtonEl.classList.add("image_in_title")
      titleButtonEl.src = ilagesLinkLabel[0];

      const expand_buttonEl = document.createElement("svg");
      SegmentEl.appendChild(expand_buttonEl);
      // expand_buttonEl.classList.add('expand_buttons')
      expand_buttonEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      expand_buttonEl.setAttribute('viewBox', '0 0 448 512')

      const expand_buttonElsPath = document.createElement("path");
      expand_buttonEl.appendChild(expand_buttonElsPath)
      
      expand_buttonElsPath.setAttribute('d', "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z")

      // expand_button.addEventListener('click',expand);

      const imagesLabelEl = document.createElement("div");
      SegmentEl.appendChild(imagesLabelEl);

      for (let index = 0; index < ilagesLinkLabel.length; index++) {
        const element = ilagesLinkLabel[index];
        let newImage = new Image(element, imagesLabelEl);
      }
    }
  }
  class Image {
    sectionsHolderEl = document.getElementById("sections_holder");
    constructor(imgSrc, imagesLabelEl) {
      const imageEl = document.createElement("img");
      imagesLabelEl.appendChild(imageEl);
      imageEl.classList.add('images')
      imageEl.src = imgSrc
    }
  }

  let segment_01 = new Segment([
    "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
    "https://media.tenor.com/7lkRTGCkkuQAAAAe/emojimeme.png"
  ]);
});
