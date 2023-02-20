const memeCountElement = document.getElementById("meme-count");

function getDate(date) {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString() + "/";
  let year = date.getFullYear().toString() + "/";
  return year.concat(month.concat(day));
}

async function fetchUrl() {
  const res = await fetch("https://meme-api.com/gimme");
  let data = await res.json();
  return data.url;
}

async function showMeme(url) {
  document.getElementById("image").src = url;
}

async function main() {
  let today = getDate(new Date());
  let date = localStorage.getItem("date");
  let memeCount = localStorage.getItem("memeCount");
  if (date !== today) {
    memeCount = 1;
  } else {
    memeCount++;
  }
  memeCountElement.innerText = today + " meme count: " + memeCount;
  localStorage.setItem("date", today);
  localStorage.setItem("memeCount", memeCount);
  url = await fetchUrl();
  showMeme(url);
}

main();
