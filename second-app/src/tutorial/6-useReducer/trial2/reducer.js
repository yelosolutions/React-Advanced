export const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        return ({...state,
            people: [...state.people, action.payload],
            isModalOpen: true,
            modalContent: 'Person Added'
        });
    }
    if(action.type === 'CLOSE_MODAL'){
        return ({
            ...state,
            isModalOpen: false,
        });
    }
    if(action.type === 'NO_VALUE'){
        return ({
            ...state,
            isModalOpen: true,
            modalContent: 'Add something bana'
        })
    }
    if(action.type === 'REMOVE_PERSON'){
        const newList = state.people.filter(
            (person) => person.id !== action.payload)
        return ({
            ...state,
            people: newList
        })
    };
};