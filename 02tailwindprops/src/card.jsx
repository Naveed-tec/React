import React from "react";
function Card(props){
    //console.log(props);
    return( 
          <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://www.pexels.com/photo/dreamy-bride-in-pink-gown-amidst-winter-trees-32552462/"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.work}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}
export default Card;