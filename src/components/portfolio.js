import React from 'react'


const Portfolio = () => {
    return (
     <div>            <h2>Portfolio</h2>
<div class="card w-25">
  <img className="card-img-top" src="images/C6C02318-55B9-47E8-B705-8815ED89D78E.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Tripology</h5>
    <p className="card-text">Weather and flight information at your fingertips!</p>
    <a href="https://p1t4-r2h2.github.io/Project-1/" className="btn btn-primary">View</a>
  </div>

  
</div>
<div class="card w-25">
  <img className="card-img-top" src="images/IMG_3581.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">WishDash!</h5>
    <p className="card-text">Gift Exchanges made easy!</p>
    <a href="https://wishlist-gifts01.herokuapp.com/" className="btn btn-primary">View</a>
  </div>
  
</div>
</div>

    )
}

export default Portfolio
