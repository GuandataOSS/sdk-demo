/**
 * 用户自定义页面渲染
 */

class CustomComponent extends HTMLElement {
    async renderPage1() {
        this.innerHTML = `
      这是一个页面    `
    }


    async renderPage2() {
        this.innerHTML = `
      这是另一个页面，只有管理员能看到    `

    }


    connectedCallback() {
        const pathname = this.getAttribute('pathname')
        const userInfo = GD.getUser()
        if (pathname ==='/open/page1') {
            this.renderPage1();
        } else if (pathname === '/open/page2' && userInfo.role.includes('admin')) {
            this.renderPage2()
        } else {
            this.innerHTML = '该页面不存在'
        }
    }
}


customElements.define('open-page', CustomComponent);
