console.log("Script is running...")
class BlogPost{}

//The Blog Class is responsible for initializing our blog, adding new posts (i. e. via new instances of the blogpost, and redering the data to the html)
document.addEventListener("DOMContentLoaded",()=>);
class Blog {
    constructor() {
        this.post = []
    }
    initialize(){
        const addButton = document.getElementById("addPostBtn");
        addButton.addEventListener("click", ()=>{

            const title =document.getElementById("titltInput").value;
            const content =document.getElementById("contentInput").value;
            console.log(title, content);
            if (title && content)
        });  
    }
}