
import React, { useState } from "react";
import { AddHeader, AddForm, Form } from "./style";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage
import { storage, db } from "../../firebase/firebaseConfig"; // Import new Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore imports

export default function AddProduct() {
  const [brand, setBrand] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null); // Image file
  const [category,setCategory] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>(""); // URL of the uploaded image
  const [uploading, setUploading] = useState<boolean>(false); // Track upload status

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!category || !name || !price || !brand || !image) {
      alert("Please Complete the form");
      return;
    }

    try {
      setUploading(true);

      // Create a storage reference in Firebase Storage
      const imageRef = ref(storage, `products/${image.name}`);

      // Upload the file to Firebase Storage
      await uploadBytes(imageRef, image);

      // Get the file's download URL
      const downloadURL = await getDownloadURL(imageRef);

      setImageURL(downloadURL); // Store the image URL in state

      // Store product data (brand, name, price, imageURL) in Firestore
      await addDoc(collection(db, "products"), {
        category:category,
        brand: brand,
        name: name,
        price: price,
        imageURL: downloadURL, // Add the download URL of the image
      });

      alert("Product and image uploaded successfully");

      // Reset form
      setBrand("");
      setName("");
      setPrice("");
      setCategory("");
      setImage(null);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading file or saving data:", error);
      setUploading(false);
    }
  };

  return (
    <>
      <AddHeader />
      <AddForm>
        <h1 id="heading">Post your Ad</h1>
        <Form>
          <form onSubmit={handleSubmit}>
          <label>Category</label>
            <input
              value={category}
              type="text"
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setCategory((e.target.value).toLowerCase())}
            />
            <label>Brand</label>
            <input
              value={brand}
              type="text"
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setBrand(e.target.value)}
            />
            <label>Name</label>
            <input
              value={name}
              type="text"
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <label>Price</label>
            <input
              value={price}
              type="text"
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
            />
            <label>Image</label>
            <input
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
            />
            <button type="submit" disabled={uploading}>
              {uploading ? "Uploading..." : "Submit"}
            </button>
          </form>
          {imageURL && <img src={imageURL} alt="Uploaded" width="200px" />}
        </Form>
      </AddForm>
    </>
  );
}
