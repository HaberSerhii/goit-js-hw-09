import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle); // Перевірка підключення
console.log(Player); // Перевірка підключення
const vimeoPlayer = document.querySelector('#vimeo-player');

const playOn = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

new Player(vimeoPlayer).on('timeupdate', throttle(playOn, 1000));
new Player(vimeoPlayer).setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);
