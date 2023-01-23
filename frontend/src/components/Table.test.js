// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Table from "./Table";

// describe("Table", () => {
// 	const data = [
// 		{
// 			_source: {
// 				timestamp: "2022-01-01T00:00:00Z",
// 				clientip: "1.2.3.4",
// 				geo: { srcdest: "US" },
// 				request: "GET /home",
// 				response: 400,
// 			},
// 		},
// 		{
// 			_source: {
// 				timestamp: "2022-01-02T00:00:00Z",
// 				clientip: "5.6.7.8",
// 				geo: { srcdest: "CA" },
// 				request: "GET /about",
// 				response: 200,
// 			},
// 		},
// 		// ... more data
// 	];

// 	it("renders the table with the correct data", () => {
// 		render(<Table data={data} />);

// 		expect(screen.getByText("1.2.3.4")).toBeInTheDocument();
// 		expect(screen.getByText("US")).toBeInTheDocument();
// 		expect(screen.getByText("GET /home")).toBeInTheDocument();
// 		expect(screen.getByText("200")).toBeInTheDocument();
// 	});

// 	it('disables the "Previous" button on the first page', () => {
// 		render(<Table data={data} />);

// 		const prevButton = screen.getByText("Previous");
// 		expect(prevButton).toBeDisabled();
// 	});

// 	it('disables the "Next" button on the last page', () => {
// 		render(<Table data={data} />);

// 		const nextButton = screen.getByText("Next");
// 		expect(nextButton).toBeDisabled();
// 	});

// 	it('navigates to the next page when the "Next" button is clicked', () => {
// 		render(<Table data={data} />);

// 		const nextButton = screen.getByText("Next");
// 		fireEvent.click(nextButton);

// 		expect(screen.getByText("5.6.7.8")).toBeInTheDocument();
// 		expect(screen.getByText("CA")).toBeInTheDocument();
// 		expect(screen.getByText("GET /about")).toBeInTheDocument();
// 		expect(screen.getByText("200")).toBeInTheDocument();
// 	});

// 	it('navigates to the previous page when the "Previous" button is clicked', () => {
// 		render(<Table data={data} />);

// 		const nextButton = screen.getByText("Next");
// 		fireEvent.click(nextButton);

// 		const prevButton = screen.getByText("Previous");
// 		fireEvent.click(prevButton);

// 		expect(screen.getByText("1.2.3.4")).toBeInTheDocument();
// 		expect(screen.getByText("US")).toBeInTheDocument();
// 		expect(screen.getByText("GET /home")).toBeInTheDocument();
// 		expect(screen.getByText("200")).toBeInTheDocument();
// 	});
// });
