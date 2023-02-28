import React, { Component } from 'react'

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={trangthai:true};
  }
  thongbao=()=>{
    alert("chua co tham so");
  }
  thongbao2=(x)=>{
    alert(x);
  }
  check=()=>{
    if(this.state.trangthai===true)
    {
        return this.Renderbutton();
    }
    else{
        return this.RenderForm();
    }
  }
  doitrangthai =()=>{
    this.setState({trangthai:!this.state.trangthai});
  }
  Renderbutton=()=>{
    return(
        <div className="row">
    <div className="btn btn-group">
      {/* trong react bat buoc viet theo arrow funtion */}
      <div className="btn btn-info" onClick={this.thongbao}>edit</div>
      <div className="btn btn-secondary" onClick={this.doitrangthai} >Trang thai</div>
      {/* Hàm k cso tham số ,k có () */}
      <div
        className="btn btn-warning"onClick= {()=> this.thongbao2("co tham so")} >remove</div>{/* Hàm k cso tham số k có () */}
    </div>
  </div>
    )
  }
  RenderForm=()=>{
    <div className="row">
    <div classname="form-group">
      <input className="form-control" type="text" name="ten" />
      <div className="btn btn-primary" onClick={this.doitrangthai}>Save</div>
    </div>
  </div>
  }
  
    render() {
    return (
        <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
            {/* <!-- Featured Project Row--> */}
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." /></div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Shoreline</h4>
                        <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                    </div>
                </div>
            </div>
            {/* <!-- Project One Row--> */}
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Misty</h4>
                                <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                        {this.check()}
                    </div>
                   
                </div> 
                
            </div>
            {/* <!-- Project Two Row--> */}
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-02.jpg" alt="..." /></div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="text-white">Mountains</h4>
                                <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                <hr class="d-none d-lg-block mb-0 me-0" />
                            </div>
                        </div>
                    </div>
                </div>
                {this.check()}
            </div>
        </div>
    </section>
    )
  }
}
