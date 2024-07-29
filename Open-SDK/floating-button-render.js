/**
 * 在门户页面渲染自定义悬浮按钮
 * v6.6.0
 */

const isMobile = location.pathname.startsWith('/m')
// PC端悬浮按钮
class PortalFloatActionButton extends HTMLElement {
    constructor () {
        super()

        const shadowRoot = this.attachShadow({ mode: 'open' })
        const divEle = document.createElement('div')
        divEle.setAttribute('id', 'wrapper')
        divEle.setAttribute('class', 'wrapper')
        divEle.innerHTML= `
            <div class="content">
                <svg t="1667901570010" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21577" width="200" height="200">
                    <path d="M511.908 955.75c-8.807 0-17.43-3.302-24.22-10.091L385.307 843.276c-13.394-13.394-13.394-34.861 0-48.255s34.861-13.395 48.256 0l78.346 78.346 78.347-78.346c6.422-6.422 15.045-10.092 24.22-10.092h238.893c18.898 0 34.127-15.229 34.127-34.128V204.76c0-18.715-15.229-34.128-34.127-34.128H170.816c-18.715 0-34.128 15.413-34.128 34.128V750.8c0 18.9 15.413 34.128 34.128 34.128h102.383c18.898 0 34.127 15.229 34.127 34.128s-15.229 34.127-34.127 34.127H170.816c-56.513 0-102.383-45.87-102.383-102.383V204.76c0-56.513 45.87-102.383 102.383-102.383h682.552c56.512 0 102.383 45.87 102.383 102.383V750.8c0 56.513-45.87 102.383-102.383 102.383H628.419l-92.291 92.475c-6.605 6.605-15.413 10.092-24.22 10.092z" p-id="21578"></path><path d="M324.206 511.908c-28.256 0-51.19-22.935-51.19-51.191s22.934-51.192 51.19-51.192 51.192 22.936 51.192 51.192-22.935 51.191-51.192 51.191z m204.766 0c-28.256 0-51.191-22.935-51.191-51.191s22.935-51.192 51.191-51.192 51.191 22.936 51.191 51.192-22.935 51.191-51.19 51.191z m204.949 0c-28.256 0-51.191-22.935-51.191-51.191s22.935-51.192 51.191-51.192c28.256 0 51.192 22.936 51.192 51.192s-23.12 51.191-51.192 51.191z" p-id="21579"></path>
                </svg>
            </div>
        `

        const style = document.createElement('style')
        style.textContent = `
            .wrapper {
                padding: 8px;
            }
            .content {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 100%;
                background-color: #fff;
                box-shadow: 0 0 8px rgba(0,0,0,0.2);
                cursor: pointer;
            }
            .content > svg {
                width: 18px;
                height: 18px;
                fill: #4a90e2;
            }
        `

        shadowRoot.appendChild(style)
        shadowRoot.appendChild(divEle)

        this.triggerJump = this.triggerJump.bind(this)
    }

    connectedCallback () {
        const wrapper = this.shadowRoot.querySelector('#wrapper')
        wrapper && wrapper.addEventListener('click', this.triggerJump)
    }

    disconnectedCallback () {
        const wrapper = this.shadowRoot.querySelector('#wrapper')
        wrapper && wrapper.removeEventListener('click', this.triggerJump)
    }

    triggerJump () {
        const [ loginid, userid ] = [
            this.getAttribute('loginid'), this.getAttribute('userid')
        ]
        open(`https://www.test-a.com?userId=${userid}&loginId=${loginid}`)
    }
}

