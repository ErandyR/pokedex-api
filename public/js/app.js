$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
    var pokemones = response.results;
    agregarPokemones(pokemones);
});


$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});


var sprite = 0;

function agregarPokemones(pokemones){
    pokemones.forEach(function(pokemon, indice){ 
        var $li = $("<li />", {"data-indice": indice, "data-url": pokemon.url});
        $li.append($("<div />").css("background", "url(assets/img/pokemones_sprite.png)" + sprite + "px 0"));
        $("#lista_pokemones").append($li.append($("<span />").text(pokemon.name)));
        sprite -= 80;
    });
    
};


