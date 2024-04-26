
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var second = Math.floor((t / 1000) % 60);
  var minute = Math.floor((t / 1000 / 60) % 60);
  var hour = Math.floor((t / (1000 * 60 * 60)) % 24);
  var day = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
      'total': t,
      'days': day,
      'hours': hour,
      'minutes': minute,
      'seconds': second
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var days = clock.querySelector('.days');
  var hours = clock.querySelector('.hours');
  var minutes = clock.querySelector('.minutes');
  var seconds = clock.querySelector('.seconds');

  function updateClock() {
      var t = getTimeRemaining(endtime);

      days.innerHTML = t.days;
      hours.innerHTML = ('0' + t.hours).slice(-2);
      minutes.innerHTML = ('0' + t.minutes).slice(-2);
      seconds.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
          clearInterval(timeinterval);
      }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

