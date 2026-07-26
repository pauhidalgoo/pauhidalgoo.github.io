const input = document.querySelector("#site-search");
const output = document.querySelector("#search-results");
const status = document.querySelector("#search-status");
let searchIndex = [];

fetch("/index.json")
  .then((response) => response.json())
  .then((data) => {
    searchIndex = data;
  })
  .catch(() => {
    status.textContent = "The search index could not be loaded.";
  });

function escapeHtml(value) {
  const span = document.createElement("span");
  span.textContent = value;
  return span.innerHTML;
}

input?.addEventListener("input", () => {
  const query = input.value.trim().toLocaleLowerCase();
  output.replaceChildren();

  if (query.length < 2) {
    status.textContent = "Type at least two characters.";
    return;
  }

  const matches = searchIndex
    .map((item) => {
      const title = item.title.toLocaleLowerCase();
      const tags = (item.tags || []).join(" ").toLocaleLowerCase();
      const text = `${title} ${tags} ${item.summary} ${item.content}`.toLocaleLowerCase();
      const score = (title.includes(query) ? 4 : 0) + (tags.includes(query) ? 2 : 0) + (text.includes(query) ? 1 : 0);
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.item.date.localeCompare(a.item.date))
    .slice(0, 20);

  status.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} for “${input.value.trim()}”.`;
  matches.forEach(({ item }) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <div><span>${escapeHtml(item.section)}</span><time>${escapeHtml(item.date.slice(0, 4))}</time></div>
      <h2><a href="${item.permalink}">${escapeHtml(item.title)}</a></h2>
      <p>${escapeHtml(item.summary)}</p>
      <div class="tag-list">${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    `;
    output.append(article);
  });
});
