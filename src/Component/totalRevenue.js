import '../Styles/visitorInsight.css';
import BarChart from './barchart';
import '../Styles/totalRevenue.css';

function TotalRevenue() {
  return (


<div className="row flex-grow">
<div className="col-12 grid-margin stretch-card">
  <div className="card card-rounded">
    <div className="card-body">
      <div className="row p-2">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="card-title card-title-dash">Type By Amount</h5>
          </div>
          {/* <canvas className="my-auto" id="doughnutChart" height="200"></canvas>
          <div id="doughnut-chart-legend" className="mt-5 text-center"></div> */}

          <BarChart/>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default TotalRevenue;