import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

//remove if id found
test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

//dont remove if id not found
test('should not remove expense if id not found',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

//add expense
test('should add an expense',()=>{
    const expense = {
        id:'109',
        description: 'Laptop',
        note: undefined,
        createdAt: 200000,
        amount: 295000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

//edit if id found
test('should edit an expense',()=>{
    const amount = 200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe( amount);
});

//dont edit if id not found
test('should not edit an expense if id not found',()=>{
    const amount = 200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-9',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should et expenses', ()=>{
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});