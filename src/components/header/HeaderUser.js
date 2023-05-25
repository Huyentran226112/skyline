import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import CustomerModel from "../../models/CustomerModel";

function HeaderUser(props) {
  const navigate = useNavigate();
  let customer = CustomerModel.getCookie('customer');
  customer = customer ? JSON.parse(customer) : '';
  const handleLogout = () => {
    // Gọi API đăng xuất
    CustomerModel.logout()
      .then((response) => {
        CustomerModel.deleteCookie('customer');
        // Xử lý khi đăng xuất thành công
        Swal.fire({
          icon: 'success',
          title: 'Đăng xuất thành công',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
           

          // Chuyển hướng đến trang đăng nhập
          navigate("/login");
        });
      })
      .catch((error) => {
        // Xử lý khi có lỗi đăng xuất
        Swal.fire({
          icon: 'error',
          title: 'Đăng xuất thất bại',
        });
      });
  };

  if(customer){
    return (
        <div className="header-top-right">
          <ul>
          <li className="dropdown wellcome-text">
            <span className="text-white">Xin chào: {customer.name}</span>
              
            </li>
            <button className="btn btn-primary" onClick={handleLogout}>Đăng xuất</button>
          </ul>
        </div>
      );
  }
  return (
    <div className="header-top-right">
      <ul>
        <li className="dropdown">
          <Link to={"/register"}>Đăng ký</Link>
        </li>
        <li className="dropdown">
          <Link to={"/login"}>Đăng nhập</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderUser;
