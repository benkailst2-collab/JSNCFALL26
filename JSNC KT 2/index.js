async function loadmovies(){
    try{
        await axios.get("http://localhost:3000/movies").then((res)=>{
            document.getElementById("movie-list").innerHTML=res.data.map((movie,index)=>
                `<tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">${movie.title}</td>
              <td class="px-4 py-2 border border-gray-300">${movie.director}</td>
              <td class="px-4 py-2 border border-gray-300">${movie.year}</td>
              <td class="px-4 py-2 border border-gray-300">${movie.genre}</td>
              <td class="px-4 py-2 border border-gray-300">${movie.duration}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="edit.html?id=${movie.id}"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    onclick="deletemovies('${movie.id}')"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`,
            ).join("");
        })
    } catch(error){
        console.log("server offline");
    }
}
loadmovies();
async function deletemovies(id){
    try{
        const result=confirm("xóa ?");
        console.log(result);
        if(result){
            await axios.delete(`http://localhost:3000/movies/${id}`).then(()=>{
            alert("Xóa thành công");
        }
    ).catch(()=>{
        alert("xóa không thành công");
    })
    }
    } catch(error){
        console.log("server offline");
    }
}