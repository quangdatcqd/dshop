
import { useState, React } from 'react';
import { NavLink, useLocation } from "react-router-dom";


function Menu(props) {
    let location = useLocation();
    const homeActive = (location.pathname === "/home" || location.pathname === "/") ? "sidebar-item selected" : "sidebar-item";
    const productActive = location.pathname === "/products" ? "sidebar-item selected" : "sidebar-item";
    const categoryActive = location.pathname === "/categories" ? "sidebar-item selected" : "sidebar-item";


    return (

        <aside className="left-sidebar" data-sidebarbg="skin6">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar" data-sidebarbg="skin6">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className={homeActive} >
                            <NavLink className="sidebar-link sidebar-link " to="home" >
                                <i data-feather="home" className="feather-icon" />
                                <span className="hide-menu">Trang chủ</span>
                            </NavLink>
                        </li>
                        <li className="list-divider" />
                        <li className="nav-small-cap"><span className="hide-menu">Applications</span></li>
                        <li className={productActive}  >
                            <NavLink className="sidebar-link" to="products"  >
                                <i data-feather="tag" className="feather-icon" />
                                Danh sách sản phẩm
                            </NavLink>

                        </li>

                        <li className={categoryActive}>
                            <NavLink className="sidebar-link" to="categories"  >
                                <i data-feather="file-text" className="feather-icon" />
                                Danh sách danh mục
                            </NavLink>

                        </li>

                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside >
    );
}

export default Menu;