import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaHome, FaGlassMartini, FaCalendarAlt, FaPhoneSquareAlt } from 'react-icons/fa'

const links = [
  {
    id: 1,
    path: `/`,
    icon: <FaHome size="50px" />,
    ariaLabel: "Home Page",
  },
  {
    id: 2,
    path: `/drinks`,
    icon: <FaGlassMartini size="50px" />,
    ariaLabel: "Drinks Page",
  },
  {
    id: 3,
    path: `/events`,
    icon: <FaCalendarAlt size="50px" />,
    ariaLabel: "Events Page",
  },
  {
    id: 4,
    path: `/contact`,
    icon: <FaPhoneSquareAlt size="50px" />,
    ariaLabel: "Contact Page",
  },
]

const activeStyles = {
  backgroundColor: 'lightblue',
  color: 'white'
}

const Navbar = () => {
  return (
    <Wrap>
      <div className="btnBox">
        <button className="close">menu</button>
        <button className="open">close</button>
      </div>
      <nav>
        <ul>
          {links.map(item => (
            <li key={item.id}>
              <Link to={item.path} ariaLabel={item.ariaLabel} activeStyle={activeStyles}>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 17.5vw;
  height: 100vh;
  padding 0;

  nav {
    width: 0%;
    height: 100%;
    background: rbga(0,0,0,1);
  }
  .btnBox {
    width: 0%;
    height: 50px;
    background: rgba(0,0,0,1);
    margin: 0 auto;
  }
  ul {
    height: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  li { margin-top: -50px; }
  a {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid white;
    transition: 300ms ease border;
  }
  a:hover {
    color: lightskyblue;
    border-bottom: 2px solid white;
  }
  button {
    font-size: 2.25rem;
    color: white;
    background: transparent;
    z-index: 4;
    border: none;
    padding: 5px 10px;
  }
`

export default Navbar