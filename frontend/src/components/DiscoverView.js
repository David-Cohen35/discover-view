import React, { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import Graph from "./Graph";
import Table from "./Table";

const DiscoverView = () => {
	const [, setStartDate] = useState(null);
	const [, setEndDate] = useState(null);
	const [data, setData] = useState([]);

	return (
		<div className='flex justify-center flex-col'>
			<DateRangePicker
				setStartDate={setStartDate}
				setEndDate={setEndDate}
				setData={setData}
			/>
			<div className='border border-solid border-gray-500 m-2.5 p-1 rounded w-[800px]'>
				<Graph data={data} />
				<Table data={data} />
			</div>
		</div>
	);
};

export default DiscoverView;
