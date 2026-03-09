

const serachTxt = () => {
    return document.getElementById('search-text').value;
    
}

const serachBtn = async() => {

     const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden'); 

    const query = serachTxt();
    const issues = await displaySearchText(query);

    spinner.classList.add('hidden'); 
    displaySearchData(issues);
}



const displaySearchText = async (serachTxt) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${serachTxt}`;
      
   const res = await fetch(url);
    const data = await res.json();
    return data.data;
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
  
    issues.forEach(issue => {
        const div = document.createElement('div');
        div.classList.add('p-2', 'border', 'my-1', 'rounded', 'space=y-3','bg-gray-100');

     
        let content = '';
        for (const key in issue) {
            content += `<strong>${key}:</strong> ${issue[key]}<br>`;
        }

        div.innerHTML = content;
        resultsDiv.appendChild(div);
    });
}