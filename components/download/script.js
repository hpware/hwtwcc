const file = new URL(window.location.href).searchParams.get("file");
const source = new URL(window.location.href).searchParams.get("src");
var source1 = "https:/ghfiles.yuanh.xyz/" + file;
var source2 = "https://files.yuanh.xyz/" + file;
if (!file) {
    window.location.href = history.back();
}
if (!source) {
    window.location.href=history.back();
}
if (source === "1") {
    source1 = source;
}
if (source === "2") {
    source2 = source;
}
var url = source;
function Download(url) {
    document.getElementById('my_iframe').src = url;
};