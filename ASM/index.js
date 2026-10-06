axios.get("http://localhost:3000/pitches").then((response)=>{
    const pitches=response.data;
    document.querySelector("tbody#movie-list").innerHTML=pitches
    .map((pitches,index)=>`
    <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">${pitches.name}</td>
              <td class="px-4 py-2 border border-gray-300">${pitches.price}VNĐ</td>
              <td class="px-4 py-2 border border-gray-300">${pitches.location}</td>
              <td class="px-4 py-2 border border-gray-300">${pitches.type}</td>
              <td class="px-4 py-2 border border-gray-300">${pitches.price * 2}VNĐ</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onclick='deletepitch(${pitches.id})'>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
    `)
    .join("");
}).catch((error)=>{
    console.error("tải dữ liệu thất bại",error);
});

function deletepitch(id){
    const result=confirm("Xóa ?");
    if(result){
    axios.delete(`http://localhost:3000/pitches/${id}`).then(()=>{
        alert("xóa thành công");
    }).catch((error)=>{
        alert("xóa thất bại");
    });
    }
}