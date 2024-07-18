document.addEventListener('DOMContentLoaded', function() {
    const urlParam = new URL(window.location.href).searchParams.get("i");
    const dirParam = new URL(window.location.href).searchParams.get("d");
    const optParam = new URL(window.location.href).searchParams.get("opt");
    const imageViewer = document.getElementById('imageviewer');
    const formatParam = new URL(window.location.href).searchParams.get("format");
    if (!optParam) {
        var optSize = "90%";
    }
    if (optParam) {
        var optSize = optParam + "%";
    }
    if (!formatParam) {
        var format = "JPG";
    }
    if (formatParam) {
        var format = formatParam;
    }
    
    if (urlParam) {
        if (dirParam) {
            imageViewer.src = "https://files.yuanh.xyz/images/photolib/" + dirParam + "/" +urlParam + "." + format;
            imageViewer.alt = "Image from" + dirParam;
            imageViewer.style.width = optSize;
        }
        else {
            imageViewer.src = "https://files.yuanh.xyz/images/photolib/" +urlParam + ".JPG";
            imageViewer.alt = "Image Viewer";
            imageViewer.style.width = optSize;
        }
    } else {
        document.getElementById('Display').innerHTML = "No image specified";
    }
});