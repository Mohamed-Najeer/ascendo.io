import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/menu.css';





function Menu() {
    const [strtlink,setLinkcount] = useState(0);

    const navigate = useNavigate();

    const navClick=(count,link)=>{
        setLinkcount(count)
        navigate(link);
    // var val = event.target.value;
    }

  return (
    <div>
                 <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center" href="#">
     <div className="sidebar-brand-icon rotate-n-15">
        <i className="feather icon-disc"></i>
    </div> 
    <div className="sidebar-brand-text mx-3">Dabang</div>
</a>


<li className={`nav-item ${strtlink === 0 ? "active" : ""}`} onClick={() => navClick(0,'/')}>
    <a className="nav-link" href="#">
        <i className="feather icon-pie-chart"></i>
        <span>Dashboard</span></a>
</li>

<li className={`nav-item ${strtlink === 1 ? "active" : ""}`} onClick={() => navClick(1,'leaderboard')}>
    <a className="nav-link" href="#">
        <i className="feather icon-bar-chart"></i>
        <span>Leaderboard</span></a>
</li>

<li className={`nav-item ${strtlink === 2 ? "active" : ""}`} onClick={() => navClick(2,'store')}>
    <a className="nav-link" href="#">
        <i className="feather icon-basket-loaded"></i>
        <span>Order</span></a>
</li>

<li className={`nav-item ${strtlink === 3 ? "active" : ""}`} onClick={() => navClick(3,'products')}>
    <a className="nav-link" href="#">
        <i className="feather icon-bag"></i>
        <span>Products</span></a>
</li>

<li className={`nav-item ${strtlink === 4 ? "active" : ""}`} onClick={() => navClick(4,'salesreport')}>
    <a className="nav-link" href="#">
        <i className="feather icon-graph"></i>
        <span>Sales Report</span></a>
</li>

<li className={`nav-item ${strtlink === 5 ? "active" : ""}`} onClick={() => navClick(5,'messages')}>
    <a className="nav-link" href="#">
        <i className="feather icon-speech"></i>
        <span>Messages</span></a>
</li>

<li className={`nav-item ${strtlink === 6 ? "active" : ""}`} onClick={() => navClick(6,'settings')}>
    <a className="nav-link" href="#">
        <i className="feather icon-settings"></i>
        <span>Settings</span></a>
</li>

<li className={`nav-item ${strtlink === 7 ? "active" : ""}`} onClick={() => navClick(7,'signout')}>
    <a className="nav-link" href="#">
        <i className="feather icon-logout"></i>
        <span>Sign Out</span></a>
</li>

<li className="nav-item mt-5 mt-lg-0">
    <a className="nav-link" href="#">
        <div className="about pt-3 pb-2 mb-2">
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="feather icon-disc"></i>
    </div>
    <h5>Dabang Pro</h5>
    <p className="mt-3 text-justify">Get access to all features on tebumbas</p>
    <button className="btn btn-sm abt-btn">Get Pro</button>
        </div>
        </a>
</li>

</ul> 



</div>
  )
}

export default Menu;