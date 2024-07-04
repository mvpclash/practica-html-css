(()=>{
   const denunciasBtn = document.getElementById('denuncias');
   const usuarioHtml = document.getElementById('usuario');
   const passwordHtml = document.getElementById('password');
    
    denunciasBtn.addEventListener('click', (evento) =>{
        console.log(usuarioHtml.value);
        console.log(passwordHtml.value);
        alert('Haz hecho clic en denuncias');
    })
    




}

)();