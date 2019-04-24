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
    var queryURL = "https://api.edamam.com/search?q="+ $recipeSearch.val().trim() +"&app_id=6583a79d&app_key=93bec4e601bf90a471e895c23340a574";
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