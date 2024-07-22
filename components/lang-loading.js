const lang = new URL(location.href).searchParams.get('lang');
if (lang === 'zh') {
    document.getElementById("en-loading").style.display = "none";
    document.getElementById("zh-loading").style.display = "block";
}
if (lang === 'en') {
    document.getElementById("en-loading").style.display = "block";
    document.getElementById("zh-loading").style.display = "none";
}
else {
    window.location.href = `${window.location.href}?lang=en`;
}