async function  bubbleSort(){
    const poles=document.querySelectorAll(".bar");//we are using class and queryselector because we need to switch between different poles
    for(let i=0;i<poles.length-1;i++){
        for(let j=0;j<poles.length-i-1;j++){
            poles[j].style.background="blue";//pole 1 
            poles[j+1].style.background="blue";// adjacent pole 2
            if(parseInt(poles[j].style.height)>parseInt(poles[j+1].style.height)){
                await waitforme(delay);//waitforme is from main.js which confirms and timeout after transitions
                swap(poles[j],poles[j+1]);
            }
            poles[j].style.background="#009B77";//we need to turn it back to the same colors like other pole
            poles[j+1].style.background="#009B77";
        }
        poles[poles.length-1-i].style.background="orange";//sorted pole color
    }
    poles[0].style.background="orange";
}
const bubblesortbttn = document.getElementById("bubble-sort");
bubblesortbttn.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort(); //async was used to sync the program show that after waiting for sorting to done we will wnable button again
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayBtn();
});
