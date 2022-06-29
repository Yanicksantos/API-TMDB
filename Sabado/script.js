(async () =>{
    let $navers = document.getElementById("navers")
    $navers.innerHTML=""
    const response = await fetch("https://navedex-api.herokuapp.com/v1/navers",{
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwYjYyMTczLWYzMDQtNGE2NS05ZmJmLTE2OGM0MjQxNmY3ZSIsImVtYWlsIjoidGVzdGV0ZW50YWNhbzA0QGhvdG1haWwuY29tIiwiaWF0IjoxNjU2MTY5NTg5fQ.shifPw_Ig70fZQwrqQCITLUfeBtIln0dJ_dElK88CAY"
        }
    })
    const data = await response.json()
    console.log(data)
    data.map(item =>{
        $navers.innerHTML +=`
            <br/>
            <p class="dados">Nome: ${item.name}</p>
            <p class="dados">Aniversário: ${item.birthdate}</p>
            <p class="dados">Trabalho: ${item.job_role}</p>
            <p class="dados">Data de Admissão: ${item.admission_date}</p>
            <p class="dados">Projeto: ${item.project}</p>
            <hr/>
        `
    })
})()



/*fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAfaunX4UYrgSM8trUYhw6B_ZvIzjMeZco&part=snippet&chart=mostPopular&regionCode=pt&maxResults=4")
.then(x => x.json()).then(y => console.log(y))


fetch("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAfaunX4UYrgSM8trUYhw6B_ZvIzjMeZco&part=snippet&h1=pt&maxResults=50&playlistId=PLfNkggzMsXM6F2ld1fDlWPad_X3YIJ6oO")
.then(x => x.json()).then(y => console.log(y))*/