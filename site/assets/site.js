(function(){
 var r=document.documentElement;
 try{var t=localStorage.getItem('paa-theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
 var b=document.getElementById('theme');
 if(b)b.addEventListener('click',function(){
  var dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
  var n=dark?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('paa-theme',n)}catch(e){}
 });
 var m=document.getElementById('menu');
 if(m)m.addEventListener('click',function(){var n=document.querySelector('.nav');var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
 var q=document.getElementById('q');
 if(q)q.addEventListener('input',function(){
  var v=q.value.toLowerCase().trim();
  document.querySelectorAll('[data-card]').forEach(function(c){c.style.display=(!v||c.getAttribute('data-card').indexOf(v)>-1)?'':'none'});
 });
})();
