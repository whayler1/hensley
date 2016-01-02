(function(window, document, undefined) {

  var init = function() {

    var menuBtn = document.querySelector('.hens-menu');
    var bodyEl = document.body;
    var isExpanded = false;
    var EXPANDED = 'hens-menu-expanded';

    menuBtn.addEventListener('click', function() {

      if(!isExpanded) {

        if (bodyEl.classList) bodyEl.classList.add(EXPANDED);
        else bodyEl.className += ' ' + EXPANDED;
      }else {

        if (bodyEl.classList) bodyEl.classList.remove(EXPANDED);
        else bodyEl.className = bodyEl.className.replace(new RegExp('(^|\\b)' + EXPANDED.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }

      isExpanded = !isExpanded;
    });
  };

  if('querySelector' in document) init();
})(window, document);
