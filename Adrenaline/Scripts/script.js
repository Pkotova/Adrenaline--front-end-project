//const container = document.querySelector(".container");
//const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
