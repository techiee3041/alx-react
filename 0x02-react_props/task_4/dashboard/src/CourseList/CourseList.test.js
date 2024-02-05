import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toBeDefined();
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    
    expect(wrapper.find(CourseListRow).at(0).props()).toEqual({
      textFirstCell: 'Available courses',
      isHeader: true
    });
    
    expect(wrapper.find(CourseListRow).at(1).props()).toEqual({
      textFirstCell: 'Course name',
      textSecondCell: 'Credit',
      isHeader: true
    });
    
    expect(wrapper.find(CourseListRow).at(2).props()).toEqual({
      textFirstCell: 'ES6',
      textSecondCell: '60',
      isHeader: false
    });
    
    expect(wrapper.find(CourseListRow).at(3).props()).toEqual({
      textFirstCell: 'Webpack',
      textSecondCell: '20',
      isHeader: false
    });
    
    expect(wrapper.find(CourseListRow).at(4).props()).toEqual({
      textFirstCell: 'React',
      textSecondCell: '40',
      isHeader: false
    });
  });
});