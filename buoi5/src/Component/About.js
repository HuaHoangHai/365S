import React, { Component } from 'react';
import Sanpham from './Sanpham';
import dl from './../data.json';

export default class About extends Component {
  render() {
    
    return (
        <div className="container">
        <div className="card-deck">        
          {
            dl.map((value,key)=>{
              return(
                <Sanpham title={value.tieuDe} hinh={value.hinh} Tinid={value.id}/>
              )
            })
          }
        </div>
        <hr />
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="https://placehold.it/700x300" alt="" />
            <div className="card-body">
              <h4 className="card-title">Dự án 1</h4>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex omnis nemo assumenda vel dolor. Cumque eum commodi dicta reiciendis tempore maiores itaque consequuntur vel, eius ab laudantium minus debitis saepe!</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://placehold.it/700x300" alt="" />
            <div className="card-body">
              <h4 className="card-title">Dự án 2</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit, corrupti necessitatibus cumque soluta, illo odit ad nulla nihil quo iure, maxime sed beatae nostrum non possimus tempore? Quos, laboriosam!</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://placehold.it/700x300" alt="" />
            <div className="card-body">
              <h4 className="card-title">Dự án 3</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellendus rerum porro aliquid odio aliquam officiis molestiae quis labore consequatur veritatis magni debitis molestias quas et impedit. Nihil, aut soluta.</p>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
