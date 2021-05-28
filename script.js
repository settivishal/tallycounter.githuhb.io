let count = 0;

const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("reset")){
            count = 0;
        }
        else{
            count++;
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "hsl(14, 88%, 50%)";
        }
        if(count==0){
            value.style.color = "hsl(237, 12%, 33%)";
        }

    })
})