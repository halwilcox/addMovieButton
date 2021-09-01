function addMovie(event){
    let inputField = document.querySelector('input'); 
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click' deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}
function deleteMovie(event) {
    console.log(event);
    event.target.parentNode.remove()
    MessageChannel.textContent = "Movie deleted!"
}
document.querySelector('form').addEventListener('submit', (event) => {
    addMovie();
    event.preventDefault();
})
function crossOffMovie(event) {
    event.target.classList.toggle("checked;")
}
