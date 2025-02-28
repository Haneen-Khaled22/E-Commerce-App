// import React, { useState } from "react";

// function UploadImage() {

//   async function handleAddProduct(values, { resetForm }) {
//     try {
//       const response = await axiosInstance.post("/products", values);
//       console.log("Product added successfully:", response.data);
//       resetForm();
//       navigate("/products");
//       alert("Product added Successfully ");
//     } catch (error) {
//       console.error(" adding product Failed:", error);
// }
// }
//   const [image, setImage] = useState(null); // Ensure initial state is null

//   const uploadImage = (files) => {
//     if (!files.length) return; // Prevent errors if no file is selected

//     const formData = new FormData();
//     formData.append("file", files[0]);
//     formData.append("upload_preset", "nbextu1y");

//     fetch("https://api.cloudinary.com/v1_1/drlxfoudx/image/upload", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data, "data");
//         formik.setFieldValue("imgURL", data.secure_url);
//         setImage(data.secure_url);
//       })
//       .catch((error) => console.error("Image upload failed:", error));
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => uploadImage(e.target.files)} />
//       {/* {image && <img src={image} alt="Uploaded Image" />} */}
//     </div>
//   );
// }

// export default UploadImage;
