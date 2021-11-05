const element = document.querySelector(".js-checker");

function checker() {
  let time = performance.now();
  window.requestAnimationFrame((timestamp) => {
    element.textContent = `${(timestamp - time).toFixed(0)} ms`;
    time = timestamp;
    checker();
  });
}

checker();
