import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Nav } from './Navigation.styled';
import icon from '../../pages/Home/book.png';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <Nav>
      <Link
        isActive={location.pathname === '/' ? 'active' : 'inactive'}
        to="/"
        end
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          isActive={
            location.pathname.startsWith('/contacts') ? 'active' : 'inactive'
          }
          to="/contacts"
        >
          <div style={{display: 'flex', gap: '5px'}}>
            <span>Your contacts</span>
            <img src={icon} alt="book" width={30} />
          </div>
        </Link>
      )}
    </Nav>
  );
};
