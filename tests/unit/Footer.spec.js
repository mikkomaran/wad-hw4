import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";
import sinon from 'sinon'

describe("Footer component", ()=> {

    it('Click on + button changes "open" property to true', () => {
        const spy = sinon.spy();
        const wrapper = mount(Footer, {
            propsData: {
                callMe: spy
            }
        });
        const plusButton = wrapper.find('#plusButton');

        plusButton.trigger('click');
        expect(wrapper.find('#plusButton').exists()).toBe(true);
    })
});

