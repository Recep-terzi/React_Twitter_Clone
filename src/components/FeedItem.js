import React from "react";
import { Kalp, Paylaş, Retweet, Yorum } from "../icons/Icon";

const FeedItem = ({
  image,
  content,
  displayName,
  avatar,
  timestamp,
  username,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full " />
      <div class="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-dark ml-2">{username}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full " />
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm"> {content}</p>
        {image && <img src={image} alt="img" className="my-2 rounded-xl max-h-96" />}
        <ul className="-ml-1 mt-3 flex justify-between max-w-md">
          <li className=" flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <Yorum className="m-5 h-5 group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className=" flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200 ">
              <Retweet className="m-5 h-5 group-hover:text-green-400"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className=" flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200 ">
              <Kalp className="m-5 h-5 group-hover:text-pink-400"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className=" flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <Paylaş className="m-5 h-5 group-hover:text-primary-base"/>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
