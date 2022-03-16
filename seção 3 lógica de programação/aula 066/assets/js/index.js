function relógio() {
  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
  
    return date.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'GMT'
    });
  }
  
  console.log(getTimeFromSeconds(10));
  
  
  const relógio = document.querySelector('.timer');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0
  let timer;
  
  function iniciaTime() {
    timer = setInterval(function() {
      segundos++;
      relógio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function(event) {
    const element = event.target;
  
    if(element.classList.contains('zerar')) {
      relógio.classList.remove('pausado');
    clearInterval(timer);
    relógio.innerHTML = '00:00:00'
    segundos = 0;
    }
  
    if(element.classList.contains('iniciar')) {
      relógio.classList.remove('pausado');
    clearInterval(timer);
    iniciaTime();
    }
  
    if(element.classList.contains('pausar')) {
      relógio.classList.add('pausado');
    clearInterval(timer)
    }
  })
}
relógio();
