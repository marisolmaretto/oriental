var leftActualSlider= 0;

function moureSlider(sumaRes){
    
    leftActualSlider= leftActualSlider + sumaRes;
    
    if( leftActualSlider <= -200)
         leftActualSlider= -200;
    if ( leftActualSlider >= 0 )
         leftActualSlider=0; 
    
    document.getElementById('cArt').style.left= leftActualSlider+'vw';
}