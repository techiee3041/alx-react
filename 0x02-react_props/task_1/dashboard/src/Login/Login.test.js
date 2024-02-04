import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme'

describe('logn', () => {
    it('renders without crashing', () => {
        const loginComponent = shallow(<Login />);
        expect(loginComponent).toBeDefined();
    });
    
    it('renders 2 input elements', () => {
        const loginComponent = shallow(<Login />);
        expect(loginComponent.find('input').length).toBe(2);
    });

    it('renders 2 label tags', () => {
        const loginComponent = shallow(<Login />);
        expect(loginComponent.find('label').length).toBe(2);
    });
});