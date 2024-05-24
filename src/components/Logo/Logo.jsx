import React from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import scrollUtils from '../../utils/scrollUtils';
import {
  showreaload,
  changePage,
  changeShowButtonUrl,
} from '../../store/slices/projectSlice';

/**
 * Logo component
 * @returns {JSX.Element} Logo component
 
 */
export default function Logo() {
  const dispatch = useDispatch();
  return (
    <NavLink
      to="/"
      onClick={() => {
        dispatch(showreaload(true));
        dispatch(changeShowButtonUrl(''));
        dispatch(changePage('home'));
        scrollUtils.scrollToTop();
      }}
    >
      <div className="flex">
        <p className="text-5xl font-bold mr-2 animate-slide-down text-black-shadow">
          B
        </p>

        <p className="text-5xl font-bold ml-6 mt-3 animate-slide-up absolute logo-j text-black-shadow">
          J
        </p>
      </div>
    </NavLink>
  );
}
