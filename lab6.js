const id=new URLSearchParams(location.search).get("id");
// axios.get(`http://localhost:3000/products/${id}`).then((response)=>{
//     console.log(response);
//     const product=response.data;
//     document.getElementById("name").value=product.name;
//     document.getElementById("price").value=product.price;
//     document.getElementById("category").value=product.category;
// });
async function get(){
    try{
        const response=await axios.get(`http://localhost:3000/products/${id}`);
        const product=response.data;
        document.getElementById("name").value=product.name;
        document.getElementById("price").value=product.price;
        document.getElementById("category").value=product.category;
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}
document.getElementById("form-edit").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const data = {
        name: name,
        price: price,
        category: category,
    };
    axios.put(`http://localhost:3000/products/${id}`,data).then(()=>{
        alert("Cập nhật sản phẩm thành công!");
    })
});