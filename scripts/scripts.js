const btnImagen = document.getElementById('btn-show-image')
const cuadro = document.getElementById('soyImagen')

btnImagen.addEventListener('click',(res)=>{
    show_image('../public/source.jpeg','500px','500px','imagen de estructura')
})


function show_image(src, width, height, alt) {
    console.log('me muestro')
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}