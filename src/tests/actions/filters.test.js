import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

//passed text filter
test('should generate passed text filter action object',()=>{
    const text = "something";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

//default text filter
test('should generate default text filter action object',()=>{
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

//set start date filter
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});

//set end date filter
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
});

//sort by amount filter 
test('should generate sort by amount action object',() => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
});

//sort by date filter
test('should generate sort by date action object',() => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
});