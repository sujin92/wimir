let pages = []

window.addEventListener("load", async () => {
  console.log("load");

  //커뮤니티
  fetch("http://localhost:7878/board/15/post/15/new")
  .then(res => res.json())
  .then(async (response) => {
    const count = response.length;
    document.querySelector("#boardCount").innerText = count
    
    const wrapper = document.querySelector("#introduceListBottom")

    response.forEach((element) => {
      wrapper.innerHTML += `
        <div class="listBottomBox">
          <img src="http://127.0.0.1:7878${element.post_thumbImage}" alt="제품소개" />
          <a href="#">
            <div class="listText">
              <h4>${element.post_title}</h4>
              <p>
                ${element.post_title}
              </p>
              <span>${element.post_uploadTime}</span>
            </div>
          </a>
        </div>
      `
    })
  });



  //수행실적
  fetch("http://localhost:7878/board/28/post/28/new").then(async (response) => {
    console.log(await response.json());
  });

  //고객지원
  fetch("http://localhost:7878/board/29/post/29/new").then(async (response) => {
    console.log(await response.json());
  });
});

function search(keyword) {
  fetch(`http://localhost:7878/board/15/post/15/new?search=all&val=${keyword}`)
    .then(res => res.json())
    .then(async (response) => {
      pages = []
      showContents(response, 1)
    })
}

function showContents(contents) {
  let page = []
  console.log(contents)
  for (let i = 0; i < contents.length; i++) {
    if (i%10 === 0) {
      pages.push(page)
      page = []
    }
    page.push(contents[i])
  }
  pages.push(page)

  changePage(1)

  const pagination = document.querySelector("#introducePage")

  pagination.innerHTML = `
    <a href="#"><i class="fa-solid fa-angles-left"></i></a>
    <a href="#"><i class="fa-solid fa-angle-left"></i></a>
  `

  for (i in pages) {
    if (i==0) continue;
    pagination.innerHTML += `
      <a href="#"><p>${i}</p></a>
    `
  }

  pagination.innerHTML += `
    <a href="#"><i class="fa-solid fa-angle-right"></i></a>
    <a href="#"><i class="fa-solid fa-angles-right"></i></a>
  `
}

function changePage(n) {
  const wrapper = document.querySelector("#introduceListBottom")
  wrapper.innerHTML = ""
  try {
    console.log(pages[n])
    pages[n].forEach((element) => {
      wrapper.innerHTML += `
        <div class="listBottomBox">
          <img src="http://127.0.0.1:7878/${element.post_thumbImage}" alt="${element.post_postType}" />
          <a href="#">
            <div class="listText">
              <h4>${element.post_title}</h4>
              <p>
                ${element.post_title}
              </p>
              <span>${element.post_uploadTime}</span>
            </div>
          </a>
        </div>
      `
    })
    document.querySelector("#boardCount").innerText = pages[pageN].length
  } catch {
    document.querySelector("#boardCount").innerText = 0
  }
}

$('.introducePage').on('click' ,(e) => {
  changePage(parseInt($('.introducePage').val()))
})

$('#search').on('keypress', (e) => {
  if (e.key === 'Enter') {
    search($('#search').val())
  }
})
