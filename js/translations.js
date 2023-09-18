window.onload = function () {
  const script = document.createElement("script");
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
};


function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  }, "google-translate-element");
}
