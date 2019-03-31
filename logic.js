// let query = document.getElementById("search").value;

// console.log(query);

$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        let search = $(this).val();
        let url = 'https://newsapi.org/v2/everything?' +
        'q='+search+'&' +
        'apiKey=8236dbb2862a466183c933236963c805';

        $.get(url, function(res, status){
            let articles = res.articles;
            for(let i=0; i<articles.length; i++){
                $("#news-feed").append("<h3>"+articles[i].title+"</h3><h6>"+articles[i].source.name+"</h6><p>"+articles[i].description+"</p><a class='btn btn-primary' href='"+articles[i].url+"' target='_blank' role='button'>Full Story</a></div>");
            }
        });
    }
});

// axios.get("https://newsapi.org/v2/everything?q=" + query + "&sortBy=publishedAt&apiKey=8236dbb2862a466183c933236963c805")
//     .then((res)=>{

//     })