document.getElementById("name").value;
document.getElementById("form-add").addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const price=document.getElementById("price").value;
    const location=document.getElementById("location").value;
    const type=document.getElementById("type").value;
    const news={
        name:name,
        price:price,
        location:location,
        type:type
    }
    console.log(news);
    if(name.length<5||!name){
        alert("vui lòng nhập tên và có từ 5 ký tự");
        return;
    }else if(!price||price<0){
        alert("vui lòng nhập giá hợp lệ");
        return;
    }else if(!location){
        alert("tên sân không được để trống");
        return;
    }else if(type==""){
        alert("vui lòng chọn sân 5 hoặc sân 7");
        return;
    }
    axios.post("http://localhost:3000/pitches", news).then(()=>{
        return alert("thêm thành công");
    }).catch((error)=>{
        return alert("thêm thất bại");
    })
});