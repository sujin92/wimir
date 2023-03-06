let pages = [];
let currentPage = 0;

window.addEventListener("load", async () => {
  console.log("load");

  //커뮤니티
  // fetch("http://localhost:8000/setup/verify", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     session:"U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R"
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then(async (response) => {
  //     console.log(response);
  //     pages = [];
  //     showContents(response, 1);
  //   });
  
  fetch("http://localhost:8000/board/introduce", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: "new"
    }),
  })
    .then((res) => res.json())
    .then(async (response) => {
      console.log(response);
      pages = [];
      showContents(response, 1);
    });

  // //수행실적
  // fetch("http://localhost:7878/board/28/post/28/new").then(async (response) => {
  //   console.log(await response.json());
  // });

  // //고객지원
  // fetch("http://localhost:7878/board/29/post/29/new").then(async (response) => {
  //   console.log(await response.json());
  // });
});

function search(keyword) {
  fetch(`http://localhost:8000/board/15/post/15/new?search=all&val=${keyword}`)
    .then((res) => res.json())
    .then(async (response) => {
      pages = [];
      showContents(response, 1);
    });
}

function showContents(contents) {
  let page = [];
  console.log(contents);
  for (let i = 0; i < contents.length; i++) {
    if (i % 10 === 0) {
      pages.push(page);
      page = [];
    }
    page.push(contents[i]);
  }
  pages.push(page);

  changePage(1);

  document.querySelector("#boardCount").innerText = contents.length;
}

function changePage(n) {
  const wrapper = document.querySelector("#introduceListBottom");
  wrapper.innerHTML = "";
  currentPage = n;
  pages[n].forEach((element) => { 
    wrapper.innerHTML += `
      <div class="listBottomBox">
        <img src="http://211.43.13.171:6060/${element.post_thumbImage}" alt="${element.post_postType}" />
        <a href="/page/loadPage.html?id=${element.post_id}">
          <div class="listText">
            <h4>${element.post_title}</h4>
            <p>
              ${element.post_content.replace(/(<([^>]+)>)/gi, "")}
            </p>
            <span>${element.post_uploadTime}</span>
          </div>
        </a>
      </div>
    `;
  });

  const pagination = document.querySelector("#introducePage");

  pagination.innerHTML = `
    <a href="#"><i id="angles-left" class="fa-solid fa-angles-left"></i></a>
    <a href="#"><i id="angle-left" class="fa-solid fa-angle-left"></i></a>
  `;

  const pageStart = Math.max(Math.min(n - 3, pages.length - 5), 0);

  for (let i = 1; i < Math.min(pages.length, 5); i++) {
    if (i == 0) continue;
    pagination.innerHTML += `
      <a href="#"><p class="introducePage">${pageStart + i}</p></a>
    `;
  }

  pagination.innerHTML += `
    <a href="#"><i id="angle-right" class="fa-solid fa-angle-right"></i></a>
    <a href="#"><i id="angles-right" class="fa-solid fa-angles-right"></i></a>
  `;

  document.querySelectorAll(".introducePage").forEach((e) => {
    e.addEventListener("click", (e) => {
      changePage(parseInt(e.target.innerText));
    });
  });

  document.querySelectorAll(".introducePage").forEach((e) => {
    console.log("introduce", e);
    if (e.innerText == n) {
      e.style.cssText = "color: #cd1319";
    }
  });

  document.querySelector("#angles-left").addEventListener("click", (e) => {
    if (currentPage != 1) {
      changePage(1);
    }
  });

  document.querySelector("#angle-left").addEventListener("click", (e) => {
    if (currentPage != 1) {
      changePage(currentPage - 1);
    }
  });

  document.querySelector("#angle-right").addEventListener("click", (e) => {
    if (currentPage != pages.length - 1) {
      changePage(currentPage + 1);
    }
  });

  document.querySelector("#angles-right").addEventListener("click", (e) => {
    changePage(pages.length - 1);
  });
}

document.querySelector("#search_btn").addEventListener("click", (e) => {
  search(document.querySelector("#search").value);
});

document.querySelector("#search").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search(document.querySelector("#search").value);
  }
});
