const urlParam = new URL(window.location.href).searchParams.get("i");
const dirParam = new URL(window.location.href).searchParams.get("d");
const optParam = new URL(window.location.href).searchParams.get("opt");
const imageViewer = document.getElementById('imageviewer');
const formatParam = new URL(window.location.href).searchParams.get("format");
// A/B Random Testing
function abtestjs() {return Math.random() < 0.5 ? "A" : "B";} const abtestvar = abtestjs();
// Pull Format
if (!formatParam) {var format = "JPG";}else if (formatParam) {var format = formatParam;}else if (formatParam == "ip") {var format = "heic";}else if (formatParam == "IP") {var format = "HEIC";}
// Pull Width
if (!optParam) {var optSize = "90%";}else if (optParam) {var optSize = optParam + "%";}
//Dun Dun Dun viewer.js
document.addEventListener('DOMContentLoaded', function() {
    if (urlParam) {
        if (dirParam) {
            imageViewer.src = "https://ghfiles.yuanh.xyz/images/photolib/" + dirParam + "/" +urlParam + "." + format;
            imageViewer.alt = "Image from" + dirParam;
            imageViewer.style.width = optSize;
            download.href = "https://php.hwtw.cc/github-image-download.php?f=photolib/" + dirParam + "/" +urlParam + "." + format;
        }
        else {
            download.href = "https://php.hwtw.cc/github-image-download.php?f=photolib/" + "/" +urlParam + "." + format;
            imageViewer.src = "https://ghfiles.yuanh.xyz/images/photolib/" +urlParam + "." + format;
            imageViewer.alt = "Image Viewer";
            imageViewer.style.width = optSize;
        }
    } else {
        document.getElementById('Display').innerHTML = "No image specified";
    }
});


