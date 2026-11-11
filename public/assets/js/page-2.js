(function(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      els.forEach(function(e){e.classList.add('in');});return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
    },{threshold:0.1});
    els.forEach(function(e){io.observe(e);});
    setTimeout(function(){ document.querySelectorAll('.reveal:not(.in)').forEach(function(e){ if(e.getBoundingClientRect().top<window.innerHeight){e.classList.add('in');} }); },600);
  })();