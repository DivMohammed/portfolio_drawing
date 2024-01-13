gsap.registerPlugin(ScrollTrigger);


let headerTl = gsap.timeline();
  headerTl
  .from('header img', {
    y:'-30px',
    opacity:0,
    ease:'back(0.8)'
  })
  .from('header a', {
     opacity:0,
     y:'-80px',
     stagger:{
       amount:0.5,
       from:'center'
     },
     ease:'back(0.8)'
   })



let tl = gsap.timeline({scrollTrigger:{
  trigger:'.art',
  start:'top center',
  end:'bottom center',
  markers:true,
  //it can be play pause resume reverse restart reset complete none  
  toggleActions: 'restart reverse restart reverse'
},});

tl.fromTo(".card",{x:'-2000px', rotation:20},{ x:0,
  rotation:0,
  duration:1.5,
  ease:'back(0.6)',
  stagger:{
    amount:0.9,
    from:'end'
  }})
  .from('.art >p', {
    y:'-100px',
    opacity:0,
    duration:2,
    scale:0.5
  } ,'<')
  .from('.art >hr', {
    scale:0,
    opacity:0, duration:1.5,
    ease:'back'
    }, '<0.2')


contactTl= gsap.timeline({scrollTrigger:{
  trigger:'.contact',
  start:'top center',
  end:'bottom center',
  markers:true,
  //it can be play pause resume reverse restart reset complete none  
  toggleActions: 'restart reverse restart reverse'
},});
contactTl.from('.contact >p', {y:'-100px',opacity:0,duration:2,scale:0.5} ,'<')
.from('.contact >hr', {
  scale:0,
  opacity:0, duration:1.5,
  ease:'back'
  }, '<0.2')
       .from(".form h3", {opacity:0, x:'-100px' },0)
       .from(".form div", {opacity:0, x:'-100px', stagger:0.2 }, '<0.3')
       .from(".form button", {opacity:0, x:'-100px' },'<0.5')
       .from('.social p', {opacity:0, x:'100px' } , 0)
       .from('.social img', {opacity:0, x:'100px', stagger:0.5 }, '<0.3')