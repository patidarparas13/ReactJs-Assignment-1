let data = [
    {
        "id":0,
        "name":"React | Web",
        "img":"https://miro.medium.com/max/3200/1*EVqCcmCPgpNKxU1wzcTHgw.png",
        "description":"React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
        "id":1,
        "name":"Angular | Web",
        "img":"https://images.ctfassets.net/zojzzdop0fzx/2niEOIroLnnZ5RaQn8CkO0/722eb41774188cdfb1060c525474073c/Angular_full_color_logo.svg__1_.png?w=500&q=50",
        "description":"Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS"
    },
    {
        "id":2,
        "name":"Python| Web, ML, Data Science",
        "img":"https://content.techgig.com/thumb/msid-69443909,width-860,resizemode-4/5-tips-for-beginners-in-Python-programming-language.jpg?50999",
        "description":"DescriptionPython is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991"
    },
    {
        "id":3,
        "name":"Flask | Web",
        "img":"https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png",
        "description":"Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries."
    },
    {
        "id":4,
        "name":"R Programming | Data Science & ML",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT2dHOSIK0Lf6dDs-uYlTJSabyuQZEqz-2Jg&usqp=CAU",
        "description":"R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing."
    },
    {
        "id":5,
        "name":"Julia | Data Science & ML",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ZA9JQc1mIhLoKhUzZ9fZypDqHpp5-3_-Rg&usqp=CAU",
        "description":"Julia is a high-level, high-performance, dynamic programming language. While it is a general purpose language and can be used to write any application, many of its features are well-suited for numerical analysis and computational science. "
    },
  ];
  
  div = document.getElementById("card-list");
  

  console.log(data)
  let render_lists = function(lists){
    let card = "";
    lists.forEach(item =>{
        console.log(item)
      card += `
      <div class="card">
          <img src=${item.img} class="card-img-top" alt=${item.name} style="width:250px;height:200px">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      `
    })
    div.innerHTML = card;
  }
  render_lists(data);
  
  // lets filters it
  input = document.getElementById('filtered_data');
  
  let filterData = function(event){
    keyword = input.value.toLowerCase();
    filtered_data = data.filter(function(item){
          item = item.name.toLowerCase();
         return item.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_data);
  }

  
  input.addEventListener('keyup', filterData);
  
  
