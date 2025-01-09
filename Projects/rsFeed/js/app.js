const articlesContainer = document.querySelector(".articles-container");

// API-key
const apiKey = "6yov8k1fainunzsw71ghtyqlgaevthu1eleska2w";

async function loadRSS(rssUrl) {
  try {
    // FOR DEPLOYMENT--------------------
    // const response = await fetch(
    //   `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    //     rssUrl
    //   )}&api_key=${apiKey}`
    // );
    // --------------------
    // FOR LOCAL WORK--------------------
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        rssUrl
      )}`
    );
    // --------------------
    if (!response.ok) throw new Error("Failed to fetch RSS feed.");

    const { items } = await response.json();

    articlesContainer.innerHTML = items?.length
      ? items
          .map(
            ({ title = "No title", link = "#" }) =>
              `<a href="${link}" target="_blank" class="article">${title}</a>
              <div class="divider"></div>`
          )
          .join("")
      : "<p>No articles found in this RSS feed.</p>";
  } catch {
    articlesContainer.innerHTML =
      "<p>Failed to load articles. Please try again later.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () =>
  document
    .querySelectorAll(".buttons button")
    .forEach((button) =>
      button.addEventListener("click", () =>
        loadRSS(button.getAttribute("data-rss"))
      )
    )
);

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".overlay");

// Открытие меню
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  overlay.style.display = menu.classList.contains("open") ? "block" : "none";
});

// Закрытие меню при клике на фон
overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.style.display = "none";
});
