// import React, { useState } from "react";
// import DateRangePicker from "./DateRangePicker";
// import Graph from "./Graph";
// import Table from "./Table";

// const DiscoverView = () => {
// 	const [, setStartDate] = useState(null);
// 	const [, setEndDate] = useState(null);
// 	const [data, setData] = useState([]);
// 	const [error, setError] = useState(null);

// 	return (
// 		<>
// 			{error === null ? (
// 				<div className='flex justify-center flex-col'>
// 					<DateRangePicker
// 						setStartDate={setStartDate}
// 						setEndDate={setEndDate}
// 						setData={setData}
// 						setError={setError}
// 					/>
// 					<div className='border border-solid border-gray-500 m-2.5 p-1 rounded'>
// 						<div className='flex justify-center'>
// 							<Graph data={data} />
// 						</div>
// 						<Table data={data} />
// 					</div>
// 				</div>
// 			) : (
// 				<h2>
// 					Uh oh! There was an error fetching your data! Please try again later
// 				</h2>
// 			)}
// 		</>
// 	);
// };

// export default DiscoverView;
