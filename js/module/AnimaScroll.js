export default class AnimaScroll{
    constructor(){
        this.img = document.querySelectorAll("Img")
        this.sizeScreem = window.innerHeight * 0.4
    }
    addEvent(){
        window.addEventListener("scroll",()=>{
           this.animaImg()
        })
    }

    animaImg(){        
      
        this.img.forEach( item=>{
            let topDistance = item.getBoundingClientRect().top          

            if(topDistance < this.sizeScreem){
                item.classList.add("anima")              
            }
        })      
    }



    init(){
       this.addEvent()
       console.log( this.sizeScreem)
    }
}
console.log("Eu sou o amina Scroll")