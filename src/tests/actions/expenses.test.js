import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

// test('should setup add expense action object with defaults', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

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