async function loadmovies(){
    try{
document.getElementById("form-add").addEventListener("submit",async (event)=>{
    event.preventDefault();
    const title=document.getElementById("title").value;
    const director=document.getElementById("director").value;
    const year=document.getElementById("year").value;
    const duration=document.getElementById("duration").value;
    const genre=document.getElementById("genre").value;
    const data={
        title:title,
        director:director,
        year:year,
        duration:duration,
        genre:genre
    }
    console.log(data);
    await axios.post("http://localhost:3000/movies",data).then(()=>{
        alert("thêm thành công");
    }).catch(()=>{
        alert("thêm không thành công");
    })
    })
    }catch(error){
        console.log("server offline");
    }
}
loadmovies();