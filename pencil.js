const cover=document.querySelector('.cover');
const art=document.querySelector('.bench-art');
const route=document.querySelector('.pencil-route');
const first=route.querySelector('.first-stroke');
first.setAttribute('pathLength','1');
function layoutRoute(){
 const base=route.getBoundingClientRect(),box=art.getBoundingClientRect();
 const photos=Array.from(document.querySelectorAll('.case-photo'),el=>el.getBoundingClientRect());
 if(!photos.length)return;
 const x=f=>box.left-base.left+box.width*f, y=f=>box.top-base.top+box.height*f;
 const left=base.width*.026,right=base.width-left;
 const top=photos[0].top-base.top, startX=photos[0].left-base.left+12;
 first.setAttribute('d',`M${x(.762)} ${y(.087)} C${x(.67)} ${y(.056)} ${x(.65)} ${y(.23)} ${x(.565)} ${y(.207)} S${x(.46)} ${y(.35)} ${x(.448)} ${y(.49)} S${x(.40)} ${y(.76)} ${x(.22)} ${y(.855)} Q${left} ${y(.91)} ${left} ${top-14} Q${left} ${top} ${startX} ${top}`);
 let path=`M${startX} ${top}`;
 photos.forEach((r,i)=>{
  const side=i%2?right:left, next=i%2?left:right, bottom=r.bottom-base.top;
  const row=document.querySelectorAll('.project-tile')[i].getBoundingClientRect(), end=row.bottom-base.top;
  path+=` Q${side} ${r.top-base.top} ${side} ${r.top-base.top+24} L${side} ${Math.max(bottom,end)-8}`;
  if(i+1<photos.length){const nextTop=photos[i+1].top-base.top,mid=(end+nextTop)/2;
   path+=` C${side} ${mid+24} ${next} ${mid-24} ${next} ${nextTop+22}`;
  }
 });
 route.querySelector('.next-strokes').setAttribute('d',path);
}
new ResizeObserver(layoutRoute).observe(document.querySelector('main'));
new MutationObserver(layoutRoute).observe(document.querySelector('#cards'),{childList:true});
layoutRoute();
Promise.all(Array.from(art.querySelectorAll('img'),img=>img.decode().catch(()=>{}))).then(()=>{
 cover.classList.add('meet');route.classList.add('draw');
});
