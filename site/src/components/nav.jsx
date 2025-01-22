import './nav.css';
import { useNavigate, useLocation } from 'react-router-dom';

export function Nav() {
  const navigate = useNavigate();
    const location = useLocation();

    // Define pages with their routes and translations
    const pages = {
        EN: [
            { name: 'Home', path: '/robotics-testing' },  
            { name: 'Projects', path: '/robotics-testing/projects' },  
            { name: 'Contact', path: '/robotics-testing/contact' }     
        ]
    };

    // Find active index based on current path
    const activeIndex = pages["EN"].findIndex(
        page => page.path === location.pathname
    );

    const handleClick = (e, path) => {
        navigate(path);
    };

    return (
        <nav>
            <ul>
                {pages["EN"].map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={(e) => handleClick(e, item.path)}
                    >
                        <a>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
