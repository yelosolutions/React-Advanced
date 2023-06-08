/** reducer 
 * - takes in old 'state' and 'action' and spits back new state
 * - maniplates state when dispatch is called(dispatch an action)
 * - SHOULD ALWAYS RETURN A STATE     
*/
export const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload];

    if(action.type === 'ADD_ITEM'){
        return {...state, people: newPeople, isModalOpen: true, modalContent: 'Item added'};
    }
    if(action.type === 'NO_VALUE'){
        return {...state, isModalOpen: true, modalContent: 'Please enter something'};
    }
    if(action.type === 'REMOVE_ITEM'){
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return {...state, people: newPeople};
    }
    throw new Error('action type does not match');
};