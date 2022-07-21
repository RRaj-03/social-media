import React from "react"

export default function SignUp(props) {
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
    return (
      <>
        <div className="mt-10 my-container">
          <div className="">
            <div className="mb-6">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Sign UP</h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 ">
              <form >
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name*
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address*
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                          Password*
                        </label>
                        <input
                          type="Password"
                          name="Password"
                          id="Password"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        <p id="floating_helper_text" className="mt-2 text-xs text-gray-500 dark:text-gray-400">Password must Contain 8 characters</p>
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="CPassword" className="block text-sm font-medium text-gray-700">
                          Confirm Password*
                        </label>
                        <input
                          type="Password"
                          name="CPassword"
                          id="CPassword"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                    
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    
                    <button
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={(event)=>{
                        event.preventDefault()
                        if(isValidEmail(document.getElementById("email-address").value)&&((document.getElementById("Password").value).trim().length>7)&&(document.getElementById("Password").value===document.getElementById("CPassword").value)&&(document.getElementById("first-name").value!=="")){
                            props.showAlert("Your Account has been ADDED","success")
                        }else{
                          props.showAlert("Enter valid Credentials","Error")
                        }
                    }}
                    >
                     Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </>
    )
  }
  