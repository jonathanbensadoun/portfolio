import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../../store/slices/projectSlice';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../../store/slices/projectSlice';

/**
 * Button light mode component
 * @returns {JSX.Element}
 */
export default function ButtonLightMode() {
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);

  return (
    <div
      className={` text-1xl p-1  rounded bg-opacity-75 ${
        isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
      }`}
      onClick={() => {
        dispatch(
          changeTextEncodeEN(isLightMode ? 'Dark Mode 😎' : 'Light Mode 😇')
        );
        dispatch(
          changeTextEncode(isLightMode ? 'Dark Mode 😎' : 'Light Mode 😇')
        );
        dispatch(changeTheme());
      }}
    >
      {isLightMode ? <IoSunnyOutline /> : <IoMoonOutline />}
    </div>
  );
}
