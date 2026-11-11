(function(){
    var nav=document.getElementById('site-nav');
    if(!nav)return;
    function update(){
      if(window.scrollY>80){
        nav.style.backgroundColor='var(--color-bg)';
        nav.style.backdropFilter='blur(12px)';
        nav.style.WebkitBackdropFilter='blur(12px)';
        nav.style.borderBottom='1px solid var(--color-border)';
      } else {
        nav.style.backgroundColor='transparent';
        nav.style.backdropFilter='';
        nav.style.WebkitBackdropFilter='';
        nav.style.borderBottom='none';
      }
    }
    window.addEventListener('scroll',update,{passive:true});
    update();
  })();