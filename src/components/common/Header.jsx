import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-kannur.webp";
import MenuIcon from "../../assets/img/menu-icon.svg";
import SignoutIcon from "../../assets/img/signout.png"
import React from 'react';
import fire from '../../config/Fire';

import { useEffect } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [temp, setTemp] = useState();
  //const [currentUID, setCurrentUID] = useState(fire.auth().currentUser.uid);

  const handleClick = (e) => {
    e.stopPropagation();

    setIsActive(!isActive);
  };

  const logout = () => {
    fire.auth().signOut();
  }

  useEffect(() => {
    window.onresize = function (e) {
      setTemp(window.innerWidth);
    };
  }, []);

  useEffect(() => {}, []);
  var currentUser = fire.auth().currentUser;
  var name = currentUser.displayName;
  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {temp < 540 ? (
            <div
              className="right-nav"
              onClick={(e) => {
                e.stopPropagation();
                setIsActive(false);
              }}
              style={{ display: "flex" }}
            >
              {isActive && (
                <>
                  <Link to="/">HOME</Link>
                  <Link to="/favourites">FAVOURITES</Link>
                </>
              )}
            </div>
          ) : (
            <div className="right-nav" style={{}}>
              <Link to="/">HOME</Link>
              <Link to="/favourites">FAVOURITES</Link>
            </div>
          )}
          <div className="mb-menu">
            {isActive ? (
              <div
                onClick={() => setIsActive(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </div>
            ) : (
              <img src={MenuIcon} alt="menu" onClick={(e) => handleClick(e)} />
            )}
            <ul></ul>
          </div>
          <div className="trackerBlock">
                <div className="welcome">
                  {(currentUser.displayName != null) ?
                    <span>Hi, {currentUser.displayName}</span>
                    : <span> {currentUser.email} </span> }
                    <img className="logout" onClick={logout} src={SignoutIcon}/>
                </div>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
