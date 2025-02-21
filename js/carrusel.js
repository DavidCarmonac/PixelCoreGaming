var c = 1;
function carrusel()
{
    c++;
    if (c > 4) 
    {
        c=1;
    }
       
    document.getElementById("banner").setAttribute("src", "./imagenes/banners/imagen"+ c +".jpg");
    setTimeout("carrusel()", 3500);
}
