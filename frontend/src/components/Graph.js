import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	scales: {
		y: {
			display: true,
			title: {
				display: true,
				text: "Count",
				font: {
					size: 12,
					weight: "bold",
				},
				color: "grey",
				padding: { top: 20, left: 0, right: 0, bottom: 0 },
			},
		},
		x: {
			display: true,
			title: {
				display: true,
				text: "timestamp per hour",
				font: {
					size: 12,
					weight: "bold",
				},
				color: "grey",
				padding: { top: 20, left: 0, right: 0, bottom: 0 },
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

export default function Graph({ data }) {
	const [formattedData, setFormattedData] = useState([]);
	const [totalHits, setTotalHits] = useState(0);

	useEffect(() => {
		// Extract the hour from the timestamp and group the data by hour
		const groupedData = _.groupBy(data, (d) => {
			const date = new Date(d._source.timestamp);
			const month = `0${date.getUTCMonth() + 1}`.slice(-2);
			const day = `0${date.getUTCDate() - 1}`.slice(-2);
			const hour = `0${date.getUTCHours()}`.slice(-2);
			return `${month}/${day} ${hour}:00`;
		});

		// Convert the grouped data to an array of objects with x and y properties
		const objectData = Object.entries(groupedData).map(([hour, documents]) => ({
			x: hour,
			y: documents.length,
		}));
		setFormattedData(objectData);
		setTotalHits(objectData.reduce((acc, { y }) => acc + y, 0));
	}, [data]);

	const chartData = {
		labels: formattedData.map((d) => d.x),
		datasets: [
			{
				label: "Hits",
				data: formattedData.map((d) => d.y),
				backgroundColor: "rgba(75, 192, 192, 0.6)",
			},
		],
	};

	return (
		<div>
			<p>Total number of hits: {totalHits}</p>
			<Bar data={chartData} options={options} />
		</div>
	);
}
