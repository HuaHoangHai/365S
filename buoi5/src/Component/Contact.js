import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      chuyentrang:false,
      hoten:"", //Lấy tên bằng cách đặt tên ở name
      email:"",
      ghichu:"",
      ngay:"thu 2"
    }
  }
  
  submitform= (even) =>{
    even.preventDefault(); // ngăn chặn mặc định
    this.setState({chuyentrang:true});

  }
  //Lấy giá trị của control
  noiDung =(even)=>{
    // console.log(even.target.value); //Lấy giá trị của thẻ input
    const tenControl=even.target.name;
    const giatri=even.target.value;
    // console.log(tenControl);
    // console.log(giatri);
    this.setState({[tenControl]:giatri});
  }
  getGiatri = ()=>{
    var thongtin="";
    thongtin +="Ten là :" + this.state.hoten;
    thongtin +="/Email là :" +this.state.email;
    thongtin +="/Ghi chú là :" +this.state.ghichu;
    thongtin +="/Ngay là :" +this.state.ngay;
    thongtin +="/Va Hình là :" +this.state.tenFile;
    return thongtin;
  }
   //Hàm lấy thông tin từ control file
   infoFile =(even)=>{
    // const hinh=even.target.files;
     const hinh=even.target.files[0].name;
    // console.log(hinh);
    this.setState({tenFile:hinh})
  }
  render() {
    if(this.state.chuyentrang)
    {
      console.log(this.getGiatri());
      // console.log(this.state.hoten);
      return <Navigate to="/"/> //Nếu chuyển trang bằng true thì trả về trnag chủ
    }
    return (
        <div>
        <div className="container">
          <form action="mail.php" method="post">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-info text-white text-center py-2">
                  <h3><i className="fa fa-envelope" /> Contactanos</h3>
                  <p className="m-0">Con gusto te ayudaremos</p>
                </div>
              </div>
              <div className="card-body p-3">
                {/*Body*/}
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                    </div>
                    <input onChange={(even)=>this.noiDung(even)} type="text" className="form-control" id="nombre" name="hoten" placeholder="Nombre y Apellido" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                    </div>
                    <input onChange={(even)=>this.noiDung(even)} type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                    </div>
                    <textarea onChange={(even)=>this.noiDung(even)} name="ghichu" className="form-control" placeholder="Envianos tu Mensaje" required defaultValue={""} />
                  </div>
                </div>
                <div className="form-group">                   
                  <label htmlFor>chọn ngày</label> {/* Nếu lấy thông tin từ control phải đặt name */}
                  <select value={this.state.ngay} onChange={(even)=>this.noiDung(even)} className="form-control" name="ngay" id> 
                    <option value="thu2">Thứ hai</option>
                    <option value="thu3">Thứ ba</option>
                    <option value="thu5">Thứ năm</option>
                    <option value="cn">Chủ nhật</option>                      
                  </select>                   
                </div>
                {/* control file  //Đói với những hàm cso nội dung dùng target.value */}
                <div className="form-group">                   
                    <input onChange={(even)=>this.infoFile(even)} type="file" className="form-control-file" name="hinhanh" />                   
                  </div>

                <div className="text-center">
                  <input onClick={(even)=>this.submitform(even)} type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr />
        {/* end giới thiệu  */}
      </div>
      
    )
  }
}
