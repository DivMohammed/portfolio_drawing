gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)
let x = document.getElementById("nav");
let links = document.querySelectorAll('a');


//header animation
let headerTl = gsap.timeline();
  headerTl.from('header a', {
    opacity:0,
    y:'-80px',
    stagger:{
      amount:0.5,
      from:'end'
    },
    ease:'back(0.8)'
  })
  .from('header img', {
    y:'-80px',
    opacity:0,
    ease:'back(0.8)'
  },'<0.7' )
  
  //home animation
  let homeTl= gsap.timeline({scrollTrigger:{
    trigger:'.hold_home',
    start:'top center',
    end:'bottom center',
    toggleActions: 'restart reverse restart reverse'
  },});

  homeTl.from('.hold_home_text h1',{x:'-200px', opacity:0,duration:1} )
        .from('.hold_home_text p',{x:'-200px', opacity:0,duration:1}, '<' )
        .from('.hold_home_text button',{x:'-200px', opacity:0,duration:1}, '<' )

//about animation
let aboutTl = gsap.timeline({scrollTrigger:{
  trigger:'.hold_info',
  start:'top center',
  end:'bottom center',
  toggleActions: 'restart reverse restart reverse'
},});

aboutTl.from('.hold_info_imgs',{x:'-200px', opacity:0,duration:1.4})
       .from('.hold_info_text h2',{x:'-200px', opacity:0,duration:1},'<')
       .from('.hold_info_text p',{x:'-200px', opacity:0,duration:1},'<0.5')
       .from('.hold_info_text button',{x:'-200px', opacity:0,duration:1},'<0.5')



//artwork animation
//responsive animation

ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 1200px)": function() {
    let arttl = gsap.timeline({scrollTrigger:{
      trigger:'.art',
      start:'top center',
      end:'bottom center',
      toggleActions: 'restart reverse restart reverse'
    },});
    
    arttl.fromTo(".card",{x:'-2000px', rotation:20},{ x:0,
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
  }, 
  
	// mobile
	"(max-width: 1200px)": function() {
		
    let arttl = gsap.timeline({scrollTrigger:{
      trigger:'.art',
      start:'top center',
      end:'bottom center',
      toggleActions: 'restart reverse complete reverse'
    },});
    
    arttl.fromTo(".card",{x:'-2000px', rotation:20},{ x:0,
      rotation:0,
      duration:1.5,
      ease:'back(0.6)',
      stagger:0.9})
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
  }, 
	
  
});



//contact animation
contactTl= gsap.timeline({scrollTrigger:{
  trigger:'.contact',
  start:'top center',
  end:'bottom center',
 toggleActions: 'restart reverse restart reverse'
},});
contactTl.from('.contact >p', {y:'-100px',opacity:0,duration:1.5,scale:0.5} )
       .from('.contact >hr', {scale:0,opacity:0, duration:1.5,ease:'back'}, '<0.2')
       .from(".contact h3", {opacity:0, x:'-80px', ease:'back' }, 0.1)
       .from(".form div", {opacity:0, x:'-80px', stagger:0.2 }, '<0.3')
       .from(".form button", {opacity:0, x:'-80px' },'<0.6');




      
window.addEventListener('resize',()=> ScrollTrigger.refresh( ))

//navbar 

links.forEach((a, index)=>{
  a.addEventListener('click',()=>{
    //make the nav bar disapear onclick
    x.className = "navBar";
    //animation
    gsap.to(window, {duration: 1, scrollTo:"#section" + (index + 1)});
  })
})

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')

button1.addEventListener('click',()=>{
    
  gsap.to(window, {duration: 1, scrollTo:"#section2"});
})
button2.addEventListener('click',()=>{
    
  gsap.to(window, {duration: 1, scrollTo:"#section4"});
})




function navBar() {
  
  
  console.log(x.className)
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

