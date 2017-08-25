chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  if (selection == "undefined"){
    selection = "";
  }
  var select = "<h4>" + selection + "</h3>"
  var amazon = "<li><a href='https://www.amazon.co.jp/s/ref=assoc_res_sw_zz_dkp_cra_t0_view_all?search-alias=aps&tag=ozamart-22&linkCode=w13&linkId=&field-keywords=" + selection + "'>アマゾン</a></li>";
  var calil  = "<li><a href='https://calil.jp/search?q=" + selection + "'>カーリル</a></li>";
  document.getElementById("output").innerHTML = select + "<ul>" + amazon + calil + "</ul>";
});
