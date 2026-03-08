const loadGithubOpen = () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayGithubOpen(data.data)
        });
}

const displayDetailOpen=(id)=>{
     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
   
       fetch(url)
        .then(res => res.json())
        .then(data =>  {
            showDetailOpen(data.data)
        });    
}

const showDetailOpen=(githubDetail)=>{
    const detailBox=document.getElementById('detail-container');
detailBox.innerHTML=`

<h1 class="text-xl font-bold">${githubDetail.title} </h1>
<span class="bg-green-300 rounded-full py-1 px-6 text-sm font-semibold">open</span>
        <i class="fa-solid fa-circle text-xs"></i>
        <span>open by ${githubDetail.author} </span>     
        <i class="fa-solid fa-circle text-xs"></i>
         <span>open date: ${githubDetail.createdAt} </span>

                  <div class="flex gap-3 items-start">
                    <span class="bg-yellow-300 rounded-full py-1 px-5 flex gap-2 items-center text-sm">
                        <i class="fa-solid fa-bug"></i> ${githubDetail.labels[0]}
                    </span>

                    ${githubDetail.labels[1] ? `
                    <span class="bg-yellow-500 rounded-full py-1 px-5 flex gap-2 items-center text-sm">
                    <i class="fa-solid fa-life-ring"></i> ${githubDetail.labels[1]}
                    </span>
                        ` : ''}
                </div>
                <p class="text-[#64748B]">${githubDetail.description} </p>

                     <div class="flex justify-around">
                    <div>
                        <h4>Assignee:</h4>
                        <h4 class="text-xl font-semibold">${githubDetail.assignee}</h4>
                    </div>
                  
                      <div>
                        <h4>Priority:</h4>
                        <h4 class="bg-amber-300 rounded-full py-1 px-5 flex gap-2 items-center font-semibold">${githubDetail.priority}</h4>
                    </div>
                   
                </div>


`;
document.getElementById('my_modal_5').showModal();

}


const displayGithubOpen = (githubs) => {

    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    const issueCount = document.getElementById('issue-count')
    let openCount = 0;
    githubs.forEach(github => {

        if (github.status == "open") {
            openCount++;

            const githubCard = document.createElement('div');
            githubCard.innerHTML = `
      <div onclick="displayDetailOpen(${github.id})" onclick="my_modal_5.showModal()" class=" github-card bg-white w-full h-full rounded-xl py-10 px-5 shadow-sm text-center space-y-4 ">

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
                        <span>#1 by ${github.author}</span>
                        <span> Assignee: ${github.assignee}</span>
                    </div>
                     <div class="flex flex-col space-y-2">
                         <span>${github.createdAt}</span>
                        <span> Update: ${github.updatedAt}</span>
                    </div>

                </div>
            </div>
      
      `;
            githubCard.firstElementChild.classList.add('border-t-4', 'border-green-500');

            githubContainer.append(githubCard);

        }

        issueCount.innerText = openCount;

    })




}