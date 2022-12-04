// the global variables
let sliders=document.querySelectorAll(".slider")
let caption=document.querySelectorAll(".h2")

// function to set the main slider and its caption
sliders.forEach(slider=>
    {
        slider.addEventListener("click",function()
        
        {
            removeClass()
            slider.classList.add("slider-main")
            caption.classList.add("opacity-1")
        })

    })


//function to return slide to the small width to set the main slider
    function removeClass(){
        sliders.forEach(slider=>
    
            {
                slider.classList.remove("slider-main")
                

            })
    }
    
    
    
    

    