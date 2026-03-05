

const loadGithubClosed = () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayGithubClosed(data.data)
        });
}



const displayGithubClosed = (githubs) => {   

    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    const issueCount = document.getElementById('issue-count')
    let closedCount = 0;
    githubs.forEach(github => {    

        if (github.status == 'closed') {
            closedCount++;

            const githubCard = document.createElement('div');
            githubCard.innerHTML = `
      <div class="bg-white rounded-xl py-10 px-5 shadow-sm text-center space-y-4">
      <h2 class="text-xl font-bold">${github.title}</h2>
      <p>Meaning /Pronounciation</p>
      <div>${github.description} / ${github.status}</div>
      
      `;
            githubContainer.append(githubCard);

        }

        issueCount.innerText = closedCount;

    })




}