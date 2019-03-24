var tween = TweenMax.to("#box", 3, {
   
    x: '-=350', // Tween to the current x value minus 50
     y: '+=100', // Tween to the current y value plus 50// registra el valor en cada uno actualizacion }  
     ease:Back.easeOut
}); 
    // onComplete: myFunction,
    TweenMax.to(".h3", 2, { x: '+=30wh',display:'inline-block'}); 
    TweenMax.to(".h4", 2, { x: '+=30wh',display:'inline-block'});
    TweenMax.to(".h3", 3,{rotation:'390'})
    TweenMax.to(".h4", 3,{rotation:'-380'})
    TweenMax.to(".parrafo", 3,{ ease: Bounce.easeOut, y: 100 })