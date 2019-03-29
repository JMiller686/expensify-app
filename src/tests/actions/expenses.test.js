import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove expense', () => {
    const action = removeExpense({id: '2345234fgeww45g'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '2345234fgeww45g'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('2345234fgeww45g', {description: 'cable', amount: '500'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '2345234fgeww45g',
        updates: {
            description: 'cable', 
            amount: '500'
        }
    })
})