const liItems = document.querySelectorAll(".side-bar li");
const liCostItems = document.querySelectorAll(".side-bar .cost li");

liItems.forEach((li) => {
    li.addEventListener("click", () => {
        if (li.classList.contains("hovering")==false){
            li.classList.add("hovering");
        }
        else{
            li.classList.remove("hovering");
        }
        if(li.classList.contains('cost-li')==true){
            liCostItems.forEach((li) => {
                li.classList.remove("hovering");
            })
            li.classList.add("hovering");
        }
    }
)})


