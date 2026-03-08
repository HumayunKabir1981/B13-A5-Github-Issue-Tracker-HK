const removeActive = () => {
    const button = document.querySelectorAll(".js-btn")
    button.forEach(btn => btn.classList.remove("btn-active"))

}



const btnAll = () => {
    removeActive();
    const clickBtn = document.getElementById('btn-all')
    clickBtn.classList.add("btn-active")

    loadGithub();

}

const btnOpen = () => {
    removeActive();
    const clickBtn = document.getElementById('btn-open')
    clickBtn.classList.add("btn-active")
loadGithubOpen();

}

const btnClose = () => {
    removeActive();
    const clickBtn = document.getElementById('btn-close')
    clickBtn.classList.add("btn-active")

    loadGithubClosed();
}





const loadGithub = () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayGithub(data.data)
        });
}



const displayGithub = (githubs) => {
    const issueCount=document.getElementById('issue-count')
    issueCount.innerText=githubs.length;

    console.log(githubs.length);
    
    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    githubs.forEach(github => {
        const githubCard = document.createElement('div');
        githubCard.innerHTML = `
      <div class="bg-white rounded-xl py-10 px-5 shadow-sm text-center space-y-4">
      <h2 class="text-xl font-bold">${github.title}</h2>
      <p>Meaning /Pronounciation</p>
      <div>${github.description} / ${github.status}</div>

      
      `;
        githubContainer.append(githubCard);
    })
}

 loadGithub();