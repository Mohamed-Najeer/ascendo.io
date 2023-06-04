import '../Styles/visitorInsight.css';
import '../Styles/totalRevenue.css';
import '../Styles/topProducts.css';

function TopProducts() {
  return (


<div className="row flex-grow">
<div className="col-12 grid-margin stretch-card">
  <div className="card card-rounded">
    <div className="card-body">
      <div className="row p-2">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="card-title card-title-dash">Top Products</h5>
          </div>
          
          <table className="table">
  <tbody>
    <tr>
      <td >#</td>
      <td >Name</td>
      <td >Popularity</td>
      <td >Sales</td>
    </tr>
  
    <tr>
      <td >01</td>
      <td>Home Decor Range</td>
      <td style={{verticalAlign:"middle"}}><div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: "45%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div></td>
      <td><span className="td-perc p1">45%</span></td>
    </tr>
    <tr>
      <td >02</td>
      <td>Disney Princess Pink Bag 18</td>
      <td style={{verticalAlign:"middle"}}><div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: "29%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div></td>
      <td><span className="td-perc p2">29%</span></td>
    </tr>
    <tr>
      <td >03</td>
      <td>Bathroom Essentials</td>
      <td style={{verticalAlign:"middle"}}><div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: "18%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div></td>
      <td><span className="td-perc p3">18%</span></td>
    </tr>
    <tr>
      <td >04</td>
      <td>Apple Smartwatches</td>
      <td style={{verticalAlign:"middle"}}><div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: "25%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div></td>
      <td><span className="td-perc p4">25%</span></td>
    </tr>
    
  </tbody>
</table>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default TopProducts;