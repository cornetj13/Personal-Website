import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popupInner">
      <img src={props.picture} alt='Popup Screen shot' className='popupPicture'/>
        <button className="btn btn-collapse btn-block btn-close" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup