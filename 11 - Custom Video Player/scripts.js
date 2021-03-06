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
  let skip = this.dataset.skip;
  console.log(skip)
  video.currentTime += skip
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = video.currentTime * 100 / video.duration;
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  video.currentTime = video.duration * e.offsetX / progress.offsetWidth ;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);

let mousedown = false
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
