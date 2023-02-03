window.addEventListener("load", async () => {
  console.log("load");

  //커뮤니티
  fetch("http://localhost:7878/board/15/post/15/new").then(async (response) => {
    console.log(await response.json());
  });

  //수행실적
  fetch("http://localhost:7878/board/28/post/28/new").then(async (response) =>
    console.log(await response.json())
  );

  //고객지원
  fetch("http://localhost:7878/board/29/post/29/new").then(async (response) =>
    console.log(await response.json())
  );
});
