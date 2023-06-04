import React from 'react';
import '../Styles/navbar.css';
import fr from '../flags/fr.png';
import usr from '../img/usr.avif';

function navbar() {
  return (
    <div>

                 <nav className="navbar navbar-expand navbar-light bg-white topbar static-top px-4">

                    <div className="pageTitle">
<h5>Dashboard</h5>
                        </div>

                        <div className="bg-white rounded">

  
          <div className="input-group border rounded-pill p-1 searchBar" >
    <div className="input-group-prepend border-0">
      <button id="button-addon4" type="button" className="btn btn-link text-info"><i className="fa fa-search"></i></button>
    </div>
    <input type="search" placeholder="Search here..." aria-describedby="button-addon4" className="form-control bg-none border-0"/>
  </div>

</div>

                    <ul className="navbar-nav d-flex align-items-center">

                        

                        <li className="nav-item dropdown no-arrow mx-5">
 <div className="slc_flag"><img className="flg-img" src={`${fr}`}/>
            <span className="mr-2">Eng (US)</span>
            <i className="fa fa-chevron-down"></i>
             </div>
                        </li>


                        <li className="nav-item no-arrow mx-1 notification-ui">
                        <a className="nav-link dropdown-toggle notification-ui_icon" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather icon-bell"></i>
                            <span className="unread-notification"></span>
                        </a>
                        </li>




                        <li className="nav-item dropdown no-arrow ">
                            <div className="usr d-flex align-items-baseline mx-3">
                       <span> <img className="usr_img mt-3" src={`${usr}`}/></span>
                            <a className="nav-link mx-2" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{lineHeight: "5px"}}>
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                <h6>Musliq</h6>
    <p>Admin</p>
                                </span>
                            </a>
                            <i className="fa fa-chevron-down"></i>
                            </div>
                        </li>

                    </ul>

                </nav> 


    </div>
  )
}

export default navbar