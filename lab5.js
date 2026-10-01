document.getElementById("name").value;
document.getElementById("form-add").addEventListener("submit", (event)=>{
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const newproducts = {
        name: name,
        price: price,
        category: category
    };
    console.log(newproducts);
    // name="";
    // !"":true
    if(!name){
        alert("vui lòng nhập tên");
        return;
    }
    // age<0
    axios.post("http://localhost:3000/products", newproducts).then(()=>{
        alert("thêm thành công");
    })
    .catch(()=>{
        alert("thêm thất bại");
    });
});