var quotes = [
    "“Be yourself; everyone else is already taken.”― Oscar Wilde",
    "“So many books, so little time.”― Frank Zappa",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
    "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
    "“You only live once, but if you do it right, once is enough.”― Mae West",
    "“Be the change that you wish to see in the world.”― Mahatma Gandhi"
  ];

function myFunction() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML =quotes[randomIndex];
  }
