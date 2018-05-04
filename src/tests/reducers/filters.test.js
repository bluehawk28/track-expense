import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test("should setups default filter values",() => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

//Sort by Amount
test('should set sortby to amount',()=>{
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

//Sort by date
test('should set sortby to date',()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//Text Filter
test('should set text filter',() => {
    const text = 'something';
    const action ={
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text);
});

//should set start date
test('should set start date filter',() => {
    const startDate = moment();
    const action ={
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

//should set end date
test('should set end date filter',() => {
    const endDate = moment();
    const action ={
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
});