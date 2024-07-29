/**
 * 获取用户信息完成跳转
 * v6.6.0
 */
function openRedirect ({ pathname, search }) {
    if (pathname !== '/open/redirect') return
    const obj = {};
    const searchParams = new URLSearchParams(search);
    const userInfo = GD.getUser()


    for (const [key, value] of searchParams) {
        obj[key] = value;
    }
    if (!obj.get('redirectUrl')) return
    location.href = `${obj.get('redirectUrl')}?loginId=${userInfo.loginId}`
}


GD.on('open-page', openRedirect, '获取用户信息完成跳转')
