import React from 'react'

function Cardcontact(props) {
  return (
<div>
  <div class="card shadow-lg p-3 mb-5 bg-body rounded-0 pt-5 contactid">
    <i class={props.icon}></i>
    <div class="card-body">
      <h5 class="card-title fs-5 fw-bold text-center">{props.title}</h5>
      <p class="card-text fs-5 fw-bold">{props.para}</p>
      <p class="card-text fs-5 fw-bold">{props.para1}</p>
    </div>
  </div>
</div>


  )
}

export default Cardcontact