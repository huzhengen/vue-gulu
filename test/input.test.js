const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1221'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1221')
            vm.$destroy()
        })

        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        })

        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'wrong'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('wrong')
        })
    })

    describe('event', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('支持 change 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('change', callback)
                // 触发input的change事件
            const event = new Event('change')
            const inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 input 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('input', callback)
            const event = new Event('input')
            const inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 focus 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('focus', callback)
            const event = new Event('focus')
            const inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 blur 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('blur', callback)
            const event = new Event('blur')
            const inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
    })
})