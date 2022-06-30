const url = {
    kid: "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt",
    Popularidade: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt",
    cinemas: "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-04-01&primary_release_date.lte=2022-05-02&api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt"
}
const $img = document.querySelectorAll(".img");
const $id = document.querySelectorAll(".classf");
const $title = document.querySelectorAll(".movie-titile");
const $container = document.querySelectorAll(".container")
const $input = document.getElementById("input")
const $titlep = document.querySelector(".titlesearch")
const $movies = document.querySelectorAll(".movies")
let contadora = 0;

async function  titulos (key){
    const resp = await fetch(key, {
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjc4ZWMzN2EyMGRiNzZmYWRkMmE4ZDAwNWVmYzUxNSIsInN1YiI6IjYyOTIxNGY3ZmI4MzQ2MDA1MDcwZWQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcmFkAQHRjv4XyGuzjdwYHJveBiKD9LYa32om1XOGnc' 
        }
    })
    const data = await resp.json()
    console.log(data)
    for(let i=0; i<8; i++){
        $img[contadora].src = `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`
        $title[contadora].innerHTML =`${data.results[i].title}`
        $id[contadora].innerHTML =`${data.results[i].id}`
        contadora++
    }
}


async function Search(){
    subir()
    if($input.value.length > 0){
        let start = 0;
        for(let i =1; i< $container.length; i++){
            $container[i].style.cssText="display: none;"
        }
        const url = `https://api.themoviedb.org/3/search/movie?api_key=fb78ec37a20db76fadd2a8d005efc515&language=pt&query=${$input.value}`
        const response = await fetch(url, {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjc4ZWMzN2EyMGRiNzZmYWRkMmE4ZDAwNWVmYzUxNSIsInN1YiI6IjYyOTIxNGY3ZmI4MzQ2MDA1MDcwZWQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcmFkAQHRjv4XyGuzjdwYHJveBiKD9LYa32om1XOGnc' 
            }
        })   
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
                start++
            }  
            for(let i=0; i<control; i++){
                $movies[start].style.cssText="opacity: 0; box-shadow: none;"
                start++
            }  

        }else{
            for(let i=0; i<8; i++){
                $movies[i].style.cssText="opacity: 1; box-shadow: 0 0 20px 0 rgba( 1, 180, 228, .1);"
                if(result.results[i].poster_path != null){
                    $img[i].src = `https://image.tmdb.org/t/p/original/${result.results[i].poster_path}`
                }else{
                    $img[i].src = "https://th.bing.com/th/id/R.cbe2aa06fac86af474641c5cfdb8e09d?rik=GAs9xxSZBr8LVA&riu=http%3a%2f%2fwww.clubedossargentos.com.br%2fimg%2fdiretores%2funnamed.jpg&ehk=D7476M4VpXgRTdfOTL9Yx8MAOMHSun6fjZhA25cBMP0%3d&risl=&pid=ImgRaw&r=0"
                }
                $title[i].innerHTML =`${result.results[i].title}`
            }
        }

    }
}

function subir(){
    //const posicoes = $movies[0].getBoundingClientRect(); - pegar as posições da tag
    window.scrollTo({
        top: 513,
        behavior: "smooth"
    })
}

(async () =>{
    await titulos(url.cinemas)
    await titulos(url.Popularidade)
    await titulos(url.kid)
})()

$movies.forEach(element => {
    element.addEventListener("click", () => {
        exibirModal(element.children[2].children[1].textContent)
    })
});


function exibirModal(id){
    console.log(id)
}