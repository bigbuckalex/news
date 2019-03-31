$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        let search = $(this).val();
        let url = 'https://newsapi.org/v2/top-headlines?'+'q='+search+'&language=en&sortBy=publishedAt'+'&apiKey=8236dbb2862a466183c933236963c805';

        $.get(url, function(res, status){
            let articles = res.articles;
            console.log(articles);
            for(let i=articles.length-1; i>=0; i--){
                $("#news-feed").prepend("<div class='separator'></div><br><h2>"+articles[i].title+"</h2><h6>"+articles[i].source.name+"</h6><br><p>"+articles[i].description+"</p><a class='btn btn-primary' href='"+articles[i].url+"' target='_blank' role='button'>Full Story</a></div><br>");
            }
            $("#num-articles").text("Found "+articles.length+" articles about "+search);
        }).then(function(){
            console.log("done");
        });
    }
});