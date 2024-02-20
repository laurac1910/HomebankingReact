import React from 'react'
import PropTypes from 'prop-types'
import '../assets/anchor.css';
import { Link  } from 'react-router-dom';

const Anchor = (props) => {
  
  return (
    
      <Link to={props.href} className='anchor' >{props.children}</Link>
    
  )
}
Anchor.prototypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.any,
 
}
export default Anchor
