var switcher$ = $(".switcher");
var switchTarget$ = $(".switch-target");

switcher$.on("click", (event) => {
  event.preventDefault();
  switchIframeSrc(event.target);
});

function switchIframeSrc(anchor) {
  switchTarget$.attr("src", $(anchor).attr("href"));
}

switchIframeSrc();
