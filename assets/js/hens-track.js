(function(window, document) {

  var init = function() {

    var trackingEls = document.querySelectorAll('.hens-track');
    var forEach = Array.prototype.forEach;

    forEach.call(trackingEls, function(el) {

      var action = el.getAttribute('data-action');
      var category = el.getAttribute('data-category');

      el.addEventListener('click', function(e) {
        if('ga' in window) ga('send', 'event', category, action);
      });
    });
  };

  if('querySelectorAll' in document && 'addEventListener' in document) init();

})(window, document);
