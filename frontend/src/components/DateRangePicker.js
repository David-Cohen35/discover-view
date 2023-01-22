import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const DateRangePicker = ({ setStartDate, setEndDate, setData, setError }) => {
	const [rawData, setRawData] = useState([]);
	const currentDate = dayjs();
	const startDate = dayjs(currentDate).startOf("month");

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_SERVICE_URL}/proxy`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				return response.json();
			})
			.then((data) => {
				setRawData(data);
				setData(filterDataByDateRange(data, startDate, currentDate));
			})
			.catch((error) => {
				setError(error.message);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filterDataByDateRange = (data, startDate, endDate) => {
		const start = new Date(startDate).getTime();
		const end = new Date(endDate).getTime();
		return data.hits.hits.filter((d) => {
			const timestamp = new Date(d._source.timestamp).getTime();
			return timestamp >= start && timestamp <= end;
		});
	};

	const handleDateChange = (date) => {
		if (!date) {
			return;
		}
		const startDate = date[0]["$d"];
		const endDate = date[1]["$d"];
		setStartDate(startDate);
		setEndDate(endDate);

		setData(filterDataByDateRange(rawData, startDate, endDate));
	};

	const handleClick = () => {
		fetch(`${process.env.REACT_APP_API_SERVICE_URL}/proxy`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				return response.json();
			})
			.then((data) => {
				setRawData(data);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className='m-2.5 self-end'>
			<RangePicker
				defaultValue={[startDate, currentDate]}
				onChange={handleDateChange}
				className='h-10'
			/>
			<Button className='h-10 ml-2.5' onClick={handleClick}>
				<ArrowClockwise className='w-fit' />
			</Button>
		</div>
	);
};

export default DateRangePicker;
