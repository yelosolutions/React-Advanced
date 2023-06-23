//rafcp - created a boilerplace with the PropTypes structure.

import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
    return (
        <div>testing</div>
    )
}


testing.propTypes = {
    //shortcut for setting the props - pt-a(for array types in this case)-r(Requred) => ptar
    example: PropTypes.array.isRequired
}

export default testing