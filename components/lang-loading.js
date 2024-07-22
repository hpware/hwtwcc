if (navigator.language.includes("zh")) {
  document.getElementById("en-loading").style.display = "none";
  document.getElementById("zh-loading").style.display = "block";
} else {
  document.getElementById("en-loading").style.display = "block";
  document.getElementById("zh-loading").style.display = "none";
}
