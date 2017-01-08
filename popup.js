chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  var amazon = "<li><a href='https://www.amazon.co.jp/s?field-keywords=" + selection + "'>アマゾン</a></li>";
  var calil  = "<li><a href='https://calil.jp/search?q=" + selection + "'>カーリル</a></li>";
  document.getElementById("output").innerHTML = selection + "<ul>" + amazon + calil + "</ul>";
});
