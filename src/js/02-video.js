import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const time = localStorage.getItem("videoplayTime");

if (time) {
  player.setCurrentTime(time);
}

player.on("play", throttle(savedTime, 1000));
function savedTime(data) {
  localStorage.setItem("videoplayTime", data.seconds);
}
