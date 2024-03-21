import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import '../assets/anchor.css';

const Anchor = ({ href, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  const anchorClasses = classNames('anchor', {
    'active': isActive
  });

  return (
    <Link to={href} className={anchorClasses}>
      {children}
    </Link>
  );
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
