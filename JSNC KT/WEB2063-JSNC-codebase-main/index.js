function loadproducts(){
    const productslist=document.getElementById('movie-list');
axios.get('http://localhost:3000/products').then(function(response){
    const products=response.data;
    productslist.innerHTML=products.map(function(product, index){
        return `
        <tr>
            <td>${index+1}</td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.brand}</td>
            <td>${product.stock}</td>
            <td>${product.stock > 0 ? 'còn hàng' : 'hết hàng'}</td>
        </tr>
        `;
    }).join('');
}).catch(function(error){
    console.error('Không tải được danh sách sản phẩm:',error);
    productslist.innerHTML='<tr><td>Không tải được dữ liệu sản phẩm</td></tr>';
});
}
loadproducts();