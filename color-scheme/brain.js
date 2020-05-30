(function(){
    const colors = document.querySelectorAll(".buttons");
    const background_color = document.querySelector("body");
    // console.log(colors);
    colors.forEach(function(item){
        // console.log(item);
        item.addEventListener('click',function(e){

            // getComputedStyle method is use for get all styling in style sheet of an element.
            let style_ele = getComputedStyle(e.target);

            // here we get backgroundColor from style list in bg_color
            let bg_color = style_ele.backgroundColor;
            background_color.style.backgroundColor=bg_color;

        })
    })
})()