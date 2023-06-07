import React, { useState, useReducer } from 'react'
import Modal  from './Modal';
//import {reducer} from './reducer'

const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload];
    if(action.type === 'ADD_PERSON'){
        return {
            people: newPeople,
            showModal: true,
            modalContent: 'Item Added'
        }
    } else {
        return {
            people: [],
            showModal:true,
            modalContent: 'Add something mate'
        };
    }
};

const defaultState = {
    people: [],
    showModal: false,
    modalContent: ''
};

const Index = () => {
    const [name, setName] = useState('');

    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name);
        if ( name ){
            const newPerson = {id: new Date().getTime().toString(), name};
            dispatch({type:'ADD_PERSON', payload: newPerson});
            setName('');
        } else {
            dispatch({type: 'NO_ITEM'}) ;
        }
    };
    


    return (<>
        <div>
            {state.showModal && <Modal modalContent={state.modalContent}/>}
            
            <form 
                className='form' 
                action=""
                onSubmit={handleSubmit}
            >
                <div className='grid grid-cols-2 gap-5 items-center'>
                    <input 
                        className='h-8 bg-slate-200 rounded-md p-1' 
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    <button className='text-white rounded-md bg-cyan-600'>Add Person</button>
                </div>
            </form>
            {state.people.map((person) => {
                return <div key={person.id} className='item'>
                    <h3>{person.name}</h3>
                </div>
            })}
            
        </div>
    </>
    )
}

export default Index