var c = 1;
function carrusel()
{
    c++;
    if (c > 3) 
    {
        c=1;
    }
       
    document.getElementById("banner").setAttribute("src", "../imagenes/banners/BannerS"+ c +".png");
    setTimeout("carrusel()", 3500);
}