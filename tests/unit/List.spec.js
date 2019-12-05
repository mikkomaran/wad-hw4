import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('List component', () => {

    const emptyList = [];
    const wrapper = mount(List, {
        propsData: {
            list: emptyList
        }
    });

    it('displays correct message when no items are in list', () => {
        const items = wrapper.findAll('.list-item');
        const message = "Add your first Todo task";
        if(items.length === emptyList.length)
            expect(wrapper.html()).toContain(message)
    });

});