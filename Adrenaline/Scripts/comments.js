function req() {
    fetch('https://jsonplaceholder.typicode.com/comments/1')
        .then(response => response.json())
        .then(json => {
            const name = json.name;
            const body = json.body;
            document.getElementById("story-heading1").innerHTML = name;
            document.getElementById("story-paragraph1").innerHTML = body;
        });
}

req();
