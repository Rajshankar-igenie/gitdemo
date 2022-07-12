import React, { useState } from "react";

const LikeCounter = () => {
  const [like, setLike] = useState(0);
  //   const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>
      {/* <Button
        onClick={() => {
          setDislike(like + 1);
        }}
      >
        {dislike}
      </Button> */}
    </div>
  );
};

export default LikeCounter;
