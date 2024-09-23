import React from "react";

const commentsData = [
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [
      {
        name: "Sangam Mundhe",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
        replies: [
          {
            name: "Sangam Mundhe",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
            replies: [],
          },
          {
            name: "Sangam Mundhe",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
            replies: [
                {
                    name: "Sangam Mundhe",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                    replies: [],
                  },
                  {
                    name: "Sangam Mundhe",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                    replies: [],
                  },
                  {
                    name: "Sangam Mundhe",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                    replies: [
                        {
                            name: "Sangam Mundhe",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                            replies: [],
                          },
                          {
                            name: "Sangam Mundhe",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                            replies: [],
                          },
                          {
                            name: "Sangam Mundhe",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
                            replies: [],
                          },
                    ],
                  },


            ],
          },
          {
            name: "Sangam Mundhe",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
            replies: [],
          },
        ],
      },
      {
        name: "Sangam Mundhe",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
        replies: [],
      },
      {
        name: "Sangam Mundhe",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
        replies: [],
      },
    ],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
  {
    name: "Sangam Mundhe",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { text, replies, name } = data;
  return (
    <div className="flex bg-slate-100 shadow-md rounded-sm my-3">
      <img
        className="w-8  h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-icon"
      />
      <div className="pzx-2">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="ml-10 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
