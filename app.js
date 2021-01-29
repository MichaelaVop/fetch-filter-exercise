//get result element
//get input filter element
//define an array variable
const result = document.querySelector('#result');
const inputFilter = document.querySelector('#filter');
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    filterData(e.target.value.toLowerCase());
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50&inc=gender,name,location,picture')
    
    const { results } = await res.json();

    // Clear result
    results.innerHTML = '';

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div

    for (const userData of results) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        result.appendChild(li);
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(h4);
        div.appendChild(p);

        img.src = `${userData.picture.medium}`;
        h4.innerHTML = `${userData.name.first} ${userData.name.last}`;
        p.innerHTML = `${userData.location.state}\n ${userData.location.city}`; 
        
        listItems.push(li);
    }  
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        const search = item.innerText.toLowerCase();
        // add conditional logic below 
        if(search.includes(searchTerm, 0)) {
            //remove the class of .hide
            item.classList.remove('hide');
        } else {
            //add the class of .hide
            item.classList.add('hide');
        }
    })
}
