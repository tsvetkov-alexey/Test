function fetchQuote() {
  const script = document.createElement('script');
  const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=ru&jsonp=parseQuote';
  script.src = url;
  document.head.appendChild(script);
}

function parseQuote(response) {
  const quoteText = response.quoteText;
  const quoteAuthor = response.quoteAuthor;
  const expression = document.createElement('div');
  expression.classList.add('expression');
  expression.innerHTML = `<p class="quote">${quoteText}</p><p class="author">- ${quoteAuthor}</p>`;
  document.querySelector('.center-info').insertAdjacentElement('beforeend', expression);
}

fetchQuote();

const button = document.querySelector('button');

function disableButton() {
    button.disabled = true; 
    setTimeout(() => {
        button.disabled = false; 
    }, 2000);
}

button.addEventListener('click', () => {
    disableButton();
});