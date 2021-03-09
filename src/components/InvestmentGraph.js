import React from "react";
import PropTypes from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const InvestmentGraph = ({ dataPerYear }) => {
  const chartData = dataPerYear.map((data, i) => ({
    money: data,
    year: new Date().getFullYear() + i,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          width={500}
          height={400}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            stroke="#8884d8"
            fill="#8884d8"
            type="monotone"
            dataKey="money"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

InvestmentGraph.propTypes = {
  dataPerYear: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default InvestmentGraph;
