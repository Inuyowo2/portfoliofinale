import React, { useRef, useState } from 'react';
import { firestore, firestorage } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { ref, uploadBytes } from "@firebase/storage";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const fileInputRef = useRef();
  const [notification, setNotification] = useState('');

  const handleSave = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    // Upload file to Firebase Storage
    const file = fileInputRef.current.files[0];
    if (file) {
      const storageRef = ref(firestorage, 'uploads/' + file.name);
      try {
        await uploadBytes(storageRef, file);
      } catch (error) {
        console.error("Error uploading file: ", error);
        return;
      }
    }

    const data = { name, email, message, fileUrl: file ? `uploads/${file.name}` : null };

    try {
      const firebaseref = collection(firestore, "messages");
      await addDoc(firebaseref, data);
      setNotification('Your message has been sent successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={handleSave} method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input type="text" name="name" id="name" ref={nameRef} placeholder="Your Name" required className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5 relative">
                    <input type="text" name="email" id="email" ref={emailRef} placeholder="Your Email" required className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>
              </div>
              <div className="mt-2.5 relative sm:col-span-2">
                <textarea name="message" id="message" ref={messageRef} placeholder="Your Message" required className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" rows="4"></textarea>
              </div>
              <div className="mt-2.5 relative sm:col-span-2">
                <input type="file" className="border border-gray-700 text-gray-400" ref={fileInputRef} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">Submit</button>
              </div>
              {notification && <p className="text-white mt-4">{notification}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
