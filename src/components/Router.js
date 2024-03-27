import React from "react";
import TaskDetails from "../pages/TaskDetails";
import ConatinerTasks from "../pages/ConatinerTasks/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = ({ viewInfo }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConatinerTasks />} />
        <Route
          path="*"
          element={
            <>
              <h3 style={{ textAlign: "center", color: "chartreuse" }}>
                Cannot 404 - A página não existe....
              </h3>
              <h1
                style={{
                  textAlign: "center",
                  color: "chartreuse",
                  marginTop: "20px",
                  opacity: 0.5,
                }}
              >
                ( ͡╥ ₒ ͡╥)
              </h1>
            </>
          }
        />
        <Route
          path="/task-details/:id"
          element={<TaskDetails viewInfo={viewInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
