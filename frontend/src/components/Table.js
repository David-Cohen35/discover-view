// import React, { useState, useEffect } from "react";
// import { Button, Table } from "react-bootstrap";

// export default function DataTable({ data }) {
// 	const [tableData, setTableData] = useState([]);
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const [pageSize, setPageSize] = useState(5);
// 	const [totalPages, setTotalPages] = useState(1);

// 	useEffect(() => {
// 		setPageSize(5);
// 		setTotalPages(Math.ceil(data.length / pageSize));
// 		const startIndex = (currentPage - 1) * pageSize;
// 		const endIndex = startIndex + pageSize;
// 		setTableData(data.slice(startIndex, endIndex));
// 	}, [data, currentPage, pageSize]);

// 	useEffect(() => {
// 		const startIndex = (currentPage - 1) * pageSize;
// 		const endIndex = startIndex + pageSize;
// 		setTableData(data.slice(startIndex, endIndex));
// 	}, [currentPage, pageSize, data]);

// 	const handlePreviousClick = () => {
// 		setCurrentPage(currentPage - 1);
// 	};

// 	const handleNextClick = () => {
// 		setCurrentPage(currentPage + 1);
// 	};

// 	return (
// 		<>
// 			<Table striped bordered hover>
// 				<thead>
// 					<tr>
// 						<th>Time</th>
// 						<th>Client IP</th>
// 						<th>Geolocation</th>
// 						<th>Request</th>
// 						<th>Response</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{tableData.map((row, index) => (
// 						<tr key={index}>
// 							<td>{new Date(row._source.timestamp).toString().slice(3, 15)}</td>
// 							<td>{row._source.clientip}</td>
// 							<td>{row._source.geo.srcdest}</td>
// 							<td>{row._source.request.substr(0, 30)}</td>
// 							<td>{row._source.response}</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</Table>
// 			<div>
// 				<Button disabled={currentPage === 1} onClick={handlePreviousClick}>
// 					Previous
// 				</Button>
// 				<Button disabled={currentPage === totalPages} onClick={handleNextClick}>
// 					Next
// 				</Button>
// 			</div>
// 		</>
// 	);
// }
