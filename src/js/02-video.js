import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');


if (savedTime) {
  player.setCurrentTime(savedTime || 0);
}

function localStorageSetTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.on('timeupdate', throttle(localStorageSetTime, 1000));

