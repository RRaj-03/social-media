import { useEffect, useState } from 'react'
import React from 'react'

const Post = (props) => {
    let { title, content, user, date, like, dislike } = props.element
    const [titlePost, setTitlePost] = useState(title)
    const [contentPost, setContentPost] = useState(content)
    const [likes, setLikes] = useState(like)
    const [dislikes, setDislikes] = useState(dislike)
    const [editable, setEditable] = useState(false)
    function ToggleEdit() {
        if (editable) {
            setEditable(false)
        } else {
            setEditable(true)
        }
    }
    useEffect(() => {
        setTitlePost(title)
        setContentPost(content)
    }, [title, content])
    return (
        <>
            <div className=" bg-white rounded-lg border shadow-md mt-4">
                <div className="flex flex-col justify-between p-4 md:p-10 pb-4 leading-normal">
                    <div className='flex justify-between mb-4'>
                        <div className="inline-flex items-center">
                            <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span className="flex-grow flex flex-col pl-3">
                                <span className="title-font font-medium text-gray-900 border-b border-gray-500">{user}</span>
                                <span className="text-gray-500 text-sm">{date.toLocaleString()}</span>
                            </span>
                        </div>
                        <div className='w-fit items-center justify-center hidden sm:flex'>
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base m-1 h-fit" onClick={() => {
                                props.deletePost(props.index)
                                props.showAlert("Your Post has been deleted","Deleted")
                            }}>Delete
                                <svg xmlns="http://www.w3.org/2000/svg" height={"16px"} className="fill-white ml-2" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" /></svg>
                            </button>
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base m-1 h-fit" onClick={() => {
                                if (editable) {
                                    props.EditPost(props.index, titlePost, contentPost, likes, dislikes, date, true)
                                    props.showAlert("Your Post has been Edited","success")
                                }
                                ToggleEdit()
                            }} >{editable ? "Share" : "Edit"}
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {editable ? <div><label htmlFor={`Post${props.index}`} className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                        <input
                            type="text"
                            name={`Post${props.index}`}
                            id={`Post${props.index}`}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={titlePost} onChange={(event) => {
                                setTitlePost(event.target.value)
                            }}
                        /></div> : <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>}


                    {editable ? <div><label htmlFor={`PostContent${props.index}`} className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                        <input
                            type="text"
                            name={`PostContent${props.index}`}
                            id={`PostContent${props.index}`}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={contentPost} onChange={(event) => {
                                setContentPost(event.target.value)
                            }}
                        /></div> : <p className="mb-3 font-normal text-gray-700">

                        {content}</p>}
                    <div className='flex justify-between flex-col small:flex-row'>
                        <div className='flex justify-between'>
                            <div className='text-center px-4 py-1 rounded-md hover:bg-slate-100' onClick={() => {
                                setLikes(likes + 1)
                                console.log('likes', likes)
                                props.EditPost(props.index, titlePost, contentPost, likes + 1, dislikes, date, false)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={"20px"} name="like"><path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" /></svg>
                                <label htmlFor='like'>{likes}</label>
                            </div>
                            <div className='text-center px-4 py-1 rounded-md hover:bg-slate-100' onClick={() => {
                                setDislikes(dislikes + 1)
                                console.log('dislikes', dislikes)
                                props.EditPost(props.index, titlePost, contentPost, likes, dislikes + 1, date, false)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={"20px"} name="dislike"><path d="M128 288V64.03c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 320 128 305.7 128 288zM481.5 229.1c1.234-5.092 1.875-10.32 1.875-15.64c0-22.7-11.44-43.13-29.28-55.28c.4219-3.015 .6406-6.076 .6406-9.122c0-22.32-11.06-42.6-28.83-54.83c-2.438-34.71-31.47-62.2-66.8-62.2h-52.53c-35.94 0-71.55 11.87-100.3 33.41L169.6 92.93c-6.285 4.71-9.596 11.85-9.596 19.13c0 12.76 10.29 24.04 24.03 24.04c5.013 0 10.07-1.565 14.38-4.811l36.66-27.51c20.48-15.34 45.88-23.81 71.5-23.81h52.53c10.45 0 18.97 8.497 18.97 18.95c0 3.5-1.11 4.94-1.11 9.456c0 26.97 29.77 17.91 29.77 40.64c0 9.254-6.392 10.96-6.392 22.25c0 13.97 10.85 21.95 19.58 23.59c8.953 1.671 15.45 9.481 15.45 18.56c0 13.04-11.39 13.37-11.39 28.91c0 12.54 9.702 23.08 22.36 23.94C456.2 266.1 464 275.2 464 284.1c0 10.43-8.516 18.93-18.97 18.93H307.4c-12.44 0-24 10.02-24 23.1c0 4.038 1.02 8.078 3.066 11.72C304.4 371.7 312 403.8 312 411.2c0 8.044-5.984 20.79-22.06 20.79c-12.53 0-14.27-.9059-24.94-28.07c-24.75-62.91-61.74-99.9-80.98-99.9c-13.8 0-24.02 11.27-24.02 23.99c0 7.041 3.083 14.02 9.016 18.76C238.1 402 211.4 480 289.9 480C333.8 480 360 445 360 411.2c0-12.7-5.328-35.21-14.83-59.33h99.86C481.1 351.9 512 321.9 512 284.1C512 261.8 499.9 241 481.5 229.1z" /></svg>
                                <label htmlFor='dislike'>{dislikes}</label>
                            </div>
                        </div>
                        <div className='small:w-fit items-center justify-between flex sm:hidden'>
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base m-1 h-fit" onClick={() => {
                                props.deletePost(props.index)
                                props.showAlert("Your Post has been deleted","Deleted")
                            }}><span className='hidden'>Delete</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height={"23px"} className="fill-white" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" /></svg>
                            </button>
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base m-1 h-fit" onClick={() => {
                                if (editable) {
                                    props.EditPost(props.index, titlePost, contentPost, likes, dislikes, date, true)
                                    props.showAlert("Your Post has been Edited","success")
                                }
                                ToggleEdit()
                            }} >{editable ? "Share" : "Edit"}
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post