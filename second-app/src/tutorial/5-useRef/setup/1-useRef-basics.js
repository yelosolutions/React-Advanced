import React, {useEffect, useRef}from 'react'

/**useRef hook -import as named import like other hooks
 * - preserve values - just like useState
 * - does not trigger re-render 
 * - targets DOM nodes/elements
 * Uses
 * 
*/
const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);  //will point to the <input> element 
        //console.log(divContainer.current);
    };


    useEffect(() => {
        console.log(refContainer.current);

        // can be used to focus on element after re-render
        refContainer.current.focus();

    }); //no need to worry about dependency array here, useRef doesn't re-render 

    /**input 
     * - add a 'ref attribute' and set its value to  'refContainer'
     * - no onChange attribute - doesn't call onChange each time 
     * something is typed in input  
    */
    return (
        <article>
        <form className='form' action="" onSubmit={handleSubmit}>
            <div>
                <input 
                    className='flex w-full bg-slate-200 p-1 rounded-md' 
                    type="text"
                    ref={refContainer}
                />
                <button 
                    type='submit' 
                    className='btn'
                > 
                Submit
                </button>
            </div>
        </form>
        <div ref={divContainer}> Hello World</div>
        </article>
    );
};

export default UseRefBasics