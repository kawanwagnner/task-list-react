import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();

  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-detail-container">
        <p></p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus rem doloremque nisi. Eveniet, iure!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
