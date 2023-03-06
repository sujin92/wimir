document.querySelectorAll(".write-type").forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelectorAll(".write-type").forEach((e) => {
      e.style.background = "#ffffff";
      e.style.border = "1px solid #c1c1c1";
      e.style.color = "#000000";
    });
    e.target.style.background = "#cd1319";
    e.target.style.border = "1px solid #cd1319";
    e.target.style.color = "#ffffff";
    post_type = e.target.innerText;
    switch (post_type) {
      case "제품소개":
        upload = "introduce";
        break;
      case "정보공유":
        upload = "introduce";
        break;
      case "공식 SNS":
        upload = "introduce";
        break;
      case "NEWS":
        upload = "introduce";
        break;
    }
  });
});

document.querySelector("#thumbnail-upload").addEventListener("change", (e) => {
  document.querySelector("#thumbnail-name").innerText = e.target.files[0].name;
});

const font = Quill.import("formats/font");
font.whitelist = [""];
Quill.register(font, true);

const editor = new Quill("#editor", {
  modules: {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ align: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["emoji"],

        ["clean"],
      ],
      handlers: {
        emoji: function () {},
      },
    },
    "emoji-toolbar": true,
    "emoji-shortname": true,
  },
  placehorder: "Input",
  theme: "snow",
});

document.querySelector(".registerbtn").addEventListener("click", async (e) => {
  // console.log(document.querySelector("#title").value);
  // console.log(document.querySelector("#author").value);
  // console.log(document.querySelector("#password").value);
  // console.log(document.querySelector("#thumbnail-upload").files[0]);
  // console.log(upload);
  // console.log(editor.root.innerHTML);

  
  const formData = new FormData();
  formData.append("image", document.querySelector("#thumbnail-upload").files[0]);
  formData.append("session", "U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R")
  const imgSrc = await fetch(`http://localhost:8000/board/image`, {
    method: 'POST',
    body: formData
  }).then(res => res.json());


  fetch(`http://localhost:8000/board/post`, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      category_id: upload,
      post_title: document.querySelector("#title").value,
      post_content: editor.root.innerHTML,
      post_thumbImage: imgSrc.path,
      post_writer: document.querySelector("#author").value,
      post_postType: post_type,
      post_password: document.querySelector("#password").value,
      post_isNotice: 0,
      additional: 0,
      session:"U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R",
      isPrivate: 0
    }),
  }).then((res) => console.log(res));
});

header_on();

document.querySelector(".innerHeader").addEventListener("mouseout", (e) => {
  setTimeout(() => {
    header_on();
  }, 0);
});
