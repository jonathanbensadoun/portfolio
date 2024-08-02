import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeTextEncode,
  changeTextEncodeEN,
  changeTheme,
} from '../../../store/slices/projectSlice';

/**
 * Button light mode component
 * @returns {JSX.Element}
 */
export default function ButtonLightMode() {
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const handleClick = () => {
    dispatch(
      changeTextEncodeEN(isLightMode ? 'Dark Mode 😎' : 'Light Mode 😇')
    );
    dispatch(changeTextEncode(isLightMode ? 'Dark Mode 😎' : 'Light Mode 😇'));
    dispatch(changeTheme());
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };
  return (
    <div
      className={`text-1xl p-1 rounded bg-opacity-75 ${
        isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
      }`}
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      {isLightMode ? <IoSunnyOutline /> : <IoMoonOutline />}
    </div>
  );
}
