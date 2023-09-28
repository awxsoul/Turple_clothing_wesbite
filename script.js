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
        left:dets.x,
        top:dets.y
    })
})