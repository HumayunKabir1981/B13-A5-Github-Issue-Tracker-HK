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
    const issueCount = document.getElementById('issue-count')
    issueCount.innerText = githubs.length;

    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    githubs.forEach(github => {

        const githubCard = document.createElement('div');
        githubCard.innerHTML = `
      <div class=" github-card bg-white w-full h-full rounded-xl py-10 px-5 shadow-sm text-center space-y-4 ">

                <div class="flex justify-between items-center">
                    <img class="h-10 w-10" src="./assets/Open-Status.png" alt="">
                    <span class="bg-yellow-300 rounded-full py-1 px-6 text-sm font-semibold">${github.priority}</span>
                </div>

                <h2 class="text-xl font-bold">
                    ${github.title}
                </h2>
                <p class="text-[#64748B]">${github.description} </p>

                <div class="flex gap-3 items-start">
                    <span class="bg-yellow-300 rounded-full py-1 px-5 flex gap-2 items-center text-sm">
                        <i class="fa-solid fa-bug"></i> ${github.labels[0]}
                    </span>

                    ${github.labels[1] ? `
                    <span class="bg-yellow-500 rounded-full py-1 px-5 flex gap-2 items-center text-sm">
                    <i class="fa-solid fa-life-ring"></i> ${github.labels[1]}
                    </span>
                        ` : ''}

                </div>


                <div class="flex justify-between items-start text-sm text-gray-500 pt-4 ">
                    <div class="flex flex-col space-y-2">
                        <span>#1 by Jon Doe</span>
                        <span>aSSIGN</span>
                    </div>
                     <div class="flex flex-col space-y-2">
                         <span>01/05/2024</span>
                        <span>01/55/2024</span>
                    </div>

                </div>
            </div>
      
      `;

        if (github.status == "open") {

            githubCard.firstElementChild.classList.add('border-t-4', 'border-green-500');
        } else {
            githubCard.firstElementChild.classList.add('border-t-4', 'border-purple-700');

        }

        githubContainer.append(githubCard);
    })
}

loadGithub();