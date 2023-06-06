import React, {useEffect, useRef} from 'react'

/** useRef hook
 * - does not trigger re-render
 * - used to manipulate DOM elements
 * - 
 */

const TryUseRef = () => {
    const refContainer = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    //console.log(refContainer.current);

    useEffect(()=>{
        //can be used to focus after re-render
        refContainer.current.focus();
    }); //no need for a dependency array, doesn't re-render 

    
    return (
        <article>
            <form className='form' action="" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input 
                        className='input-style' 
                        type="text"
                        ref={refContainer}
                    />
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </article>
    )
}

export default TryUseRef