import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('List component', () => {

    it('displays correct message when no items are in list', () => {
        const emptyList = [];
        const wrapper = mount(List, {
            propsData: {
                list: emptyList
            }
        });
        const items = wrapper.findAll('.list-item');
        const message = "Add your first Todo task";
        if(items.length === emptyList.length)
            expect(wrapper.html()).toContain(message)
    });

    it('todo task is updated to done when clicking done button', () => {
        const madeupList = [{
            index: 0,
            title: "Make your bed",
            done: 0
        }];
        const wrapper = mount(List, {
            propsData: {
                list: madeupList
            }
        });
        wrapper.find('div.list-item span').trigger('click');
        const items = wrapper.findAll('.list-item.done');
        expect(wrapper.props('list')[0]['done']).toBe(true);
    });
});