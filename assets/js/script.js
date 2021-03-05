$("document").ready(function(){
   
    // Agregando lista al select del html
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
        type: "GET",
        dataType: "JSON",
        success: function(pokemones) {
            const pokedex = pokemones.results;
            const pokedexName = pokedex.map(function(el) {
                return el.name.toUpperCase();
            });
            pokedexName.forEach(function(element) {
                $("#selectPoke").append(
                    `<option value="${element}">${element}</option>`
                )
            })
                
        }
    })

    //Input
    $("#buttonPoke1").click(function(){
        const pokeName = $("#inputPoke").val()
        const pokeName0 = pokeName.trim().toLowerCase();

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeName0}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                const pokeName = data.name.toUpperCase();
                $("#pokeName").text(pokeName);

                const spriteFront = data.sprites.front_default;
                $("#pokeSprite1").attr("src", spriteFront);

                const spriteBack = data.sprites.back_default;
                $("#pokeSprite2").attr("src", spriteBack);

                const type1 = data.types[0].type.name;
                tipo()
                function tipo () {
                    switch (type1) {
                        case "bug":
                        $("#type1").text("Bicho");
                        break;
                        case "dark":
                            $("#type1").text("Oscuro");
                        break;
                        case "dragon":
                            $("#type1").text("Dragón");
                        break;
                        case "electric":
                            $("#type1").text("Eléctrico");
                        break;
                        case "fairy":
                        $("#type1").text("Hada");
                        break;
                        case "fighting":
                            $("#type1").text("Lucha");
                        break;
                        case "fire":
                            $("#type1").text("Fuego");
                        break;
                        case "flying":
                            $("#type1").text("Volador");
                        break;
                        case "ghost":
                        $("#type1").text("Fantasma");
                        break;
                        case "grass":
                            $("#type1").text("Planta");
                        break;
                        case "ground":
                            $("#type1").text("Tierra");
                        break;
                        case "ice":
                            $("#type1").text("Hielo");
                        break;
                        case "normal":
                        $("#type1").text("Normal");
                        break;
                        case "poison":
                            $("#type1").text("Veneno");
                        break;
                        case "psychic":
                            $("#type1").text("Psíquico");
                        break;
                        case "rock":
                            $("#type1").text("Roca");
                        break;
                        case "steel":
                        $("#type1").text("Acero");
                        break;
                        case "water":
                            $("#type1").text("Agua");
                        break;
                    }
                }
                const ability = data.abilities[0].ability.name;
                $("#ability").text(ability);

                //stats
                const hp = data.stats[0].base_stat;
                $("#hp").text(hp);
                const attack = data.stats[1].base_stat;
                $("#attack").text(attack);
                const defense = data.stats[2].base_stat;
                $("#defense").text(defense);
                const speed = data.stats[0].base_stat;
                $("#speed").text(speed);
                const attackSP = data.stats[3].base_stat;
                $("#attackSP").text(attackSP);
                const defenseSP = data.stats[4].base_stat;
                $("#defenseSP").text(defenseSP);
            }
        })
    });


    // Select
    $("#selectPoke").on("change", function(sel) {
        const pokeName2 = sel.target.value
        const pokeName20 = pokeName2.toLowerCase();
    });


})