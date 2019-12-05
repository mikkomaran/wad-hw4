import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('List component', () => {

    const testData = [];
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    });

    it('displays correct message when no items are in list', () => {
        const items = wrapper.findAll('.list-item');
        const message = "Add your first Todo task";
        if(items.length === (testData.length))
            expect(wrapper.html()).toContain(message)
    });

});