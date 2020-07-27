import { musicPlayerInit} from "./musicPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn'),
     playerBlock = document.querySelectorAll('.player-block'),
     temp =document.querySelector('.temp');

const deaclivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item=>item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, i) =>{
    btn.addEventListener('click', () =>{
        deaclivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    });
});
