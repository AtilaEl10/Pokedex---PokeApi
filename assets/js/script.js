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

                let ability = data.abilities[0].ability.name;
                $("#ability").text(ability);
                
                //stats
                let hp = data.stats[0].base_stat;
                $("#hp").text(hp);
                let attack = data.stats[1].base_stat;
                $("#attack").text(attack);
                let defense = data.stats[2].base_stat;
                $("#defense").text(defense);
                let speed = data.stats[5].base_stat;
                $("#speed").text(speed);
                let attackSP = data.stats[3].base_stat;
                $("#attackSP").text(attackSP);
                let defenseSP = data.stats[4].base_stat;
                $("#defenseSP").text(defenseSP);

                /// Grafico
                var pokeStats = [
                    hp,
                    attack,
                    defense,
                    speed,
                    attackSP,
                    defenseSP,
                ];
                var pokeStatsName = [
                    'HP',
                    'Ataque',
                    'Defensa',
                    'Velocidad',
                    'Ataque Especial',
                    'Defensa Especial',
                ];

                /* Chart JS */
                var ctx = document.querySelector('#chartContainer');
        
                var pokeGraph = new Chart(ctx, {
                  type: 'radar',
                  data: {
                    labels: pokeStatsName,
                    datasets: [{
                      data: pokeStats,
                      label: pokeName,
                      backgroundColor: 'rgba(239, 83, 80, 0.25)',
                      borderColor: 'rgba(239, 83, 80, 0.5)',
                    }]
                  },
                  options: {
                    scale: {
                      ticks: {
                          suggestedMin: 0,
                          suggestedMax: 200
                      }
                  }
                  }
                });

                // Tipo principal
                const type1 = data.types[0].type.name;
                tipo()
                function tipo () {
                    switch (type1) {
                        case "bug":
                            $("#type1").text("Bicho");
                            $("#bug").removeClass("hide");
                            $(".line").css("background", "#92BC2C");
                        break;
                        case "dark":
                            $("#type1").text("Oscuro");
                            $("#dark").removeClass("hide");
                            $(".line").css("background", "#595761");
                        break;
                        case "dragon":
                            $("#type1").text("Drag??n");
                            $("#dragon").removeClass("hide");
                            $(".line").css("background", "#0C69C8");
                        break;
                        case "electric":
                            $("#type1").text("El??ctrico");
                            $("#electric").removeClass("hide");
                            $(".line").css("background", "#F2D94E");
                        break;
                        case "fairy":
                            $("#type1").text("Hada");
                            $("#fairy").removeClass("hide");
                            $(".line").css("background", "#EE90E6");
                        break;
                        case "fighting":
                            $("#type1").text("Lucha");
                            $("#fighting").removeClass("hide");
                            $(".line").css("background", "#D3425F");
                        break;
                        case "fire":
                            $("#type1").text("Fuego");
                            $("#fire").removeClass("hide");
                            $(".line").css("background", "#FBA54C");
                        break;
                        case "flying":
                            $("#type1").text("Volador");
                            $("#flying").removeClass("hide");
                            $(".line").css("background", "#A1BBEC");
                        break;
                        case "ghost":
                            $("#type1").text("Fantasma");
                            $("#ghost").removeClass("hide");
                            $(".line").css("background", "#5F6DBC");
                        break;
                        case "grass":
                            $("#type1").text("Planta");
                            $("#grass").removeClass("hide");
                            $(".line").css("background", "#5FBD58");
                        break;
                        case "ground":
                            $("#type1").text("Tierra");
                            $("#ground").removeClass("hide");
                            $(".line").css("background", "#DA7C4D");
                        break;
                        case "ice":
                            $("#type1").text("Hielo");
                            $("#ice").removeClass("hide");
                            $(".line").css("background", "#75D0C1");
                        break;
                        case "normal":
                            $("#type1").text("Normal");
                            $("#normal").removeClass("hide");
                            $(".line").css("background", "#A0A29F");
                        break;
                        case "poison":
                            $("#type1").text("Veneno");
                            $("#poison").removeClass("hide");
                            $(".line").css("background", "#B763CF");
                        break;
                        case "psychic":
                            $("#type1").text("Ps??quico");
                            $("#psychic").removeClass("hide");
                            $(".line").css("background", "#FA8581");
                        break;
                        case "rock":
                            $("#type1").text("Roca");
                            $("#rock").removeClass("hide");
                            $(".line").css("background", "#C9BB8A");
                        break;
                        case "steel":
                            $("#type1").text("Acero");
                            $("#steel").removeClass("hide");
                            $(".line").css("background", "#5695A3");
                        break;
                        case "water":
                            $("#type1").text("Agua");
                            $("#water").removeClass("hide");
                            $(".line").css("background", "#539DDF");
                        break;
                    };
                };
                //Tipo Secundario
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
                            $("#type2").text("Drag??n");
                            $("#dragon").removeClass("hide")
                        break;
                        case "electric":
                            $("#type2").text("El??ctrico");
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
                            $("#type2").text("Ps??quico");
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
                };

            }
        })
    });


    // Select
    $("#selectPoke").on("change", function(sel) {
        const pokeName2 = sel.target.value
        const pokeName20 = pokeName2.toLowerCase();
        $(".icon").addClass("hide")
        $("#type2").text("");

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeName20}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                const pokeName2 = data.name.toUpperCase();
                $("#pokeName").text(pokeName2);

                const spriteFront2 = data.sprites.front_default;
                $("#pokeSprite1").attr("src", spriteFront2);

                const spriteBack2 = data.sprites.back_default;
                $("#pokeSprite2").attr("src", spriteBack2);

                let ability = data.abilities[0].ability.name;
                $("#ability").text(ability);
                
                //stats
                let hp = data.stats[0].base_stat;
                $("#hp").text(hp);
                let attack = data.stats[1].base_stat;
                $("#attack").text(attack);
                let defense = data.stats[2].base_stat;
                $("#defense").text(defense);
                let speed = data.stats[5].base_stat;
                $("#speed").text(speed);
                let attackSP = data.stats[3].base_stat;
                $("#attackSP").text(attackSP);
                let defenseSP = data.stats[4].base_stat;
                $("#defenseSP").text(defenseSP);

                /// Grafico
                var pokeStats = [
                    hp,
                    attack,
                    defense,
                    speed,
                    attackSP,
                    defenseSP,
                ];
                var pokeStatsName = [
                    'HP',
                    'Ataque',
                    'Defensa',
                    'Velocidad',
                    'Ataque Especial',
                    'Defensa Especial',
                ];

                /* Chart JS */
                var ctx = document.querySelector('#chartContainer');
        
                var pokeGraph = new Chart(ctx, {
                  type: 'radar',
                  data: {
                    labels: pokeStatsName,
                    datasets: [{
                      data: pokeStats,
                      label: pokeName2,
                      backgroundColor: 'rgba(239, 83, 80, 0.25)',
                      borderColor: 'rgba(239, 83, 80, 0.5)',
                    }]
                  },
                  options: {
                    scale: {
                      ticks: {
                          suggestedMin: 0,
                          suggestedMax: 200
                      }
                  }
                  }
                });

                // Tipo Principal
                const type1b = data.types[0].type.name;
                tipob()
                function tipob () {
                    switch (type1b) {
                        case "bug":
                            $("#type1").text("Bicho");
                            $("#bug").removeClass("hide");
                            $(".line").css("background", "#92BC2C");
                        break;
                        case "dark":
                            $("#type1").text("Oscuro");
                            $("#dark").removeClass("hide");
                            $(".line").css("background", "#595761");
                        break;
                        case "dragon":
                            $("#type1").text("Drag??n");
                            $("#dragon").removeClass("hide");
                            $(".line").css("background", "#0C69C8");
                        break;
                        case "electric":
                            $("#type1").text("El??ctrico");
                            $("#electric").removeClass("hide");
                            $(".line").css("background", "#F2D94E");
                        break;
                        case "fairy":
                            $("#type1").text("Hada");
                            $("#fairy").removeClass("hide");
                            $(".line").css("background", "#EE90E6");
                        break;
                        case "fighting":
                            $("#type1").text("Lucha");
                            $("#fighting").removeClass("hide");
                            $(".line").css("background", "#D3425F");
                        break;
                        case "fire":
                            $("#type1").text("Fuego");
                            $("#fire").removeClass("hide");
                            $(".line").css("background", "#FBA54C");
                        break;
                        case "flying":
                            $("#type1").text("Volador");
                            $("#flying").removeClass("hide");
                            $(".line").css("background", "#A1BBEC");
                        break;
                        case "ghost":
                            $("#type1").text("Fantasma");
                            $("#ghost").removeClass("hide");
                            $(".line").css("background", "#5F6DBC");
                        break;
                        case "grass":
                            $("#type1").text("Planta");
                            $("#grass").removeClass("hide");
                            $(".line").css("background", "#5FBD58");
                        break;
                        case "ground":
                            $("#type1").text("Tierra");
                            $("#ground").removeClass("hide");
                            $(".line").css("background", "#DA7C4D");
                        break;
                        case "ice":
                            $("#type1").text("Hielo");
                            $("#ice").removeClass("hide");
                            $(".line").css("background", "#75D0C1");
                        break;
                        case "normal":
                            $("#type1").text("Normal");
                            $("#normal").removeClass("hide");
                            $(".line").css("background", "#A0A29F");
                        break;
                        case "poison":
                            $("#type1").text("Veneno");
                            $("#poison").removeClass("hide");
                            $(".line").css("background", "#B763CF");
                        break;
                        case "psychic":
                            $("#type1").text("Ps??quico");
                            $("#psychic").removeClass("hide");
                            $(".line").css("background", "#FA8581");
                        break;
                        case "rock":
                            $("#type1").text("Roca");
                            $("#rock").removeClass("hide");
                            $(".line").css("background", "#C9BB8A");
                        break;
                        case "steel":
                            $("#type1").text("Acero");
                            $("#steel").removeClass("hide");
                            $(".line").css("background", "#5695A3");
                        break;
                        case "water":
                            $("#type1").text("Agua");
                            $("#water").removeClass("hide");
                            $(".line").css("background", "#539DDF");
                        break;
                    }
                }
                //Tipo Secundario
                const type2b = data.types[1].type.name;
                tipo2b()
                function tipo2b () {
                    switch (type2b) {
                        case "bug":
                            $("#type2").text("Bicho");
                            $("#bug").removeClass("hide")
                        break;
                        case "dark":
                            $("#type2").text("Oscuro");
                            $("#dark").removeClass("hide")
                        break;
                        case "dragon":
                            $("#type2").text("Drag??n");
                            $("#dragon").removeClass("hide")
                        break;
                        case "electric":
                            $("#type2").text("El??ctrico");
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
                            $("#type2").text("Ps??quico");
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
                };



            }
        })
    });
})