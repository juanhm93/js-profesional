import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");


const player = new MediaPlayer({el: video, plugins: [
     new AutoPlay(),new AutoPause()
]});

playButton.onclick = () => player.tooglePlay();
muteButton.onclick = () => player.toogleMute();