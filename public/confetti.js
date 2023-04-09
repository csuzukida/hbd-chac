document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    party.confetti(event, {
      count: 60,
      spread: 80,
      size: 1,
    });
  });
  setInterval(throwConfetti, 500);
});

function throwConfetti() {
  const x = Math.floor(Math.random() * document.body.clientWidth);
  const y = Math.floor(Math.random() * document.body.clientHeight);

  const clickEvent = new MouseEvent('click', {
    clientX: x,
    clientY: y,
    button: 0,
    bubbles: true,
    cancelable: true,
  });

  document.body.dispatchEvent(clickEvent);
}
