const articlesContainer = document.querySelector(".articles");

// API-key
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
