import React, {useState} from 'react'

const CountdownTimer = (props) => {
    const [expired, setExpired] = useState(false);
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    // Set the date we're counting down to
var countDownDate = new Date(props.countDownDate).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);
  

  setTime({
    days: Number(day),
    hours: Number(hour),
    minutes: Number(minute),
    seconds: Number(second)
  })
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    setExpired(true);
  }
}, 1000); 
  return (
    <div>
        {expired == true ? <p className='text-white'>Ongoing</p> : <p className='text-white'>{time.days + "d " + time.hours + "h " + time.minutes + "m " + time.seconds + "s "}</p>}
    </div>
  )
}

export default CountdownTimer