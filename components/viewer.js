// A/B Testing 
function abtestjs() {
    return Math.random() < 0.5 ? "A" : "B";
}
const abtestvar = abtestjs();
document.addEventListener('DOMContentLoaded', function() {
    const urlParam = new URL(window.location.href).searchParams.get("i");
    const dirParam = new URL(window.location.href).searchParams.get("d");
    const optParam = new URL(window.location.href).searchParams.get("opt");
    const imageViewer = document.getElementById('imageviewer');
    const formatParam = new URL(window.location.href).searchParams.get("format");
    if (!optParam) {
        var optSize = "90%";
    }
    else if (optParam) {
        var optSize = optParam + "%";
    }
    if (!formatParam) {
        var format = "JPG";
    }
    else if (formatParam) {
        var format = formatParam;
    }
    else if (formatParam == "ip") {
        var format = "heic";
    }
    else if (formatParam == "IP") {
        var format = "HEIC";
    }

    if (urlParam) {
        if (dirParam) {
            imageViewer.src = "https://ghfiles.yuanh.xyz/images/photolib/" + dirParam + "/" +urlParam + "." + format;
            imageViewer.alt = "Image from" + dirParam;
            imageViewer.style.width = optSize;
            if (abtestvar === "A") {
                download.href = "https://php.hwtw.cc/github-image-download.php?f=photolib/" + dirParam + "/" +urlParam + "." + format;
                download.download = 
            }
            else if (abtestvar === "B") {
                download.href = ""
                download.download = urlParam + "." + format;
            }
            

        }
        else {
            imageViewer.src = "https://ghfiles.yuanh.xyz/images/photolib/" +urlParam + "." + format;
            imageViewer.alt = "Image Viewer";
            imageViewer.style.width = optSize;
            if (abtestvar === "A") {
                download.href = "https://php.hwtw.cc/github-image-download.php?f=photolib/" + dirParam + "/" +urlParam + "." + format;
                download.download = ""
            }
            else if (abtestvar === "B") {
                download.href = ""
                download.download = urlParam + "." + format;
            }
        }
    } else {
        document.getElementById('Display').innerHTML = "No image specified";
    }
});
const copyright = document.getElementById('copyright');

