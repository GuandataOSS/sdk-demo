/**
 * 谷歌埋点
 * v6.6.0
 */
function loadScript(url, callback) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url

    script.onload = callback

    document.head.appendChild(script);
}

loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXX', function() {
    window.dataLayer = window.dataLayer || []
    function gtag(){
        dataLayer.push(arguments)
    }
    gtag('js', new Date());

    gtag('config', 'G-XXX')
})
