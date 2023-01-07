import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
// const QUOTES = [
// 	{ id: "q1", author: "reza", text: "Learning React is fun!" },
// 	{ id: "q2", author: "vahid", text: "Never Give Up!" },
// ];

const AllQuotes = () => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner></LoadingSpinner>
			</div>
		);
	}
	if (error) {
		<p className="centered focused">{error}</p>;
	}

	if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound></NoQuotesFound>;
	}
	return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default AllQuotes;
