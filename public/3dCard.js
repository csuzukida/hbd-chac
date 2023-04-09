const container = document.querySelector('.card-container');
const card = document.querySelector('#birthday');

card.addEventListener('mousemove', (e) => {
  const xAxis = (card.getBoundingClientRect().left + card.offsetWidth / 2 - e.pageX) / 25;
  const yAxis = (card.getBoundingClientRect().top + card.offsetHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset the card position when the mouse leaves the container
card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
