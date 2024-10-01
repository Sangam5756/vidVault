import React from "react";

const Shimmer = () => {
  return (
    <div className="p-2 m-2 h-72 w-72 shadow-lg animate-pulse">
      {/* Placeholder for the thumbnail */}
      <div className="h-40 bg-gray-300 rounded-lg"></div>
      <ul>
        {/* Placeholder for the title */}
        <li className="h-4 mt-2 bg-gray-300 rounded w-3/4"></li>
        {/* Placeholder for the channel title */}
        <li className="h-4 mt-2 bg-gray-300 rounded w-1/2"></li>
      </ul>
    </div>
  );
};

export default Shimmer;
