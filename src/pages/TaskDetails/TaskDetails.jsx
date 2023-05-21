import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import 'moment/locale/pt'; 
import Button from "../../components/Button/Button";

const TaskDetails = ({ viewInfo }) => {
  const navigate = useNavigate();
  const id = useParams();
  debugger

  return (
    <div style={{ margin: '50px', color: '#fff'}}>
      <div style={{margin: '10px 0 '}}>
        <h2>{viewInfo.title}</h2>
        <p>{viewInfo.description}</p>
        <h6>{moment(viewInfo.date).locale('pt').format('lll')}</h6>
      </div>
      <div style={{width:'200px'}}>
        <Button onClick={() => navigate('/')}>Voltar</Button>
      </div>
    </div>
  );
};

export default TaskDetails;
