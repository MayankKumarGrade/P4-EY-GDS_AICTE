import PropTypes from 'prop-types';
import { assets } from '../assets/assets';

const NavBar = ({ setToken }) => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%] bg-gray-100'>
      <img
        className='w-[max(10%,80px)]'
        src={assets.logo}
        alt='Logo'
      />
      <button
        onClick={() => setToken('')}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm'
      >
        Logout
      </button>
    </div>
  );
};

// Prop Validation
NavBar.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default NavBar;
