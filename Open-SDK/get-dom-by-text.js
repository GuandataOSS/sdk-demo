/**
 * 通过文本获取节点，并进行操作（适合无法通过标签属性定位的节点）
 * 示例为获取弹窗中的一个节点，并设置隐藏
 * v6.6.0
 */

let GDValidityObserver
// 通过监听路由可以缩小改动范围
GD.on('gd-route-change', params => {
    const { pathname } = params
    try {
        if (['/schedule', '/alert-center'].some(path => pathname.includes(path))) {
            if (GDValidityObserver) return
            GDValidityObserver = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    if (mutation.addedNodes.length) {
                        mutation.addedNodes.forEach((node) => {
                            if (
                                node.nodeType === 1 && (
                                    node.classList.contains('ant-modal-root')
                                    || node.childNodes?.[0]?.classList?.contains('ant-modal-root')
                                )
                            ) {
                                // 增加判断条件来减少获取到其他节点的可能性
                                const targetNode = Array.from(node.querySelectorAll('.row-flex')).find(el => (
                                    ['有效期', '长期有效', '时间范围内有效'].every(text => el.textContent.includes(text))
                                ))

                                if (targetNode) {
                                    targetNode.style.display = 'none'
                                }

                                /**
                                 * 图片与附件
                                 */
                                const imagesAttachmentsNode = Array.from(node.querySelectorAll('.row-flex')).find(el => (
                                    ['图片与附件'].every(text => el.textContent.includes(text))
                                ))
                                //console.log('图片与附件='+imagesAttachmentsNode);
                                if (imagesAttachmentsNode) {
                                    //console.log('图片与附件-执行');
                                    imagesAttachmentsNode.style.display = 'none'
                                }
                                /**
                                 * 跳转链接
                                 */
                                const linkNode = Array.from(node.querySelectorAll('.row-flex')).find(el => (
                                    ['跳转链接'].every(text => el.textContent.includes(text))
                                ))
                                //console.log('跳转链接='+linkNode);
                                if (linkNode) {
                                    //console.log('跳转链接-执行');
                                    linkNode.style.display = 'none'
                                }
                                /**
                                 * 特别注意
                                 */
                                const noticeNode = Array.from(node.querySelectorAll('.N5WVJvW3')).find(el => (
                                    ['1) 附件中显示的数据，为订阅创建者可见数据。','2) 附件最大为50M, 如超过50M将发送失败。'].every(text => el.textContent.includes(text))
                                ))

                                if (noticeNode) {
                                    noticeNode.style.display = 'none'
                                }
                            }
                            if (
                                node.nodeType === 1
                                && node.classList.contains('row-flex-center')
                                && node.textContent.includes('图片与附件')
                            ) {
                                node.style.display = 'none'
                            }
                            if (
                                node.nodeType === 1
                                && node.classList.contains('row-flex')
                                && node.textContent.includes('跳转链接')
                            ) {
                                node.style.display = 'none'
                            }
                            if (
                                node.nodeType === 1
                                && node.classList.contains('_3kdwhtc3')
                                && [
                                    '图片与附件',
                                    '跳转链接',
                                ].every(text => node.textContent.includes(text))
                            ) {
                                node.style.display = 'none'
                            }
                            if (
                                node.nodeType === 1
                                && node.classList.contains('_1q5-zP61')
                                && [
                                    '特别注意',
                                    '附件中显示的数据',
                                    '附件最大为50M',
                                    '支持在邮件正文添加第一张中国式报表的html',
                                ].every(text => node.textContent.includes(text))
                            ) {
                                node.style.display = 'none'
                            }
                        });
                    }
                });
            });
            GDValidityObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (GDValidityObserver) {
            GDValidityObserver.disconnect()
            GDValidityObserver = null
        }
    } catch (e) {
        console.log(e)
    }
})
