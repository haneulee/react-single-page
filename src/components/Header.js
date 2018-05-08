import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact className="item" activeClassName="active" to="/">
        홈
      </NavLink>
      <NavLink className="item" activeClassName="active" to="/about/hnlee">
        소개
      </NavLink>
      <NavLink className="item" activeClassName="active" to="/posts">
        포스트
      </NavLink>
      <NavLink className="item" activeClassName="active" to="/mypage">
        마이페이지
      </NavLink>
      <NavLink className="item" activeClassName="active" to="/login">
        로그인
      </NavLink>
      <NavLink className="item" activeClassName="active" to="/search">
        검색
      </NavLink>
    </div>
  );
};

export default Header;
