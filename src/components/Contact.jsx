import React from 'react'

const Contact = () => {
    return (
      <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
  
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
        </div>
  
        <div className="max-w-[800px] mx-auto">
          <div className="mt-6 bg-[#161616] rounded-xl">
            <div className="p-10">
              <form action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 relative">
                      <input type="text" name="name" id="name" placeholder="Your Name" required
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2.5 relative">
                      <input type="text" name="email" id="email" placeholder="Your Email" required
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                    </div>
                  </div>
                </div>
  
                <div className="mt-2.5 relative sm:col-span-2">
                  <textarea name="message" id="message" placeholder="Your Message" required
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600" rows="4"></textarea>
                </div>

                <label class="block mb-2 text-sm font-medium text-gray-400 dark:text-white" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-400 border border-gray-700 rounded-lg cursor-pointer  dark:text-gray-400 
                    focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                
                <div className="sm:col-span-2">
                  <button type="submit" className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;