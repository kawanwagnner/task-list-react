// eslint-disable-next-line

import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/pt";
import Button from "../../components/Button/Button";

const TaskDetails = ({ selectedTask }) => {
  const navigate = useNavigate();
  if (!selectedTask) {
    return (
      <h1 style={{ textAlign: "center", color: "chartreuse" }}>Caregando...</h1>
    );
  }

  return (
    <div style={{ margin: "50px", color: "#fff" }}>
      <div style={{ margin: "10px 0" }}>
        <h2>{selectedTask.title}</h2>
        <p style={{ margin: "10px 0 20px 0" }}>{selectedTask.description}</p>
        <h6>{moment(selectedTask.date).locale("pt").format("lll")}</h6>
      </div>
      <div style={{ width: "200px" }}>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </div>
    </div>
  );
};

export default TaskDetails;
