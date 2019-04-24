function getResult() {
    $("#results").empty();

    $.getJSON("/all", function(data) {
        for (var i = 0; i < data.length; i++) {
            $("#results").prepend("<p class = 'data-entry' data-id=" + data[i]._id + "><span class = 'dataIngredient' data-id=" +
            data[i]._id + ">" + data[i].title + "</span><span class = delete>x</span></p>");

        }
    });
}

getResult();

$go.click(function(event){
    event.preventDefault(); 
    var queryURL = "https://api.edamam.com/search?app_id=f9f1544e&app_key=b4cfa069d95061e8028377fb6e951c1b&from=0&to=6&time=20&q=chicken+cheese+eggs&ingr=5";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        searchResults = response;
        console.log(searchResults);
        $recipeSearchResults.empty();
        searchResults.hits.map(displayResult);
        $recipeSearchResults.append(
            "<button id = 'clearButton' class = 'pure-button'>Clear Search Results</button>"
        );
        });
        $recipeSearch.val("");    
});