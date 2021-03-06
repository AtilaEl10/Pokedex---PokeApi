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
        $(".icon").addClass("hide")
        $("#type2").text("");

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
                            $("#bug").removeClass("hide")
                        break;
                        case "dark":
                            $("#type1").text("Oscuro");
                            $("#dark").removeClass("hide")
                        break;
                        case "dragon":
                            $("#type1").text("Dragón");
                            $("#dragon").removeClass("hide")
                        break;
                        case "electric":
                            $("#type1").text("Eléctrico");
                            $("#electric").removeClass("hide")
                        break;
                        case "fairy":
                            $("#type1").text("Hada");
                            $("#fairy").removeClass("hide")
                        break;
                        case "fighting":
                            $("#type1").text("Lucha");
                            $("#fighting").removeClass("hide")
                        break;
                        case "fire":
                            $("#type1").text("Fuego");
                            $("#fire").removeClass("hide")
                        break;
                        case "flying":
                            $("#type1").text("Volador");
                            $("#flying").removeClass("hide")
                        break;
                        case "ghost":
                            $("#type1").text("Fantasma");
                            $("#ghost").removeClass("hide")
                        break;
                        case "grass":
                            $("#type1").text("Planta");
                            $("#grass").removeClass("hide")
                        break;
                        case "ground":
                            $("#type1").text("Tierra");
                            $("#ground").removeClass("hide")
                        break;
                        case "ice":
                            $("#type1").text("Hielo");
                            $("#ice").removeClass("hide")
                        break;
                        case "normal":
                            $("#type1").text("Normal");
                            $("#normal").removeClass("hide")
                        break;
                        case "poison":
                            $("#type1").text("Veneno");
                            $("#poison").removeClass("hide")
                        break;
                        case "psychic":
                            $("#type1").text("Psíquico");
                            $("#psychic").removeClass("hide")
                        break;
                        case "rock":
                            $("#type1").text("Roca");
                            $("#rock").removeClass("hide")
                        break;
                        case "steel":
                            $("#type1").text("Acero");
                            $("#steel").removeClass("hide")
                        break;
                        case "water":
                            $("#type1").text("Agua");
                            $("#water").removeClass("hide")
                        break;
                    }
                }

                const type2 = data.types[1].type.name;
                tipo2()
                function tipo2 () {
                    switch (type2) {
                        case "bug":
                            $("#type2").text("Bicho");
                            $("#bug").removeClass("hide")
                        break;
                        case "dark":
                            $("#type2").text("Oscuro");
                            $("#dark").removeClass("hide")
                        break;
                        case "dragon":
                            $("#type2").text("Dragón");
                            $("#dragon").removeClass("hide")
                        break;
                        case "electric":
                            $("#type2").text("Eléctrico");
                            $("#electric").removeClass("hide")
                        break;
                        case "fairy":
                            $("#type2").text("Hada");
                            $("#fairy").removeClass("hide")
                        break;
                        case "fighting":
                            $("#type2").text("Lucha");
                            $("#fighting").removeClass("hide")
                        break;
                        case "fire":
                            $("#type2").text("Fuego");
                            $("#fire").removeClass("hide")
                        break;
                        case "flying":
                            $("#type2").text("Volador");
                            $("#flying").removeClass("hide")
                        break;
                        case "ghost":
                            $("#type2").text("Fantasma");
                            $("#ghost").removeClass("hide")
                        break;
                        case "grass":
                            $("#type2").text("Planta");
                            $("#grass").removeClass("hide")
                        break;
                        case "ground":
                            $("#type2").text("Tierra");
                            $("#ground").removeClass("hide")
                        break;
                        case "ice":
                            $("#type2").text("Hielo");
                            $("#ice").removeClass("hide")
                        break;
                        case "normal":
                            $("#type2").text("Normal");
                            $("#normal").removeClass("hide")
                        break;
                        case "poison":
                            $("#type2").text("Veneno");
                            $("#poison").removeClass("hide")
                        break;
                        case "psychic":
                            $("#type2").text("Psíquico");
                            $("#psychic").removeClass("hide")
                        break;
                        case "rock":
                            $("#type2").text("Roca");
                            $("#rock").removeClass("hide")
                        break;
                        case "steel":
                            $("#type2").text("Acero");
                            $("#steel").removeClass("hide")
                        break;
                        case "water":
                            $("#type2").text("Agua");
                            $("#water").removeClass("hide")
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