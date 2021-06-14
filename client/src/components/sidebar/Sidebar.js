import "./sidebar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("/categories" + search);
      setCategories(res.data);
    };
    getCategory();
  }, [search]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">About Me</div>
        <img
          src="https://images.pexels.com/photos/3746152/pexels-photo-3746152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt
          dolorum omnis fugit dolore corrupti minus assumenda? Velit, temporibus
          assumenda.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Categories</div>
        <ul className="sidebarList">
          {categories.map((category) => {
            return (
              <Link className="link" to={`/?cat=${category.name}`}>
                <li key={category.name} className="sidebarListItem">
                  {category.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follows Us</div>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook-square"></i>
          <i className=" sidebarIcon fab fa-twitter-square"></i>
          <i className=" sidebarIcon fab fa-pinterest-square"></i>
          <i className=" sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
