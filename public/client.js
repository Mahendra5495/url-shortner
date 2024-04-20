
function getShortUrl() {
    document
        .getElementById('submitBtn')
        .addEventListener('click', async (e) => {
            e.preventDefault();
            const inputData = document.getElementById('urlInput').value;
            try {
                if (!inputData) {
                    alert('nothing entered');
                    return;
                }
                const response = await fetch('/short', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: inputData }),
                });
                const result = await response.json();
                let resultUrl = window.location.origin + '/' + result.shortUrl;

                resultUrl = resultUrl.replace('http://', '');
                resultUrl = resultUrl.replace('https://', '');
                document.getElementById('urlOutput').textContent = resultUrl;

            } catch (error) {
                console.error('Error:', error);
            }
        });
}

getShortUrl();

