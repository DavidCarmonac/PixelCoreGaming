var c = 1;
function carrusel()
{
    c++;
    if (c > 2) 
    {
        c=1;
    }
       
    document.getElementById("banner").setAttribute("src", "../imagenes/banners/BannerC"+ c +".png");
    setTimeout("carrusel()", 3500);
}