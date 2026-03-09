console.log("search Data");


const serachTxt = () => {
    return document.getElementById('search-text').value;
    
}

const serachBtn = () => {
    const text = serachTxt(); 
    displaySearchText(text); 
}



const displaySearchText = (serachTxt) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${serachTxt}`;
      
    fetch(url)
        .then(res => res.json())
        .then(data => {
             displaySearchData(data.data)
        });
}

const displaySearchData = (issues) => {

    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    const resultsDiv = document.getElementById('searchText-container');
    resultsDiv.innerHTML = '';

    
    if (!issues || issues.length === 0) {
        resultsDiv.textContent = 'No results found';
        return;
    }

    // প্রতিটা object show করা
    issues.forEach(issue => {
        const div = document.createElement('div');
        div.classList.add('p-2', 'border', 'my-1', 'rounded', 'bg-gray-50');

        // object এর প্রতিটি property dynamically দেখানো
        let content = '';
        for (const key in issue) {
            content += `<strong>${key}:</strong> ${issue[key]}<br>`;
        }

        div.innerHTML = content;
        resultsDiv.appendChild(div);
    });
}