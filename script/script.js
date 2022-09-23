let anchorSelector = 'a[href^="#"]';
let anchorList =
document.querySelectorAll(anchorSelector);
anchorList.forEach(link => {
  link.onclick = function (e) {
    e.preventDefault();
    let destination =
    document.querySelector(this.hash);
    destination.scrollIntoView({
      behavior: 'smooth'
    });
  }
});
window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 2000);
      }   