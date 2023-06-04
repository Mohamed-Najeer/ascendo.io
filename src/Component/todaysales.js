import '../Styles/todaysales.css';

function Todaysales() {
  return (



<div className="row flex-grow">
<div className="col-12 grid-margin stretch-card">
  <div className="card card-rounded">
    <div className="card-body  ">
      <div className="d-sm-flex mb-4 justify-content-between align-items-start">
        <div>
          <h5 className="card-title card-title-dash">Today's Sales</h5>
         <p className="card-subtitle card-subtitle-dash">Sales Summary</p>
        </div>
        <div>
          <div className="btn-wrapper">
            <button className="btn btn-otline-dark me-0"><i className="feather icon-cloud-upload"></i> Export</button>
          </div>
        </div>
      </div>

<div className="row ts">
    <div className="col-lg-3">
    <div className="card1 mb-2 mb-0" href="#">
        <div className="about">
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fa fa-bar-chart"></i>
    </div>
    <h5 className="mt-3">$1k</h5>
    <span className="text-justify">Total Sales</span><br/>
    <span className="perc">+8% from yesterday</span>
        </div>
        </div>
    </div>
    <div className="col-lg-3">
    <div className="card2 mb-2 mb-0" href="#">
        <div className="about">
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fa fa-file"></i>
    </div>
    <h5 className="mt-3">300</h5>
    <span className="text-justify">Total Order</span><br/>
    <span className="perc">+5% from yesterday</span>
        </div>
        </div>
    </div>
    <div className="col-lg-3">
    <div className="card3 mb-2 mb-0" href="#">
        <div className="about">
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fa fa-tag" style={{transform:"rotate(89deg)"}}></i>
    </div>
    <h5 className="mt-3">5</h5>
    <span className="text-justify">Product Sold</span><br/>
    <span className="perc">+12% from yesterday</span>
        </div>
        </div>
    </div>
    <div className="col-lg-3">
    <div className="card4 mb-2 mb-0" href="#">
        <div className="about">
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fa fa-user-plus"></i>
    </div>
    <h5 className="mt-3">8</h5>
    <span className="text-justify">New Customers</span><br/>
    <span className="perc">0.5% from yesterday</span>
    
        </div>
        </div>
    </div>


</div>

      <div className="d-sm-flex align-items-center mt-1 justify-content-between">
     

        

        

       
      </div>
      
    </div>
  </div>
</div>
</div>

  )
}

export default Todaysales;