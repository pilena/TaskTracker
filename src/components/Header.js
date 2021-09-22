// * import React from 'react'
// u ranijim verzijama je bilo obavezno importovati 'react', vise nije

import PropTypes from 'prop-types'
import { useLocation  } from 'react-router-dom';
import Button from './Button'
import Task from './Tasks';

const Header = ({ title, onAdd, showAdd }) => {
    const Location = useLocation() 
    return (
        <header className='header'>
            <h1>
               {title}
            </h1>
        {Location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
