import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div>
        <div>
  {/* nọi dung  */}
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="jumbotron">
          <h3 className="display-4">Jumbo heading</h3>
          <p className="lead">Jumbo helper text</p>
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <img src="https://placehold.it/600x370" alt="" />
      </div>
    </div>
  </div>
  {/* tin liên quan  */}
  <div className="container">
    <h4>Tin liên quan</h4>
    <div className="card-deck">
      <div className="card">
        <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></a>
      </div>
      <div className="card">
        <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></a>
      </div>
      <div className="card">
        <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></a>
      </div>
      <div className="card">
        <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></a>
      </div>
    </div>
  </div>
  <hr />
  {/* end nội dung  */}
</div>

      </div>
    )
  }
}
