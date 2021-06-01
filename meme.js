document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("meme-form");
    let memeList = document.querySelector(".meme-item");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        // create the li element

        let list = document.createElement('li');
        list.classList.add("meme-img");

        // create canvas element to put our img background

        let urlInput = document.getElementById("imageURL").value,
        src = urlInput,
        img = document.createElement('img');
        img.src = src;

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;
        
        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;
        
        let removeDiv = document.createElement('div');
        removeDiv.classList.add("delete");
        removeDiv.innerText = "X"

        memeList.append(list);
        list.append(img);
        list.append(topTextDiv);
        list.append(bottomTextDiv);
        list.append(removeDiv);
        
        form.reset();
    });

    function remove(event){
        event.target.parentNode.remove();
    }
    
    memeList.addEventListener('click', remove, false);
});

