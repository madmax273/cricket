import React from "react";

const SuccessModal = (props) => {
    console.log("props",props)

return (
    <>
   <div className={`modal fade ${props?.isSuccessModal ?"show d-block":""}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">{props?.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>props?.setIsSuccessModal(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {props?.text}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>props?.setIsSuccessModal(false)}>Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

    </>

)
    
 };

 export default SuccessModal;