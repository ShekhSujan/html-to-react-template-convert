import React from 'react'

const Modal = () => {
  return (
<div classname="modal fade right-modal" id="exampleModal" tabIndex="{-1}" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div classname="modal-dialog modal-dialog-centered">
    <div classname="modal-content">
      <div classname="modal-header">
        <h5 classname="modal-title" id="exampleModalLabel">Filter</h5>
        <button type="button" classname="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div classname="modal-body p-0">
        <div classname="osahan-filter">
          <div classname="filter">
            <div classname="p-3 bg-light border-bottom">
              <h6 classname="m-0">SORT BY</h6>
            </div>
            <div classname="custom-control border-bottom px-0  custom-radio">
              <input type="radio" id="customRadio1" name="location" classname="custom-control-input" defaultchecked />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="customRadio1">Top Rated</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-radio">
              <input type="radio" id="customRadio2" name="location" classname="custom-control-input" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="customRadio2">Nearest Me</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-radio">
              <input type="radio" id="customRadio3" name="location" classname="custom-control-input" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="customRadio3">Cost High to Low</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-radio">
              <input type="radio" id="customRadio4" name="location" classname="custom-control-input" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="customRadio4">Cost Low to High</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-radio">
              <input type="radio" id="customRadio5" name="location" classname="custom-control-input" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="customRadio5">Most Popular</label>
            </div>
            <div classname="p-3 bg-light border-bottom">
              <h6 classname="m-0">FILTER</h6>
            </div>
            <div classname="custom-control border-bottom px-0  custom-checkbox">
              <input type="checkbox" classname="custom-control-input" id="defaultCheck1" defaultchecked />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="defaultCheck1">Open Now</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-checkbox">
              <input type="checkbox" classname="custom-control-input" id="defaultCheck2" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="defaultCheck2">Credit Cards</label>
            </div>
            <div classname="custom-control border-bottom px-0  custom-checkbox">
              <input type="checkbox" classname="custom-control-input" id="defaultCheck3" />
              <label classname="custom-control-label py-3 w-100 px-3" htmlfor="defaultCheck3">Alcohol Served</label>
            </div>
            <div classname="p-3 bg-light border-bottom">
              <h6 classname="m-0">ADDITIONAL FILTERS</h6>
            </div>
            <div classname="px-3 pt-3">
              <input type="range" classname="custom-range" min="{0}" max="{100}" name />
              <div classname="form-row">
                <div classname="form-group col-6">
                  <label>Min</label>
                  <input classname="form-control" placeholder="$0" type="number" />
                </div>
                <div classname="form-group text-right col-6">
                  <label>Max</label>
                  <input classname="form-control" placeholder="$1,0000" type="number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname="modal-footer p-0 border-0">
        <div classname="col-6 m-0 p-0">
          <button type="button" classname="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
        </div>
        <div classname="col-6 m-0 p-0">
          <button type="button" classname="btn btn-success btn-lg btn-block">Apply</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Modal