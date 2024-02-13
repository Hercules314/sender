function translateMessage(inputMessage, targetLanguage) {
    const translationsContainer = document.getElementById('translations');
    translationsContainer.innerHTML = '';  // Clear previous translations

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(inputMessage)}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            const listItem = document.createElement('p');
            listItem.textContent = `${targetLanguage.toUpperCase()}: ${translatedText}`;
            translationsContainer.appendChild(listItem);
        })
        .catch(error => console.error('Translation error:', error));
}
