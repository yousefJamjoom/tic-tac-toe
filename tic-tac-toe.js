document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
 });

 function handleGridClick(event) {
    console.log(event);
    let item = event.target;
    console.log(item);
    if (item != document.getElementsByClassName("grid-container")[0]){
    item.textContent = 'X';
}
}
// className

// alert('hello');
// let item1 = document.getElementsByClassName("item-1")[0];
// item1.textContent = "X";