// 移动端悬浮按钮
class PortalFloatActionButtonMobile extends HTMLElement {
    constructor () {
        super()

        const shadowRoot = this.attachShadow({ mode: 'open' })
        const divEle = document.createElement('div')
        divEle.setAttribute('id', 'wrapper')
        divEle.setAttribute('class', 'wrapper')
        divEle.innerHTML= `
            <svg t="1667901570010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21577" width="200" height="200">
                <path d="M511.908 955.75c-8.807 0-17.43-3.302-24.22-10.091L385.307 843.276c-13.394-13.394-13.394-34.861 0-48.255s34.861-13.395 48.256 0l78.346 78.346 78.347-78.346c6.422-6.422 15.045-10.092 24.22-10.092h238.893c18.898 0 34.127-15.229 34.127-34.128V204.76c0-18.715-15.229-34.128-34.127-34.128H170.816c-18.715 0-34.128 15.413-34.128 34.128V750.8c0 18.9 15.413 34.128 34.128 34.128h102.383c18.898 0 34.127 15.229 34.127 34.128s-15.229 34.127-34.127 34.127H170.816c-56.513 0-102.383-45.87-102.383-102.383V204.76c0-56.513 45.87-102.383 102.383-102.383h682.552c56.512 0 102.383 45.87 102.383 102.383V750.8c0 56.513-45.87 102.383-102.383 102.383H628.419l-92.291 92.475c-6.605 6.605-15.413 10.092-24.22 10.092z" p-id="21578"></path><path d="M324.206 511.908c-28.256 0-51.19-22.935-51.19-51.191s22.934-51.192 51.19-51.192 51.192 22.936 51.192 51.192-22.935 51.191-51.192 51.191z m204.766 0c-28.256 0-51.191-22.935-51.191-51.191s22.935-51.192 51.191-51.192 51.191 22.936 51.191 51.192-22.935 51.191-51.19 51.191z m204.949 0c-28.256 0-51.191-22.935-51.191-51.191s22.935-51.192 51.191-51.192c28.256 0 51.192 22.936 51.192 51.192s-23.12 51.191-51.192 51.191z" p-id="21579"></path>
            </svg>
            <span>测试</span>
        `

        const style = document.createElement('style')
        style.textContent = `
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            .wrapper > svg {
                width: 12px;
                height: 12px;
                margin-bottom: 4px;
            }
            .wrapper > span {
                font-size: 12px;
            }
        `

        shadowRoot.appendChild(style)
        shadowRoot.appendChild(divEle)

        this.triggerJump = this.triggerJump.bind(this)
    }

    connectedCallback () {
        const wrapper = this.shadowRoot.querySelector('#wrapper')
        wrapper && wrapper.addEventListener('click', this.triggerJump)
    }

    disconnectedCallback () {
        const wrapper = this.shadowRoot.querySelector('#wrapper')
        wrapper && wrapper.removeEventListener('click', this.triggerJump)
    }

    triggerJump () {
        const [ loginid, userid ] = [
            this.getAttribute('loginid'), this.getAttribute('userid')
        ]
        open(`https://www.test-b.com?userId=${userid}&loginId=${loginid}`)
    }
}

// 定义web-component：portal-float-action-button
customElements.define('portal-float-action-button', isMobile ? PortalFloatActionButtonMobile : PortalFloatActionButton)

let compDiv
window.GD.on('gd-route-change', params => {
    const { pathname } = params
    console.log('params', params)
    if (['/home', '/m/portal'].includes(pathname)) {
        if (compDiv) return
        compDiv = document.createElement('div');
        compDiv.className = 'pos-absolute scroll-hidden';
        compDiv.style.right = '0';
        compDiv.style.bottom = '80px';
        compDiv.style.zIndex = '999';
        compDiv.style.width = '48px';
        compDiv.style.height = '48px';

        // 创建portal-float-action-button元素
        const portalFloatActionButton = document.createElement('portal-float-action-button');
        const userInfo = window.GD.getUser()

        portalFloatActionButton.setAttribute('loginid', userInfo.loginId);
        portalFloatActionButton.setAttribute('userid', userInfo.uId);

        // 将portal-float-action-button元素添加到新的div元素中
        compDiv.appendChild(portalFloatActionButton);

        // 将新的div元素添加到body元素中
        document.getElementById('app').appendChild(compDiv);
    } else if (compDiv) {
        compDiv.remove()
        compDiv = null
    }
})
