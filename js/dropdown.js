// qna
function collapse(element) {
  var before = document.getElementsByClassName("dropActive")[0];
  if (before && document.getElementsByClassName("dropActive")[0] != element) {
    before.nextElementSibling.style.maxHeight = null;
    before.classList.remove("dropActive");
  }
  element.classList.toggle("dropActive");

  var content = element.nextElementSibling;
  if (content.style.maxHeight != 0) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// 댓글
const heading = document.getElementById('replyHeading');
const btnnn = document.getElementById('reply');
btnnn.addEventListener('click', (e) => {
  heading.classList.toggle('replyHidden');
});