import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';


test('should render expense item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} key={expenses[1].id}/>);
    expect(wrapper).toMatchSnapshot();
})