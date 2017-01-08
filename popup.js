chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  if (selection == "undefined"){
    selection = "";
  }
  var select = "<h4>選択文字列：" + selection + "</h3>"
  var amazon = "<li><a href='https://www.amazon.co.jp/s?field-keywords=" + selection + "'>アマゾン</a></li>";
  var calil  = "<li><a href='https://calil.jp/search?q=" + selection + "'>カーリル</a></li>";
  document.getElementById("output").innerHTML = select + "<ul>" + amazon + calil + "</ul>";
});
