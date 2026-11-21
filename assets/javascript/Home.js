const originselect = document.getElementById("origin");
const destinationselect = document.getElementById("destination");
const date = document.getElementById("traveldate");

const todaydate = new Date().toISOString().split("T")[0];
date.setAttribute("min", todaydate);

originselect.addEventListener("change", function () {
    const selectedOrigin = this.value;

    if(destinationselect.value === selectedOrigin && selectedOrigin !== ""){
        destinationselect.value = "";
    }

    for(let i= 1; i < destinationselect.options.length; i++){
        const option = destinationselect.options[i]
        if(option.value == selectedOrigin){
            option.hidden = true;
            option.disabled = true;
        } else {
            option.hidden = false;
            option.disabled = false;
        }
    }
});