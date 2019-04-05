import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correcly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2300} />);
    expect(wrapper).toMatchSnapshot();
})

test('should correcly render ExpensesSummary with mulitple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={234530} />);
    expect(wrapper).toMatchSnapshot();
})