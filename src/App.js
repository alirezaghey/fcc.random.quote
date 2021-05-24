import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./quotes";
import { useState, useEffect } from "react";
import randomQuote from "./quotes";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const quote = randomQuote();
    setQuote(quote);
  }, []);

  const handleClick = () => {
    const quote = randomQuote();
    setQuote(quote);
  };
  return (
    <div className="container">
      <div className="row align-middle">
        <div className="col"></div>

        <div id="quote-box" className="col p-3 border border-primary">
          <div id="text">{quote.quote}</div>
          <div id="author">{quote.author}</div>
          <button id="new-quote" onClick={handleClick}>
            New Quote
          </button>
          <a
            href={`https://twitter.com/intent/tweet?hashtag=quotes&text=${encodeURIComponent(
              '"' + quote.quote + '" ' + quote.author
            )}`}
            target="_top"
            id="tweet-quote"
          >
            tweet quote
          </a>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
