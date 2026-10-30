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
(function(){
 var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 /* scroll reveal */
 var rv=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  rv.forEach(function(el){io.observe(el)});
 }else{rv.forEach(function(el){el.classList.add('in')})}
 /* count-up */
 document.querySelectorAll('[data-count]').forEach(function(el){
  var end=parseInt(el.getAttribute('data-count'),10);
  if(reduce){el.textContent=end;return}
  var t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1100,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
 });
 /* storyboards */
 var NS='http://www.w3.org/2000/svg';
 function mk(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e}
 document.querySelectorAll('.story').forEach(function(fig){
  var d=JSON.parse(fig.getAttribute('data-story'));
  var svg=fig.querySelector('svg'),eg=svg.querySelector('.edges'),ng=svg.querySelector('.nodes');
  var pk=svg.querySelector('.packet'),sh=svg.querySelector('.shield');
  var cap=fig.querySelector('.cap'),capBox=fig.querySelector('.story-cap'),tag=fig.querySelector('.tag');
  var dots=fig.querySelectorAll('.sdot'),playBtn=fig.querySelector('[data-act=play]');
  /* wide screens: four nodes in a row; narrow screens: a column, so labels stay readable */
  var V,P,nodes,idx,edges;
  function line(x0,y0,x1,y1){return {x0:x0,y0:y0,x1:x1,y1:y1,cx:(x0+x1)/2,cy:(y0+y1)/2}}
  function geo(f,t){
   var a=P[f],b=P[t],adj=Math.abs(idx[f]-idx[t])===1,sg;
   if(V){
    if(adj){sg=b.y>a.y?1:-1;return line(a.x,a.y+sg*37,b.x,b.y-sg*37)}
    return {x0:a.x+115,y0:a.y,x1:b.x+115,y1:b.y,cx:a.x+235,cy:(a.y+b.y)/2};
   }
   if(adj){sg=b.x>a.x?1:-1;return line(a.x+sg*86,a.y,b.x-sg*86,b.y)}
   return {x0:a.x,y0:a.y-34,x1:b.x,y1:b.y-34,cx:(a.x+b.x)/2,cy:a.y-92};
  }
  function layout(){
   V=fig.clientWidth<560;P={};nodes={};idx={};
   eg.textContent='';ng.textContent='';
   svg.setAttribute('viewBox',V?'0 0 420 470':'0 0 900 250');
   d.n.forEach(function(n){
    var x=V?170:[120,340,560,780][n.s],y=V?64+n.s*112:118,w=V?230:156,h=V?58:68;
    P[n.id]={x:x,y:y};idx[n.id]=n.s;
    var g=mk('g',{'class':'node '+n.k,transform:'translate('+x+','+y+')'});
    g.appendChild(mk('rect',{x:-w/2,y:-h/2,width:w,height:h,rx:14}));
    g.appendChild(mk('circle',{'class':'k',cx:-w/2+16,cy:-h/2+15,r:5}));
    var words=n.l.split(' '),l1=n.l,l2='';
    if(!V&&n.l.length>15&&words.length>1){var k=Math.ceil(words.length/2);l1=words.slice(0,k).join(' ');l2=words.slice(k).join(' ')}
    var t1=mk('text',{x:0,y:l2?-2:6});t1.textContent=l1;g.appendChild(t1);
    if(l2){var t2=mk('text',{x:0,y:17});t2.textContent=l2;g.appendChild(t2)}
    ng.appendChild(g);nodes[n.id]=g;
   });
   edges=d.s.map(function(s){
    var g=geo(s.f,s.t),p=mk('path',{'class':'edge',d:'M'+g.x0+' '+g.y0+' Q'+g.cx+' '+g.cy+' '+g.x1+' '+g.y1});
    eg.appendChild(p);return {el:p,g:g};
   });
  }
  function bez(g,t){var u=1-t;return [u*u*g.x0+2*u*t*g.cx+t*t*g.x1,u*u*g.y0+2*u*t*g.cy+t*t*g.y1]}
  layout();
  var cur=-1,raf=0,timer=0,playing=!reduce,visible=false,rz=0;
  window.addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){if((fig.clientWidth<560)!==V){layout();show(cur<0?0:cur)}},150)});
  function setPlay(on){playing=on;playBtn.setAttribute('aria-pressed',on?'true':'false');playBtn.textContent=on?'Pause':'Play';playBtn.setAttribute('aria-label',on?'Pause animation':'Play animation');schedule()}
  function schedule(){clearTimeout(timer);if(playing&&visible&&!reduce)timer=setTimeout(function(){show((cur+1)%d.s.length)},4300)}
  function show(i){
   cancelAnimationFrame(raf);cur=i;var s=d.s[i],e=edges[i];
   edges.forEach(function(x){x.el.setAttribute('class','edge')});
   for(var id in nodes)nodes[id].setAttribute('class',nodes[id].getAttribute('class').replace(/ (hit|ok-hit|bad-hit|guard-hit)/g,''));
   e.el.setAttribute('class','edge on '+s.k);
   cap.textContent=s.x;
   capBox.setAttribute('class','story-cap '+(s.k==='ok'?'':s.k));
   tag.textContent=(s.k==='bad'?'Boundary crossed':s.k==='guard'?'Control holds':'Normal flow')+' · '+(i+1)+'/'+d.s.length;
   dots.forEach(function(x,j){x.classList.toggle('on',j===i)});
   sh.setAttribute('opacity','0');
   pk.setAttribute('class','packet '+(s.k==='ok'?'':s.k));
   var end=s.k==='guard'?0.58:1,dur=reduce?0:1250,t0=null;
   function fin(){
    var p=bez(e.g,end);pk.setAttribute('cx',p[0]);pk.setAttribute('cy',p[1]);
    if(s.k==='guard'){sh.setAttribute('transform','translate('+p[0]+','+p[1]+')');sh.setAttribute('opacity','1');pk.setAttribute('opacity','0');nodes[s.f].setAttribute('class',nodes[s.f].getAttribute('class')+' hit guard-hit')}
    else{nodes[s.t].setAttribute('class',nodes[s.t].getAttribute('class')+' hit '+(s.k==='bad'?'bad-hit':'ok-hit'))}
   }
   pk.setAttribute('opacity','1');
   if(!dur){fin();schedule();return}
   function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/dur,1),q=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,p=bez(e.g,q*end);pk.setAttribute('cx',p[0]);pk.setAttribute('cy',p[1]);if(k<1)raf=requestAnimationFrame(step);else{fin();schedule()}}
   raf=requestAnimationFrame(step);
  }
  fig.querySelector('[data-act=prev]').addEventListener('click',function(){setPlay(false);show((cur-1+d.s.length)%d.s.length)});
  fig.querySelector('[data-act=next]').addEventListener('click',function(){setPlay(false);show((cur+1)%d.s.length)});
  playBtn.addEventListener('click',function(){setPlay(!playing);if(playing)show((cur+1)%d.s.length)});
  dots.forEach(function(x,j){x.addEventListener('click',function(){setPlay(false);show(j)})});
  show(0);
  setPlay(playing);
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){visible=es[0].isIntersecting;if(!visible)clearTimeout(timer);schedule()},{threshold:.45}).observe(fig)}else{visible=true;schedule()}
 });
})();
