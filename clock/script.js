// const btn=document.getElementById('stop-time');

// function showTime() {
//     const currentTime = new Date();
//     // console.log("Current Time: " + currentTime.toLocaleTimeString());
//     const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
//     // console.log(time);
//     document.getElementById('time').innerText = time;
// }
// let interval=setInterval(showTime, 1000);
// btn.addEventListener('click',()=>{
//     clearInterval(interval);
// });
    const btn = document.getElementById("stop-time");
    const timeDisplay = document.getElementById("time");

    let seconds = parseInt(prompt("⏱️ Enter the number of seconds for the stopwatch:"));
    if (isNaN(seconds) || seconds <= 0) {
      alert("Please enter a valid positive number!");
    } else {
      let elapsed = 0;

      function updateStopwatch() {
        elapsed++;
        let remaining = seconds - elapsed;

        let min = Math.floor(remaining / 60);
        let sec = remaining % 60;

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        timeDisplay.innerText = `${min}:${sec}`;

        if (remaining <= 0) {
          clearInterval(interval);
          timeDisplay.innerText = "00:00";
          timeDisplay.classList.add("finished");
          timeDisplay.innerText = "✅ Done!";
        }
      }

      timeDisplay.innerText = `00:${seconds < 10 ? "0" + seconds : seconds}`;
      const interval = setInterval(updateStopwatch, 1000);

      btn.addEventListener("click", () => {
        clearInterval(interval);
        btn.innerText = "Stopped";
        btn.style.background = "#f44336";
        btn.style.color = "white";
      });
    }
