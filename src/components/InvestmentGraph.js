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
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  font-size: 0.7em;
`;

const InvestmentGraph = ({ dataPerYear }) => {
  const chartData = dataPerYear.map((data, i) => ({
    money: data,
    year: new Date().getFullYear() + i,
  }));

  const formatMoneyAxis = (value) => `${value}$`;

  return (
    <ChartContainer>
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
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatMoneyAxis} />
          <Tooltip />
          <Area
            stroke="var(--yellow)"
            fill="var(--yellow)"
            type="monotone"
            dataKey="money"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

InvestmentGraph.propTypes = {
  dataPerYear: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default InvestmentGraph;
