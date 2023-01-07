import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const QUOTES = [
	{ id: "q1", author: "reza", text: "Learning React is fun!" },
	{ id: "q2", author: "vahid", text: "Never Give Up!" },
];
const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();
	const quote = QUOTES.find((quote) => quote.id === params.quoteId);
	console.log(match);
	if (!quote) return <p>No Quote Found!</p>;

	return (
		<Fragment>
			<HighlightedQuote
				text={quote.text}
				author={quote.author}
			></HighlightedQuote>
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
