/*get a fact from api*/
const factGenerator = {
    "async": true,
    "crossDomain": true,
    "url": "https://random-facts2.p.rapidapi.com/getfact",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "e90c68dd99msh3253b0ccc90a8bdp1279b0jsnbcfbb08e8a29",
        "X-RapidAPI-Host": "random-facts2.p.rapidapi.com"
    }
};

$.ajax(factGenerator).done(function (response) {
    let fact = response.Fact;
    /*translate the generated fact via text-translator api*/
    const translate = {
        "async": true,
        "crossDomain": true,
        "url": "https://text-translator2.p.rapidapi.com/translate",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "e90c68dd99msh3253b0ccc90a8bdp1279b0jsnbcfbb08e8a29",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
        },
        "data": {
            "source_language": "en",
            "target_language": "ar",
            "text": `${fact}`
        }
    };

    $.ajax(translate).done(function (data) {
        let arFact = data.data.translatedText;
        /*display translated fact*/
        $('.fact-ar').append( `<q>${arFact}</q>` );
    });
    /*display original fact*/
    $('.fact').append( `<q>${fact}</q>` );
});
/*get new fact via Button*/
$('.get-fact').click(function() {
    location.reload();
});



