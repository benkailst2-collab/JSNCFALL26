const id=new URLSearchParams(location.search).get("id");
async function editmovies(){
    try{
        const res=await axios.get(`http://localhost:3000/movies/${id}`);
        const data=res.data;
        document.getElementById("title").value=data.title;
        document.getElementById("director").value=data.director;
        document.getElementById("year").value=data.year;
        document.getElementById("duration").value=data.duration;
        document.getElementById("genre").value=data.genre;
    }catch(error){
        console.log("server offline");
    }
    document.getElementById("form-edit").addEventListener("submit", (event)=>{
        event.defaultPrevented();
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
        };
        axios.put(`http://localhost:3000/movies/${id}`,data).then(()=>{
            alert("sửa thành công")
        })
    })
}
editmovies();