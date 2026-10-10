const id= new URLSearchParams(location.search).get('id');
axios.get(`http://localhost:3000/pitches/${id}`).then((res)=>{
    console.log(res.data);
    pitch=res.data;
    document.getElementById('name').value = pitch.name;
    document.getElementById('price').value = pitch.price;
    document.getElementById('location').value = pitch.location;
    document.getElementById('type').value = pitch.type;
});
document.getElementById('form-edit').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    data={
        name: name,
        price: price,
        location: location,
        type: type
    }
    axios.put(`http://localhost:3000/pitches/${id}`, data).then(()=>{
        alert('Cập nhật thành công');
        window.location.href = 'index.html';
    })
});