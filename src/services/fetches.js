import React from 'react'
import PropTypes from 'prop-types'

const actions = [

]

const buildParams = (params) => {

}

function usefetch({ action, ...props }) {
    switch (action) {
        case 'login':

            break;
        case 'logout':

            break;
        case 'getTemplate':

            break;
        case 'getGame':

            break;
        default:
            break;
    }
}

usefetch.propTypes = {
    action: PropTypes.oneOf(actions).isRequired
}

export default usefetch

