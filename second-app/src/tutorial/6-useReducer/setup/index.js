import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

import { reducer } from './reducer';

//index.js will always be the main entry if no file is specified in App.js
/** useReducer 
 * - [state, dispatch] = useReducer(reducer, defaultState) 
 * - it is common practice to use dispatch
 * - on using useReducer, we get two things: state value and dispatch function
 * - first pass 'reducer' function in useReducer and then the 'defaultState' object
 * - difference btwn useState and useReducer, in the latter in order to do something
 *  with whole state, always use dispatch which goes through the reducer  
 */

/**dispatch
 * 
 */



const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = {id: new Date().getTime().toString, name};

      /**dispatching an action which has type property with ADD_ITEM as value
       * to add item to the people array, add another property - payload
      */ 
      dispatch({type:'ADD_ITEM', payload:newPerson});
      setName('');
    } else {
      dispatch({type:'NO_VALUE'});
    }
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL' });
  } 

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form className='form' action="" onSubmit={handleSubmit}>
        <div className='form-control'>
          <input 
            className='input-style'  
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button 
            type='submit' 
            className='bg-slate-800 text-white text-lg rounded-md p-1' 
          >
            Add
          </button>
        </div>
        
      </form>
      {state.people.map((person) => {
        return (
        <div 
          key={person.id} 
          className='item'
        >  
          <h3>{person.name}</h3>
          <button 
            className='right-0 bg-transparent p-1 text-md text-green-700' 
            type='button'
            onClick={() => 
              dispatch({type: 'REMOVE_ITEM', payload: person.id})
            }
          >
            Remove
          </button>
        </div>
        );
      })}
    </>
  );
};

export default Index