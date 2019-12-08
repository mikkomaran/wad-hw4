import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe("Footer component", ()=> {
    const wrapper = mount(Footer, {
        propsData: {
            open: false
        }
    });

    it('Click on + button changes "open" property to true', () => {
        const plusButton = wrapper.find('#plusButton');
        plusButton.trigger('click');
        expect(wrapper.vm.$data.open).toBe(true);

    })
});

