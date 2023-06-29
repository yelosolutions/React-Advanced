import React, { useState, useReducer} from 'react'
// list of people objects(local)
// import { data } from '../../../data'
import Modal from './Modal';
import { reducer } from './reducer'

/**
 * useReducer - allows change of state thro' dispatch of actions
 * 
 * 
 * modal - is a popup(notify on state change)
 * reducer - a function, pass in state and action, returns a state object
 * dispatch - used to dispatch actions, pass in action object(has type and payload)
 *  
 */


// The default state of this component
const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
};



const ReducerConcept = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newPerson = {id: new Date().getTime().toString(), name};
            dispatch({type:'ADD_ITEM', payload:newPerson});
            setName('');
        } else{
            dispatch({type:'NO_VALUE'});
        }
    };
    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'});
    };

    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
            <h4> The Reducer Concept</h4>
            <p>Basically how to use the useReducer hook</p>
            <div> 
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <div className="flex flex-row">
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='bg-emerald-200 rounded-md w-full p-1'
                                placeholder='Enter a name'
                            />
                        </div>
                        <button type='submit' className='btn'>
                            Add Person
                        </button>
                    </div>
                </form>
                <section>
                    {state.people.map((person) => {
                        return <article key={person.id} className="item">
                            <h4>{person.name}</h4>
                            <button 
                                type='button' 
                                onClick={() => {
                                    dispatch({type:'REMOVE_PERSON', payload:person.id})
                                    }
                                }>Remove</button>
                        </article>
                    })}
                </section>
                
            </div>
        </>
    );
};

export default ReducerConcept;