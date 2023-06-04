import React from 'react';
import Todaysales from '../Component/todaysales';
import Visitorinsight from '../Component/visitorInsight';
import TotalRevenue from '../Component/totalRevenue';
import CustomerSatisfication from './customerSatisfication';
import VolumevsService from './volumevsservicelevel';
import TargetvsReality from './targetvsreality';
import SalesMapping from './salesMapping';
import TopProducts from './topProducts';

function main() {
  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-12">
              <div className="home-tab">
                <div className="tab-content tab-content-basic">
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                    <div className="row">
                      <div className="col-lg-8 pb-0 pb-md-2 d-flex flex-column">
                        <Todaysales/>
                      
                      </div>
                      <div className="col-lg-4 pb-0 pb-md-2 d-flex flex-column">
                      <Visitorinsight/>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-5 pb-0 pb-md-2 d-flex flex-column">
                        <TotalRevenue/>
                      
                      </div>
                      <div className="col-lg-4 pb-0 pb-md-2 d-flex flex-column">
                      <CustomerSatisfication/>
                      </div>
                      <div className="col-lg-3 pb-0 pb-md-2 d-flex flex-column">
                      <TargetvsReality/>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-5 pb-0 pb-md-2 d-flex flex-column">
                        <TopProducts/>
                      
                      </div>
                      <div className="col-lg-4 pb-0 pb-md-2 d-flex flex-column">
                      <SalesMapping/>
                      </div>
                      <div className="col-lg-3 pb-0 pb-md-2 d-flex flex-column">
                      <VolumevsService/>
                      </div>
                    </div>

                    
                      

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main