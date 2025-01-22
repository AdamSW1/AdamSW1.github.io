import './nav.css';
import { useNavigate } from 'react-router-dom';

export function Nav() {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    if (e.target.tagName.toLowerCase() === 'a') {
        navigate(path);
    }
  };
  return (
    <>
      <nav>
        <ul>
          <li onClick={(e)=>{handleClick(e,"/")}}>
            Home
          </li>
          <li>
            Projects
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
