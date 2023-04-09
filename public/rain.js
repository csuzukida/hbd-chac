setInterval(rainChacta, 300);

function rainChacta() {
  const chacta = document.createElement('div');
  // chacta.innerHTML = '<img src="https://ca.slack-edge.com/T04792R6SQ3-U047N88J3G9-b628ba19f2e0-512">';
  chacta.classList.add('chacta');
  chacta.style.left = `${Math.random() * window.innerWidth}px`;
  chacta.style.animationDuration = 1000;
  document.body.appendChild(chacta);

  setTimeout(() => {
    chacta.remove();
  }, 10000);
}
