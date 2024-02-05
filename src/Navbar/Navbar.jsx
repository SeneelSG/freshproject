import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'


import './Navbar.css';
import UserInfo from '../UserInfo/UserInfo';

const Navbar = () => {

  


  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleTimeString(undefined, options);
  };


  return (
    <div className='main'>
      <div className='div1'><img src="image/LIT.jpg" alt="logo" className="img" /></div>
      <div className='main1'>
        <div className='div2'><h3>Welcome to L-IT TRULY SERVICES PVT LTD</h3></div>
        <div className='div3'>


          <nav className="navbar">
            <li className="nav-list">
              <li className="nav-item">HR Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                  <li className="sub-item-1">Vender Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />

                    <li className="nested-dropdown1">
                      <li className="sub-item1"><Link to={"/home/venderRegistration"}>Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/venderSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/venderManagement"}>Management</Link></li>
                    </li>

                  </li>


                  <li className="sub-item-2">Client Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />

                    <li className="nested-dropdown2">
                      <li className="sub-item1"><Link to={"/home/clientRegistration"}>Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/clientSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/clientMangement"}>Management</Link></li>
                    </li>
                  </li>


                  <li className="sub-item-3">Internship Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                    <li className="nested-dropdown3">
                    <li className="sub-item1"><Link to={"/home/InternshipRegistration"}>Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/InternshipSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/InternshipMangement"}>Management</Link></li>
                    </li>
                  </li>
                </li>
              </li>
              <li className="nav-item">Employee Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                <li className="sub-item1"><Link to={"/home/employeeRegistration"}>Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/employeeSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/employeeMangement"}>Management</Link></li>
                </li>
              </li>
              <li className="nav-item">Finance Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                <li className="sub-item1"><Link to={"/home/financeRegistration"}>Invoice Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/financeSearch"}>Invoice Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/financeMangement"}>Invoice Management</Link></li>
                </li>
              </li>

              <li className="nav-item">CO-W Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                <li className="sub-item1"><Link to={"/home/clientRegistration"}>Registration</Link></li>
                      <li className="sub-item2"><Link to={"/home/clientSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/clientMangement"}>Management</Link></li>
                </li>
              </li>




              <li className="nav-item">IT Recruitment Lap <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                  <li className="sub-item1"><a href="#">Registration</a></li>
                  <li className="sub-item2"><a href="#">Search</a></li>
                  <li className="sub-item3"><a href="#">Management</a></li>
                </li>
              </li>


              <li className="nav-item">Requirement <FontAwesomeIcon icon={faCaretDown} className='fontsize' />
                <li className="dropdown">
                <li className="sub-item1"><Link to={"/home/addRequirement"}>Add Requirement</Link></li>
                      <li className="sub-item2"><Link to={"/home/requirementSearch"}>Search</Link></li>
                      <li className="sub-item3"><Link to={"/home/requirementMangement"}>Management</Link></li>
                </li>
              </li>


            </li>
          </nav>

        </div>
      </div>
      <div className='div4'>

        
          
             <UserInfo/>
        

      </div>
    </div>
  );
};

export default Navbar;