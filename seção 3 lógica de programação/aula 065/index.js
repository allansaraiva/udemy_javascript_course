function showTime() {
  let date = new Date();

  return date.toLocaleTimeString('pt-br', {
    hour12: false
  });
}

const time = setInterval(function() {
  console.log(showTime())
}, 1000)

setTimeout(function() {
  clearInterval(time);
}, 5000)
