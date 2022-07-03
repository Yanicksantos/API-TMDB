

(async () =>{
    let $navers = document.getElementById("navers")
    $navers.innerHTML=""
    const response = await fetch("https://navedex-api.herokuapp.com/v1/navers",{
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyZjBkMTRkLTdmNTUtNGEwYS05MTJkLTU3YTc5NjJlN2M4YSIsImVtYWlsIjoieWFuaWNrc2FuQGhvdG1haWwuY29tIiwiaWF0IjoxNjU2NzY1MzAxfQ.fvSpqriDWi-EPYLZC_A7p60SNTut4jKoMYSqmbRGzRc"
        }
    })
    const data = await response.json()
    console.log(data)
    data.map(item =>{
        const dateani = new Date(item.admission_date)
        const dia = dateani.getDay()
        const mes = dateani.getMonth()
        const ano = dateani.getFullYear()
        const datead = new Date(item.admission_date)
        const diaa = datead.getDay()
        const mesa = datead.getMonth()
        const anoa = datead.getFullYear()
        $navers.innerHTML +=`
            <br/>
            <p class="dados">Nome: ${item.name}</p>
            <p class="dados">Aniversário:${diaa+ "/"+mesa+"/"+anoa}</p>
            <p class="dados">Trabalho: ${item.job_role}</p>
            <p class="dados">Data de Admissão: ${dia+ "/"+mes+"/"+ano}</p>
            <p class="dados">Projeto: ${item.project}</p>
            <hr/>
        `
    })
})()



fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAfaunX4UYrgSM8trUYhw6B_ZvIzjMeZco&part=snippet&chart=mostPopular&regionCode=pt&maxResults=4")
.then(x => x.json()).then(y => console.log(y))


fetch("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAfaunX4UYrgSM8trUYhw6B_ZvIzjMeZco&part=snippet&h1=pt&maxResults=50&playlistId=PLfNkggzMsXM6F2ld1fDlWPad_X3YIJ6oO")
.then(x => x.json()).then(y => console.log(y))