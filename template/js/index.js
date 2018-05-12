document.addEventListener("DOMContentLoaded", function(event) {

  function toggleClickHandler(e) {
    e.preventDefault();
    var codeBlock = e.currentTarget.parentNode.nextElementSibling;
    var result = codeBlock.classList.toggle('closed');
    e.currentTarget.innerHTML = (result)? 'Show ' + e.currentTarget.innerHTML.split(' ')[1]: 'Hide ' + e.currentTarget.innerHTML.split(' ')[1];
  }

  var toggles = document.querySelectorAll('.toggleCodeSnippet a');
  for(var i = 0; i<toggles.length; i++) {
    toggles[i].addEventListener("touchstart", toggleClickHandler, false);
    toggles[i].addEventListener("click", toggleClickHandler, false);
  }
});
