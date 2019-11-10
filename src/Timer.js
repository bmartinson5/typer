import React, {useState, useEffect} from 'react'


export default function Timer(props) {
  const [time, setTime] = useState({});
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(props.timeChoice);

  useEffect(() => {
    const timeRemain = secondsToMins(props.timeChoice);
    setTime(timeRemain);
  },[])

  useEffect(() => {
    if(props.signal){ //test has started
      console.log('here signal');
      let currentTimer = setInterval(setTheTimeInterval, 1000);
      setTimer(currentTimer);
    } else if(timer) {
      clearInterval(timer);
    }
  }, [props.signal])

  useEffect(() => {
    console.log({seconds});
    setTime(secondsToMins(seconds))
    if (seconds === 0){
      props.finishTest()
    }
  }, [seconds])

  useEffect(() => {
    console.log({time})
  }, [time])

  const secondsToMins = (secs) => {
    const minsD = secs % (3600);
    let minutes = Math.floor(minsD / 60);
    const secsD = minsD % 60;
    let seconds = Math.ceil(secsD);
    minutes = minutes.toString();
    seconds = seconds.toString();
    if(seconds < 10)
      seconds = '0' + seconds;

    if(secs >= 0)
      props.updateTime(secs);

    return {"m":minutes, "s": seconds};
  }

  const setTheTimeInterval = () => {
    setSeconds(s => {
      if(s > 0)
        return s-1;
      else
        return s;
    });
  }

  return(
    <div>
      {time.m} : {time.s}
    </div>
  );
}
