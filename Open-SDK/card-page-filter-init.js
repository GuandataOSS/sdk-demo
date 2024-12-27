/**
 * 卡片详情页筛选器初始值url传参
 * 参数 open-filter = encodeURIComponent(JSON.stringify([{
 *     fdId: '',
 *     name: '',
 *     fdType: '',
 *     filterValue: '',
 *     filterType: ''
 * }]))
 * v6.5.0
 */
GD.on('gd-route-change', (params) => {
    if (!params.pathname.includes('/card/')) return
    const urlInfo = new URL(location.href)
    const filterStr = urlInfo.searchParams.get('open-filters')
    if (!filterStr) return
    const filters = JSON.parse(filterStr)
    GD.dispatch('config-GD_FILTER_SET', filters)
})
