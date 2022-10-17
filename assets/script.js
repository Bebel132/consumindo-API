function renderMovie(movie) {
    let container = document.createElement("div");
    container.classList.add("filme");

    let img = document.createElement("img");
    img.src = movie.image;
    img.classList.add("filme_img");

    let filme_info_container = document.createElement("div");
    filme_info_container.classList.add("filme_informacoes");

    let title = document.createElement("span");
    title.classList.add("filme-informacoes_titulo");
    title.append(document.createTextNode(`${movie.title} (${(movie.year)})`));

    filme_info_container.append(title);
    let quantitativas = document.createElement("div");
    quantitativas.classList.add("filme-informacoes_quantitativas");
    let container_nota = document.createElement("div");
    container_nota.classList.add("filme-informacoes_nota");
    let star = document.createElement("i");
    star.classList.add("fa-solid");
    star.classList.add("fa-star");
    container_nota.append(star);
    let container_fav = document.createElement("div");
    container_fav.classList.add("filme-informacoes_favoritar");
    let heart = document.createElement("i");
    heart.classList.add("fa-regular");
    heart.classList.add("fa-heart");
    container_fav.append(heart);
    let favoritar = document.createElement("span");
    favoritar.append(document.createTextNode("Favoritar"));
    container_fav.append(favoritar);

    quantitativas.append(container_nota);
    quantitativas.append(container_fav);
    filme_info_container.append(quantitativas);

    let rating = document.createElement("span");
    rating.append(document.createTextNode(movie.rating));
    container_nota.append(rating);

    let sinopse_container = document.createElement("div");
    sinopse_container.classList.add("filme-sinopse");

    let description = document.createElement("span");
    description.append(document.createTextNode(movie.description));
    sinopse_container.append(description);

    container.append(img);
    container.append(filme_info_container);
    container.append(sinopse_container);

    document.querySelector(".filmes-container").append(container);

}

const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: "Descrição do filme…",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: false
  },
];

movies.forEach(movie => renderMovie(movie));