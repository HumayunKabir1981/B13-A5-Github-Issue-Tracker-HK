const removeActive = () => {
    const button = document.querySelectorAll(".js-btn")
    button.forEach(btn => btn.classList.remove("btn-active"))

}



// const btnAll = () => {
//     removeActive();
//     const clickBtn = document.getElementById('btn-all')
//     clickBtn.classList.add("btn-active")

//     loadGithub();

// }

// const btnOpen = () => {
//     removeActive();
//     const clickBtn = document.getElementById('btn-open')
//     clickBtn.classList.add("btn-active")
//     loadGithubOpen();

// }

// const btnClose = () => {
//     removeActive();
//     const clickBtn = document.getElementById('btn-close')
//     clickBtn.classList.add("btn-active")

//     loadGithubClosed();
// }



const displayDetail=(id)=>{
     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
   
       fetch(url)
        .then(res => res.json())
        .then(data =>  {
            showDetail(data.data)
        });    
}

const showDetail=(githubDetail)=>{
    const detailBox=document.getElementById('detail-container');
detailBox.innerHTML=`
<h1 class="text-xl font-bold">${githubDetail.title} </h1>
<span class="bg-green-300 rounded-full py-1 px-6 text-sm font-semibold">${githubDetail.status}</span>
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



const loadGithub = async() => {
 removeActive();
    const clickBtn = document.getElementById('btn-all')
    clickBtn.classList.add("btn-active")

    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden'); 

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         displayGithub(data.data)
    //     });

 const res = await fetch(url);
    const data = await res.json();
     spinner.classList.add('hidden'); 
        displayGithub(data.data)

    }



const displayGithub = (githubs) => {
    const issueCount = document.getElementById('issue-count')
    issueCount.innerText = githubs.length;



    const githubContainer = document.getElementById('github-container');
    githubContainer.innerHTML = "";
    githubs.forEach(github => {       

        const githubCard = document.createElement('div');
        githubCard.innerHTML = `
      <div onclick="displayDetail(${github.id})" class=" github-card bg-white w-full h-full rounded-xl py-10 px-5 shadow-sm text-center space-y-4 ">

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
                        <span>Assignee: ${github.assignee}</span>
                    </div>
                     <div class="flex flex-col space-y-2">
                         <span>${github.createdAt}</span>
                        <span> Update: ${github.updatedAt}</span>
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

// function display(id){
//      const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
//     console.log(url);
    
// }