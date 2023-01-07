import QuoteList from "../components/quotes/QuoteList";
const QUOTES = [
	{ id: "q1", author: "reza", text: "Learning React is fun!" },
	{ id: "q2", author: "vahid", text: "Never Give Up!" },
];

const AllQuotes = () => {
	return <QuoteList quotes={QUOTES}></QuoteList>;
};

export default AllQuotes;
