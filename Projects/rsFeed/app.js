const articlesContainer = document.querySelector(".articles");

// Твой API-ключ
const apiKey = "6yov8k1fainunzsw71ghtyqlgaevthu1eleska2w";

async function loadRSS(rssUrl) {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        rssUrl
      )}&api_key=${apiKey}`
    );

    if (!response.ok) throw new Error("Failed to fetch RSS feed.");

    const { items } = await response.json();

    articlesContainer.innerHTML = items?.length
      ? items
          .map(
            ({ title = "No title", link = "#" }) =>
              `<div class="article"><a href="${link}" target="_blank">${title}</a></div>`
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

const scrollToTopButton = document.querySelector(".scrollToTop");

// Показать кнопку при прокрутке вниз
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Прокрутить вверх при нажатии на кнопку
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// FOR LOCAL WORK

// const articlesContainer = document.querySelector(".articles");

// async function loadRSS(rssUrl) {
//   try {
//     const response = await fetch(
//       `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
//         rssUrl
//       )}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch RSS feed.");

//     const { items } = await response.json();

//     articlesContainer.innerHTML = items?.length
//       ? items
//           .map(
//             ({ title = "No title", link = "#" }) =>
//               `<div class="article"><a href="${link}" target="_blank">${title}</a></div>`
//           )
//           .join("")
//       : "<p>No articles found in this RSS feed.</p>";
//   } catch {
//     articlesContainer.innerHTML =
//       "<p>Failed to load articles. Please try again later.</p>";
//   }
// }

// document.addEventListener("DOMContentLoaded", () =>
//   document
//     .querySelectorAll(".buttons button")
//     .forEach((button) =>
//       button.addEventListener("click", () =>
//         loadRSS(button.getAttribute("data-rss"))
//       )
//     )
// );
