import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoStar } from "react-icons/io5";


const routes = [
  { path: "/", element: "Home" },
  { path: "productswiththunk", element: "Products" },
  

  { path: "contact", element: "Contact" },

  { path: "addproduct", element: "AddProduct" },
  {
    path: "fav",
    element: (
      <Link to="/fav">
        <IoStar  style={{ fontSize: "28px", color: "rgb(97, 84, 75)" ,marginLeft: "200px",}} />
      </Link>
    ),
  },
  {
    path: "cart",
    element: (
      <Link to="/cart" >
        <FaCartShopping
          style={{
            fontSize: "27px",
            color: "rgb(97, 84, 75)",
            
          }}
        />
       
      </Link>
    ),
  },
  {
    path: "account",
    element: (
      <Link to="/account">
        <VscAccount style={{ fontSize: "40px", color: "rgb(97, 84, 75)" }} />
      </Link>
    ),
  },
  // {path:"/", element:"Login"},
  // {path:"register", element:"Sign Up"},
];
export default routes;
