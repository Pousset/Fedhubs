document.addEventListener('DOMContentLoaded', function () {
  var particulierRadio = document.getElementById('particulier');
  particulierRadio.addEventListener('change', function () {
    if (this.checked) {
      // Replace the current history entry.
      window.location.replace('http://example.com');
      
      // Push a new entry onto the history stack.
      history.pushState(null, null, window.location.href);
      
      // Add a listener to prevent going back from the new page.
      window.onpopstate = function () {
        history.go(1);
      };
    }
  });
});
