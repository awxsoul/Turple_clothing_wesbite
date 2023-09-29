function playvideo(){
    var videocon = document.querySelector('#video-container')
var playlogo = document.querySelector("#playlogo")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playlogo,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playlogo,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playlogo,{
        left:dets.x-100,
        top:dets.y-200
    })
})
}

function h1_ani(){
    gsap.from("#page1 h1",{
        y:100,
        delay:0.5,
        opacity:0,
        duration:0.8,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        opacity:0,
        delay:1.5,
        duration:0.9,
        scale:0.9
    })
}

playvideo()
h1_ani()