const selectExpensesTotal = (expenses) => {
    if(expenses.length === 0) {
        return 0;
    } else {
        return expenses.reduce((acc, cur) => {
            return acc + cur.amount;
        }, 0);
    }
};

export default selectExpensesTotal;