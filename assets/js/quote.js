const Generator = {

    getRandom: function() {

        let quotes = [
            {
                content: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
                author: "Confucius"
            },

            {
                content: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
                author: "Gandhi"
            },

            {
                content: "Tout obstacle renforce la détermination. Celui qui s'est fixé un but n'en change pas.",
                author: "Léonard De Vinci"
            },

            {
                content: "La musique donne une âme à nos coeurs et des ailes à la pensée.",
                author: "Platon"
            },

            {
                content:"Que la force me soit donnée de supporter ce qui ne peut être changé et le courage de changer ce qui peut l'être mais aussi la sagesse de distinguer l'un de l'autre.",
                author: "Marc Aurèle"
            },

            {
                content:"Ce que je sais, c’est que je ne sais rien.",
                author: "Socrate"
            },

            {
                content:"Le vrai signe de l’intelligence, ce n’est pas la connaissance, mais l’imagination.",
                author: "Albert Einstein"
            },

            {
                content:"L’homme est un loup pour l’homme",
                author: "Thomas Hobbes"
            },

            {
                content:"La connaissance de l’homme ne peut pas s’étendre au-delà de son expérience propre",
                author: "John Locke"
            },

            {
                content:"N’attends pas que les événements arrivent comme tu le souhaites ; décide de vouloir ce qui arrive et tu seras heureux",
                author: "Epictète"
            },

            {
                content:"L'ennui dans ce monde, c'est que les idiots sont sûrs d'eux et les gens sensés pleins de doutes.",
                author: "Bertrand Russell"
            },

            {
                content:"Il n'y a point de bonheur sans courage, ni de vertu sans combat.",
                author: "Jean-Jacques Rousseau"
            },

            {
                content:"Puisse chacun avoir la chance de trouver justement la conception de la vie qui lui permet de réaliser son maximum de bonheur.",
                author: "Friedrich Nietzsche"
            },

            {
                content:"Toute méchanceté a sa source dans la faiblesse.",
                author: "Sénèque"
            },

            {
                content:"L'homme devrait mettre autant d'ardeur à simplifier sa vie qu'il en met à la compliquer.",
                author: "Henri Bergson"
            }

        ];

        const getQuote = document.getElementById("quote");
        const getAuthor = document.getElementById("author");
        const button = document.getElementById("button");

        const randNum = Math.floor(Math.random() * quotes.length);

        const displayedQuote = quotes[randNum];

        getQuote.innerText = "\"" + displayedQuote.content + "\"";
        getAuthor.innerText = displayedQuote.author;

    }

};

document.getElementById("button").addEventListener("click", function(){
    Generator.getRandom();
});
