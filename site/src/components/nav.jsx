import './nav.css';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Nav() {
//   const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    // Scroll to the element when the component mounts or the hash changes
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    // Define pages with their routes and translations
    const pages = {
        EN: [
            // { name: 'Home', path: '#' },
            { name: 'Projects', path: '#featuredSection' },
            { name: 'Contact', path: '#contactSection' }
        ]
    };

    // Find active index based on current path
    const activeIndex = pages["EN"].findIndex(
        page => page.path === location.pathname
    );

    // const handleClick = (e, path) => {
    //     navigate(path);
    // };

    return (
        <nav>
            <ul>
                {pages["EN"].map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                        // onClick={(e) => handleClick(e, item.path)}
                    >
                        <Link to={item.path} >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
