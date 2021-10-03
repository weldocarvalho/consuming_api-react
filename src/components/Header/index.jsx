import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Navbar } from './styled';

export default function Header() {
  return (
    <Navbar>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/signin">
        <FaUserAlt size={24} />
      </Link>

      <Link to="/register">
        <FaSignInAlt size={24} />
      </Link>
    </Navbar>
  );
}
