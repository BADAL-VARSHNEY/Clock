const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour')

for (let s = 0; s < 60; s++) {
    let minuteSpijeE1 = document.createElement('i');
    let secondSpijeE2 = document.createElement('i');
    minuteSpijeE1.className = 'spike'
    secondSpijeE2.className = 'spike'
    minuteSpijeE1.style = `--rotate:${6 * s}deg`;
    secondSpijeE2.style = `--rotate:${6 * s}deg`;
    minuteSpijeE1.setAttribute('data-i',s)
    secondSpijeE2.setAttribute('data-i',s)

    minutes.append(minuteSpijeE1);
    seconds.append(secondSpijeE2);
    
}


function getTime(){
    let d = new Date();
    s = d.getSeconds();
    m = d.getMinutes();

   let h = d.getHours()% 12
   let fHours = h < 10 ? `0${h}`: h ;
   hour.textContent = fHours
   minute.textContent = m
   
    minutes.style = `--dRotate:${6 * m}deg`;


    if (s == 0) {
        seconds.classList.add('stop_animation')
    }else{
        seconds.classList.remove('stop_animation')

    }
    if (m == 0) {
        minutes.classList.add('stop_animation')
    }else{
        minutes.classList.remove('stop_animation')

    }
    seconds.style = `--dRotate:${6 * s}deg`;
     



}


setInterval(getTime, 1000);
getTime()