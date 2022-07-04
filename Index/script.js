

const url = {
    cinemas: "https://api.themoviedb.org/3/movie/upcoming?region=BR&api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt",
    kid: "https://api.themoviedb.org/3/movie/top_rated?api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt",
    Popularidade: "https://api.themoviedb.org/3/movie/now_playing?region=BR&api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt"
}
const $img = document.querySelectorAll(".img");
const $id = document.querySelectorAll(".classf");
const $title = document.querySelectorAll(".movie-titile");
const $container = document.querySelectorAll(".container")
const $input = document.getElementById("input")
const $titlep = document.querySelector(".titlesearch")
const $movies = document.querySelectorAll(".movies")
const $year = document.querySelectorAll(".year")
const $thumblain = document.querySelector(".thumblain")
const $detailsmovies = document.querySelector(".detailsmovies")
const $modalcontent = document.querySelector(".modal-content")
let contadora = 0;
let year;

async function  titulos (key){
    const resp = await fetch(key)
    const data = await resp.json()
    console.log(data)
    for(let i=0; i<8; i++){
        $img[contadora].src = `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`
        $title[contadora].innerHTML =`${data.results[i].title}`
        $id[contadora].innerHTML =`${data.results[i].id}`
        year = new Date(data.results[i].release_date)
        $year[contadora].innerHTML =`${year.getFullYear().toString()}`
        contadora++
    }
}


function subir(){
    /*const posicoes = $movies[0].getBoundingClientRect(); //- pegar as posições da tag
    console.log(posicoes)*/
    window.scrollTo({
        top: 513,
        behavior: "smooth"
    })
}

(async () =>{
    await titulos(url.Popularidade)
    await titulos(url.cinemas)
    await titulos(url.kid)
})()




async function Search(){
    subir()
    if($input.value.length > 0){
        let start = 0;
        for(let i =1; i< $container.length; i++){
            $container[i].style.cssText="display: none;"
            if($img[i].classList.contains("imgclose")){
                $img[i].classList.remove("imgclose")
                $img[i].classList.add("img")
            }
        }
        const url = `https://api.themoviedb.org/3/search/movie?api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt&query=${$input.value}`
        const response = await fetch(url)   
        const result = await response.json()
        console.log(result)
        $titlep.innerHTML = "TÍTULOS"
        if(result.results.length<8){
            $movies[start].style.cssText="opacity: 1; box-shadow: 0 0 20px 0 rgba( 1, 180, 228, .1);"
            const control = 8 - result.results.length;
            for(let i=0; i<result.results.length; i++){
                if(result.results[i].poster_path != null){
                    $img[i].src = `https://image.tmdb.org/t/p/original/${result.results[i].poster_path}`
                }else{
                    $img[i].src = "https://th.bing.com/th/id/R.cbe2aa06fac86af474641c5cfdb8e09d?rik=GAs9xxSZBr8LVA&riu=http%3a%2f%2fwww.clubedossargentos.com.br%2fimg%2fdiretores%2funnamed.jpg&ehk=D7476M4VpXgRTdfOTL9Yx8MAOMHSun6fjZhA25cBMP0%3d&risl=&pid=ImgRaw&r=0"
                }
                $title[i].innerHTML =`${result.results[i].title}`
                year = new Date(result.results[i].release_date)
                $year[i].innerHTML =`${year.getFullYear().toString()}`
                start++
            }  
            for(let i=0; i<control; i++){
                $img[start].classList.remove("img")
                $img[start].classList.add("imgclose")
                $movies[start].style.cssText="opacity: 0; box-shadow: none;"
                start++
            }  

        }else{
            for(let i=0; i<8; i++){
                if($img[i].classList.contains("imgclose")){
                    $img[i].classList.remove("imgclose")
                    $img[i].classList.add("img")
                }
                $movies[i].style.cssText="opacity: 1; box-shadow: 0 0 20px 0 rgba( 1, 180, 228, .1);"
                if(result.results[i].poster_path != null){
                    $img[i].src = `https://image.tmdb.org/t/p/original/${result.results[i].poster_path}`
                }else{
                    $img[i].src = "https://th.bing.com/th/id/R.cbe2aa06fac86af474641c5cfdb8e09d?rik=GAs9xxSZBr8LVA&riu=http%3a%2f%2fwww.clubedossargentos.com.br%2fimg%2fdiretores%2funnamed.jpg&ehk=D7476M4VpXgRTdfOTL9Yx8MAOMHSun6fjZhA25cBMP0%3d&risl=&pid=ImgRaw&r=0"
                }
                $title[i].innerHTML =`${result.results[i].title}`
                year = new Date(result.results[i].release_date)
                $year[i].innerHTML =`${year.getFullYear().toString()}`
            }
        }

    }
}

$movies.forEach(element => {
    element.addEventListener("click", () => {
        (element.style.opacity == "0")? 
        event.preventDefault()
        : exibirModal(element.children[2].children[1].textContent);
    })
});


async function exibirModal(id){
    const movie = await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt
    `)
    const moviedata = await movie.json()
    ligar()
    console.log(moviedata)
    $thumblain.style.cssText =`
        background: rgba( 13, 37, 63, .9) url("https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}") no-repeat center;
        background-size: cover;
    `
    $detailsmovies.innerHTML =`
        <p>Título: <span>${moviedata.title}</span></p>
        <p>Título Original: <span>${moviedata.original_title}</span></p>
        <p>tagline: <span>${moviedata.tagline}</span></p>
        <p>overview: <span>${moviedata.overview}</span></p>
        <p>popularidade: <span>${moviedata.popularity}</span></p>
        <p>Data de Lançamento: <span>${moviedata.release_date}</span></p>    
    `

}


function ligar(){document.querySelector(".modal").style.display="block"
}
function exit(){document.querySelector(".modal").style.display="none"}



/*
*Criar vinculo do evento click com os dados da pesquisa
*Melhorar o exit do modal
*Adicionar algumas animações para melhorar o projeto
*/