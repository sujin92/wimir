const post_id = window.location.href.split('id=')[1]

window.addEventListener('load', async () => {
  const ele = document.getElementById('count');

  const { count } = await fetch(`http://localhost:8000/comment/${post_id}/count`, {
    method: 'POST'
  }).then((res) => res.json())

  ele.innerText = count;
})

window.addEventListener('load', async () => {
  const content = await fetch(`http://localhost:8000/board/detail/introduce/${post_id}`, {
    method: 'POST'
  }).then((res) => res.json())

  console.log(content)

  document.querySelector(".writer").innerText = content.post_writer
  document.querySelector(".writerData").innerText = content.post_uploadTime
  document.querySelector(".hits").innerText = content.post_count
  document.querySelector(".loadContent").innerHTML = content.post_content

  document.querySelector(".loadPageInner > h2").innerText = content.post_title
})

window.addEventListener('load', async () => {
  const container = document.querySelector(".comments");
  const comments = await fetch(`http://localhost:8000/comment/${post_id}`, {
    method: 'POST'
  }).then(x => x.json())

  console.log(comments);

  for (let comment of comments) {
    const {
      comment_id,
      comment_writer,
      comment_content,
      comment_uploadTime,
      comment_isReply,
      reply_ref,
      reply_step
    } = comment;

    const element = createComment(comment);
    
    if (comment_isReply) {
      container.querySelector(`#comment_${reply_ref}`).after(element);
    } else {
      container.appendChild(element);
    }
  }
})

function createComment({
  comment_id,
  comment_writer,
  comment_content,
  comment_uploadTime,
  comment_isReply,
  relpy_ref,
  reply_step
}){
  const element = document.createElement('div');
  element.id = `comment_${comment_id}`;
}

function createComment({
  comment_id,
  comment_writer,
  comment_content,
  comment_uploadTime,
  comment_isReply,
  reply_ref,
  reply_step
}) {
  const element = document.createElement('div');
  element.id = `comment_${comment_id}`;
  element.classList = 'commentUser';
  if (comment_isReply)
    element.classList += ' commentReply';
  element.innerHTML = /* html */`
  <div>
    <p><i class="fa-solid fa-circle-user"></i>${comment_writer}</p>
    <p>${comment_content}</p>
    <p>${comment_uploadTime}</p>
    ${
      comment_isReply ? '' : /*html*/`
      <button type="button" id="reply" class="boxButton">답글</button>
      `
    }
    <button type="button" class="boxButton" onclick="delComment(${comment_id})">삭제</button>
  </div>
  `
  if (comment_isReply) {
    element.innerHTML = /* html */`<span>L</span>` + element.innerHTML;
  } else {
    element.innerHTML += /* html */`
    <div id="replyHeading" class="replyHidden">
      <div>
        <input type="text" id="userName" placeholder="이름">
        <input type="password" id="userPw" placeholder="비밀번호">
      </div>
      <div>
        <textarea placeholder="내용을 입력하세요." id="userComment" rows="5"></textarea>
      </div>
      <button type="button" class="boxButton btnBox">등록</button>
    </div>
    `
  }

  if (!comment_isReply) {
    element.querySelector('#replyHeading > button').addEventListener('click', addReply);
    element.querySelector('#reply').addEventListener('click', () => {
      const k = element.querySelector('#replyHeading').classList;
      if (k.value == '') {
        element.querySelector('#replyHeading').classList = 'replyHidden';
      } else {
        element.querySelector('#replyHeading').classList = '';
      }
    });
  }

  return element;
}

function addComment() {
  const name = document.querySelector('.commentNew #userName').value;
  const pass = document.querySelector('.commentNew #userPw').value;
  const comment = document.querySelector('.commentNew #userComment').value;

  fetch(`http://localhost:8000/comment/post`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      post_id: post_id,
      comment_writer: name,
      comment_content: comment,
      comment_password: pass,
      comment_isReply: 0,
      session:"U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R",
    })
  }).then(x => x.json()).then(() => window.location.reload())
}

function delComment(id) {
  let pass = prompt("비밀번호를 입력해주세요.");

  fetch(`http://localhost:8000/comment/delete/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      comment_password: pass,
      session:"U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R",
    })
  }).then(x => x.json()).then(() => window.location.reload())
}

function addReply(e) {
  const reply = e.target.parentElement;
  const id = reply.parentElement.id.split('_')[1];
  const name = reply.querySelector('#userName').value;
  const pass = reply.querySelector('#userPw').value;
  const comment = reply.querySelector('#userComment').value;
  
  fetch(`http://localhost:8000/comment/post`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      post_id: post_id,
      comment_writer: name,
      comment_content: comment,
      comment_password: pass,
      comment_isReply: 1,
      reply_step: 1,
      reply_ref: id,
      session:"U2FsdGVkX1/oHeLhCWQeOhcDD2/UW6ZqF4FAOPbUVnkLxDYNLvLuhAmJ3TbJsI4R",
    })
  }).then(x => x.json()).then(() => window.location.reload())
}