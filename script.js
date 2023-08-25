import colors from "./data/colors.json" assert { type: 'json' }
import quotes from "./data/quotes.json" assert { type: 'json' }


function getQuote() {
	let randomquote = Math.floor(Math.random() * quotes.length);
	let randomcolor = Math.floor(Math.random() * colors.length);
    let currentQuote = quotes[randomquote][0];
    let currentAuthor = quotes[randomquote][1];

    $('html body').animate({
        backgroundColor: colors[randomcolor],
        color: colors[randomcolor]
    }, 500);

    $('blockquote footer').animate({ color: colors[randomcolor] }, 500);

    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);

    $('#quotetext').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text(currentQuote);
    });

    $('#quotesource').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text(currentAuthor);
    });
}

$(() => {
    $('#newquote').on('click', getQuote);

    getQuote();
});
