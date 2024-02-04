import React from 'react';
import { Header } from "./Header";
import { shallow } from 'enzyme';

describe('Header', () => {
    it('renders without crashing', () => {
        const headerComponent = shallow(<Header />);
        expect(headerComponent).toBeDefined();
    });

    it ('renders h1 elementt', () => {
        const headerComponent = shallow(<Header />);
        expect(headerComponent.find('h1').length).toBe(1);
    });

    it('renders img element', () => {
        const headerComponent = shallow(<Header />);
        expect(headerComponent.find('img').length).toBe(1);
    });
})
