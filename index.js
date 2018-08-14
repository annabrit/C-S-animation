function timeToMilliSeconds(hh, mm, ss, msms) {
  return (
    ((parseInt(hh) * 60 + parseInt(mm)) * 60 + parseInt(ss)) * 1000 +
    parseInt(msms) * 10
  );
}

function transformData(csvData) {
  var dataArray = csvData.trim().split(/\n/);
  dataArray = dataArray.map(val => {
    if (typeof val === 'string' && val.indexOf(',') >= 0) {
      return val.split(/\,/);
    }
    return undefined;
  });
  dataArray.forEach(val => {
    if (Array.isArray(val)) {
      var timeArray = val[0].split(/\;|\:/);
      var totalMilliSeconds = timeToMilliSeconds(...timeArray);
      val.unshift(totalMilliSeconds);
    }
  });
  dataArray = dataArray.filter(val => {
    if (Array.isArray(val) && !Number.isNaN(val[0]) && val.length === 7) {
      return true;
    }
    return false;
  });
  dataArray = dataArray.sort((a, b) => a[0] - b[0]);
  dataArray = dataArray.filter((val, index, array) => {
    if (index > 0 && val[0] === array[index - 1][0]) {
      return false;
    }
    return true;
  });
  return dataArray;
}

function setKeyValues(dataArray) {
  let keyObj = {};
  for(let i = 0; i < dataArray.length; i++) {
    if (dataArray[i][6] !== ''){
      keyObj[dataArray[i][6]] = i;
    }
  }
  return keyObj;
}

function createTime(displayData) {
  let time = 0;
  let currentIndex = 0;
  let isPaused = false;
  let timer;
  let scrubTime = 0;
  let display = false;
  timestamp.style.display = 'none';

  let timeFunctions = {};

  timeFunctions.resetTimer = () => {
    timestamp.innerText = 'Will start from the beginning when unpaused';
    time = 0;
    currentIndex = 0;
    scrubTime = 0;
  };

  timeFunctions.startTimer = () => {
    isPaused = false;
    timer = setInterval(function() {
      if (displayData[currentIndex][0] <= time + scrubTime) {
        timestamp.innerText =
          'This slide should sync with ' +
          displayData[currentIndex][1] +
          ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
        changeCard(displayData, currentIndex);
        if (displayData[currentIndex][2] === ''
          && displayData[currentIndex][3] === ''
          && displayData[currentIndex][4] === ''
          && displayData[currentIndex][5] === ''
          && displayData[currentIndex][6] === ''){
          timeFunctions.resetTimer();
        } else {
          currentIndex++;
        }
      }
      if (currentIndex > displayData.length - 1) {
        timeFunctions.resetTimer();
      }
      time += 10;
    }, 10);
  };
  timeFunctions.pauseTimer = () => {
    if (!isPaused) {
      clearInterval(timer);
      isPaused = true;
      scrubTime = 0;
      timestamp.innerText =
          'This slide should sync with ' +
          displayData[currentIndex][1] +
          ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
    } else {
      timeFunctions.startTimer();
    }
  };
  timeFunctions.increaseTime = () => {
    if (currentIndex < displayData.length - 1) {
      time = displayData[currentIndex + 1][0];
      currentIndex++;
      changeCard(displayData, currentIndex);
      scrubTime = 0;
      timestamp.innerText =
        'Jumped forward to card at ' +
        displayData[currentIndex][1] +
        ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
    } else {
      timeFunctions.resetTimer();
    }
  };
  timeFunctions.decreaseTime = () => {
    if (currentIndex > 0) {
      time = displayData[currentIndex - 1][0] - 10;
      currentIndex--;
      changeCard(displayData, currentIndex);
      scrubTime = 0;
      timestamp.innerText =
        'Jumped backward to card at ' +
        displayData[currentIndex][1] +
        ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
    } else {
      timeFunctions.resetTimer();
    }
  };
  timeFunctions.keyJump = (index) => {
    time = displayData[index][0];
    currentIndex = index + 1;
    changeCard(displayData, index);
    scrubTime = 0;
    timestamp.innerText =
          'This slide should sync with ' +
          displayData[index][1] +
          ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
  }
  timeFunctions.subtractScrub = () => {
    scrubTime = scrubTime - 100;
  };
  timeFunctions.addScrub = () => {
    scrubTime = scrubTime + 100;
  };
  timeFunctions.displayTimeStamp = () => {
    if(!display){
      timestamp.style.display = 'block';
      timestamp.innerText =
          'This slide should sync with ' +
          displayData[currentIndex][1] +
          ' in the video.' + calcTimeStamp(time, scrubTime, isPaused);
      display = true;
    } else {
      timestamp.style.display = 'none';
      display = false;
    }
  };
  return timeFunctions;
}

function changeCard(displayData, index) {
  title.innerText = displayData[index][2] || '';
  subtitle.innerText = displayData[index][3] || '';
  background.style.backgroundColor = displayData[index][4] || 'black';
  card.style.color = displayData[index][5] || 'black';
}

function calcTimeStamp(time, scrubTime, isPaused) {
  let hours = Math.floor(time / 3600000)
  let minutes = Math.max(Math.floor((time - (hours * 3600000))/ 60000),0);
  let seconds = Math.max(Math.floor((time - (hours * 3600000) - (minutes * 60000)) / 1000),0);
  let ms = ((time - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 10);
 
  return `
    Time Elapsed: ${(hours).pad(2)};${(minutes).pad(2)};${(seconds).pad(2)};${(ms).pad(2)}
    Scrub Time: ${scrubTime}ms
    Paused: ${isPaused}
    Commands:
    Restart: r or shift + r
    Pause/Play: space
    Prev/Next Card: shift + left/right arrows
    Scrub Back/Forward: left/right arrows`;
};

Number.prototype.pad = function(size) {
  var sign = Math.sign(this) === -1 ? '-' : '';
  return sign + new Array(size).concat([Math.abs(this)]).join('0').slice(-size);
}

window.onload = function() {
  const cardData = transformData(data);
  const keyObj = setKeyValues(cardData);
  console.log(cardData);
  console.log(keyObj);
  const session = createTime(cardData);

  session.startTimer();

  document.addEventListener('keydown', event => {
    const key = event.key;
    if (key === ' ') {
      session.pauseTimer();
    } else if (key === 'ArrowRight' && event.shiftKey) {
      session.increaseTime();
    } else if (key === 'ArrowLeft' && event.shiftKey) {
      session.decreaseTime();
    } else if (key === 'r' || key === 'R') {
      session.resetTimer();
    } else if (key === 'ArrowRight') {
      session.addScrub();
    } else if (key === 'ArrowLeft') {
      session.subtractScrub();
    } else if (key === 'Enter') {
      session.displayTimeStamp();
    } else if (keyObj[key]) {
      session.keyJump(keyObj[key]);
    } 
  });
};
