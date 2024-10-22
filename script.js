document.getElementById('replaceButton').addEventListener('click', function() {
    const paragraph = document.getElementById('paragraph').value;
    const wordToReplace = document.getElementById('wordToReplace').value;
    const newWord = document.getElementById('newWord').value;

    const result = paragraph.replace(new RegExp(wordToReplace, 'g'), newWord);
    document.getElementById('result').innerText = result;
});
