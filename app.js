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

