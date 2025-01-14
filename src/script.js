document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const desktopLinks = document.getElementById("desktopLinks");
  const mobileLinks = document.getElementById("mobileLinks");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  function handleResize() {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});

function createLinks(additionalClasses = "") {
  const classes = `block text-gray-300 hover:text-white ${additionalClasses}`;

  return `
      <a class="${classes}" href="https://github.com/gonfff" target="_blank">GitHub</a>
      <a class="${classes}" href="https://t.me/gonff" target="_blank">Telegram</a>
      <a class="${classes}" href="mailto:dementev629@gmail.com" target="_blank">Email</a>
  `;
}

document.getElementById("desktopLinks").innerHTML = createLinks();
document.getElementById("mobileLinks").innerHTML = createLinks("px-4 py-2");

function createCard(title, description, link, logo_path) {
  return `
    <a href="${link}" class="w-full md:w-1/2 lg:w-1/3 p-3">
        <div class="flex flex-col p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors h-88">
            <div class="flex flex-col flex-grow h-full justify-between">
                <img src="/images/${logo_path}" alt="Project Logo" class="h-32 w-auto mb-4 object-contain">
                <h2 class="text-left text-xl font-bold text-white mb-2">${title}</h2>
                <p class="text-gray-300 text-left overflow-hidden flex-grow line-clamp-5">${description}</p>
            </div>
        </div>
    </a>
  `;
}

fetch("cards.json")
  .then((response) => response.json())
  .then((cardsData) => {
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = cardsData
      .map((card) =>
        createCard(card.title, card.description, card.link, card.logo_path)
      )
      .join("");
  });
