import { useFormik,Form } from "formik";
import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";






function AddProduct() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.new.products); 
  const [image, setImage] = useState(null);

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(4, "Title must be at least 4 characters")
      .max(20, "Title must be less than 20 characters")
      .required("Title is required"),
    price: Yup.string()
      .required("Price is required"),
      quantity: Yup.string()
            .required("Quantity is required"),
  });

 async function handleAddProduct(values, { resetForm }) {
    try {
      const response = await axiosInstance.post("/products", values);
      console.log("Product added successfully:", response.data);
      resetForm();
      navigate("/productswiththunk");
      toast.success("Product added Successfully ");
    } catch (error) {
      toast.error(" adding product Failed:", error);
}
}
 

  const uploadImage = (files) => {
    if (!files.length) return; // Prevent errors if no file is selected

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "nbextu1y");

    fetch("https://api.cloudinary.com/v1_1/drlxfoudx/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        formik.setFieldValue("imgURL", data.secure_url);
       setImage(data.secure_url);
      })
      .catch((error) => console.error("Image upload failed:", error));
  };
 

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      imgURL: "",
      
    },
    
    onSubmit: handleAddProduct,
    validationSchema: validation,
  });

  return (
    <>
      <form style={styles.formstyle} onSubmit={formik.handleSubmit}>
        <h2>Add New Product</h2>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Add product Title"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.name}
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Add price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </div>
        {formik.errors.price && formik.touched.price ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.price}
          </div>
        ) : null}

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            min={1}
            max={10}
            className="form-control"
            id="quantity"
            aria-describedby="emailHelp"
            placeholder="Add Quantity"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
        </div>
        {formik.errors.quantity && formik.touched.quantity ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.quantity}
          </div>
        ) : null}
         <input type="file" name="imgURL" onChange={(e) => uploadImage(e.target.files)} />


      
        

        {image&&<button type="submit" className="submitbtn" style={{ margin: "5px" }}
        >
          Add Product
        </button>}
        
      </form>

      
    </>
  );
}

export default AddProduct;
const styles = {
  formstyle: {
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    gap: "20px",
    margin: "40px",
    width: "50%",
  },
};
