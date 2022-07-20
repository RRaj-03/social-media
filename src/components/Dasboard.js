import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import PostContext from '../context/Posts/PostContext'
const Dasboard = () => {
    const postContext = useContext(PostContext)
    const {Posts,EditPost,deletePost,SubmitPost}=postContext
    return (

        <div className='container m-auto my-container mt-10'>
            <div className=" bg-white rounded-lg border shadow-md mb-4">
                <div className='p-4 grid grid-cols-6 gap-6'>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">

                        <label htmlFor="PostHead" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name="PostHead"
                            id="PostHead"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-3">

                        <label htmlFor="Post" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <input
                            type="text"
                            name="Post"
                            id="Post"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <button className="inline-flex justify-self-center items-center self-end mb-1 bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 h-fit"  onClick={SubmitPost}>Post
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                </div>
            </div>
            {Posts.map((element,index) => {
                return (<div key={`a${index}`}><Post element={element} index={index} deletePost={deletePost} EditPost={EditPost}/></div>)  
            })}
        </div>

    )
}

export default Dasboard