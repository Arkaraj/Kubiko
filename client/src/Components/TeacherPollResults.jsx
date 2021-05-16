import React, { useEffect, useState } from "react";
import SenseiService from "../Services/SenseiService";
import { Chart } from "react-google-charts";

const TeacherPollResults = (props) => {
  let id = props.match.params.pollId;

  const [results, setResults] = useState({});

  useEffect(() => {
    SenseiService.getPollResult(id).then((data) => {
      setResults(data);
    });
  }, [id]);

  const data = results.options
    ? results.options.map((opt, indx) => {
        return [opt.option, opt.clicked];
      })
    : null;

  return (
    <div>
      <h4>Title: {results.title}</h4>
      <h2>Question: {results.question}</h2>
      {data ? (
        <Chart
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[["Question", results.title], ...data]}
          options={{
            title: results.question,
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      ) : (
        <div>Loading Chart</div>
      )}
    </div>
  );
};

export default TeacherPollResults;
