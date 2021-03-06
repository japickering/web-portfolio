function initState() {
  document.querySelector('.prev').classList.add('hidden');
  document.querySelector('.next').classList.remove('hidden');
}

function setPrev() {
  document.querySelector('.prev').classList.remove('hidden');
  document.querySelector('.next').classList.add('hidden');
}

export function updateSlider(id, className) {
  const buttons = document.getElementsByClassName(className);

  for (const btn of buttons) {
    btn.classList.remove('active');
  }

  buttons[id].classList.add('active');
}

export function slideButtonClick(e, id, slidesContainerId, className) {
  e.preventDefault();
  updateSlider(id, className);

  const slides = document.getElementById(slidesContainerId);
  slides.classList.remove(slidesContainerId + 0);
  slides.classList.remove(slidesContainerId + 1);

  if (id === 0) {
    slides.classList.add(slidesContainerId + 0);
    initState();
  } else if (id === 1) {
    slides.classList.add(slidesContainerId + 1);
    setPrev();
  } else {
    slides.classList.add(slidesContainerId + 0);
    initState();
  }
}
