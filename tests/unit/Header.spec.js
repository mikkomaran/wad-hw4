import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header";

describe("Header component", ()=> {

    const wrapper = mount(Header);
    let today = new Date();

    it('displays correct date', () => {
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    });

    it("displays correct year", ()=>{
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year)
    });

    it("displays correct month", ()=>{
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        let month = monthNames[today.getMonth()];
        expect(wrapper.html()).toContain(month)
    });

    it("displays correct weekday", ()=>{
        const weekdays = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
        let weekday = weekdays[today.getDay()];
        expect(wrapper.html()).toContain(weekday)
    });

});
