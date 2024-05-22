const wrapper = document.getElementById("wrapper");

//reload to 0:0
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// toggle nav
const toggleNav = document.querySelectorAll("#toggle-button")[0];
const navLinks = document.querySelectorAll("#nav-links")[0];
const nav = document.querySelectorAll("#nav")[0];
toggleNav.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (nav.style.background = `rgba(21, 21, 27, 0.95)`);
  window.scrollY < 100 && (nav.style.background = `rgba(21, 21, 27, 0.25)`);
});

// logo component
class techno extends HTMLElement {
  constructor() {
    super();
    this.name;
    this.description;
    this.img;
  }
  static get observedAttributes() {
    return ["name", "description", "img"];
  }
  attributeChangedCallback(nameAttr, oldValue, newValue) {
    switch (nameAttr) {
      case "name":
        this.name = newValue;
        break;
      case "description":
        this.description = newValue;
        break;
      case "img":
        this.img = newValue;
        break;
    }
  }
  connectedCallback() {
    this.innerHTML = `
        <div id="logo-container">
            <div id="logo">
                <img draggable="false" src="${this.img}">
                <h5>${this.name}</h5>
            </div>
            <div id="logo-text">
            <p>${this.description}</p>
        </div>
        </div>`;
  }
}
window.customElements.define("tech-no", techno);

// onhover onleave
const logo = document.querySelectorAll("#logo");
const logoText = document.querySelectorAll("#logo-text");

for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener("mouseover", function () {
    logoText[i].style.display = "flex";
  });
  logo[i].addEventListener("mouseleave", function () {
    logoText[i].style.display = "none";
  });
}

// make full footer vectorsss
const iso1 = document.querySelector("#iso-1");
const iso2 = document.querySelector("#iso-2");

iso1.addEventListener("mouseover", function () {
  iso1.src = "files/svgs/gmaillleno.svg";
});
iso1.addEventListener("mouseleave", function () {
  iso1.src = "files/svgs/gmailvacio.svg";
});

iso2.addEventListener("mouseover", function () {
  iso4.src = "files/svgs/whatsapplleno.svg";
});
iso2.addEventListener("mouseleave", function () {
  iso2.src = "files/svgs/wspvacio.svg";
});

// avatar reload
const avatarModal = document.getElementById("info-content");

window.onload = function () {
  avatarModal.style.left = "0px";
  avatarModal.style.overflow = "hidden";
  adorno();
};
