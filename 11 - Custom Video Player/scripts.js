const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
  let n = video.currentTime
  let skip = this.getAttribute('data-skip')
  video.currentTime = (skip + n)
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});
