(function () {
  'use strict';

  const keystrokeDelay = 60;
  const outputDelay = 300;

  function animateTyping(element, callback) {
    var characters = element.textContent.split('');
    element.textContent = '';

    var characterIndex = 1;
    var typingInterval = setInterval(function () {
      element.textContent = characters.slice(0, characterIndex++).join('');
      if (characterIndex > characters.length) {
        clearInterval(typingInterval);
        typingInterval = null;
        callback();
      }
    }, keystrokeDelay);
  }

  function animateCommand(element) {
    element.classList.remove('d-none');
    var nextElement = element.nextElementSibling;
    if (element && element.classList.contains('terminal-animate-type')) {
      animateTyping(element, function() {
        if (nextElement && !element.classList.contains('terminal-animate-done')) {
          setTimeout(function () { animateCommand(nextElement); }, outputDelay);
        }
      });
    } else {
      if (nextElement && !element.classList.contains('terminal-animate-done')) {
        setTimeout(function () { animateCommand(nextElement); }, outputDelay);
      }
    }
  }

  var os = "";
  if (navigator.appVersion.indexOf("Mac") != -1) {
    os = "mac";
  }
  if (navigator.appVersion.indexOf("Win") != -1) {
    os = "win";
  }
  if (navigator.appVersion.indexOf("Linux") != -1) {
    os = "linux";
  }

  Array.from(document.querySelectorAll('.install-' + os)).forEach(function(element) {
    element.classList.remove('d-none');
  });

  Array.from(document.querySelectorAll('.terminal-animate-begin')).forEach(function(element) {
    animateCommand(element);
  });
}());
