import React from "react"
import PropTypes from "prop-types"
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts"
import styled from "styled-components"

const ChartContainer = styled.div`
	width: 100%;
	height: 300px;
	font-size: 0.7em;
`

const CustomTooltipContainer = styled.div`
	background: var(--white);
	color: var(--black);
`

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<CustomTooltipContainer>
				<p>{payload[0].value} €</p>
			</CustomTooltipContainer>
		)
	}
	return null
}

const InvestmentGraph = ({ dataPerYear }) => {
	const chartData = dataPerYear.map((data, i) => ({
		money: data,
		year: new Date().getFullYear() + i,
	}))

	const formatMoneyAxis = (value) => `${value}$`

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
					<Tooltip content={<CustomTooltip />} />
					<Area
						stroke="var(--yellow)"
						fill="var(--yellow)"
						type="monotone"
						dataKey="money"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}

InvestmentGraph.propTypes = {
	dataPerYear: PropTypes.arrayOf(PropTypes.number).isRequired,
}

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.arrayOf(PropTypes.object),
}

CustomTooltip.defaultProps = {
	active: false,
	payload: [],
}

export default InvestmentGraph
