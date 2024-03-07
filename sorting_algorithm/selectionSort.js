async function selectionSort(){
    const poles=document.querySelectorAll(".bar");
    for(let i=0;i<poles.length;i++){
        let min_index=i;
        poles[i].style.background="blue";//pivot pole
        for(let j=i+1;j<poles.length;j++){
            poles[j].style.background="red";//current pole
            await waitforme(delay);
            if(parseInt(poles[j].style.height)<parseInt(poles[min_index].style.height)){
                if(min_index!==i){
                    console.log("enter");
                    poles[min_index].style.background="#009B77";//if less than min_index than turn min_index to normal
                }
                min_index=j;
            }
            else{
                poles[j].style.background="#009B77";//if it is not smaller than the min_index change it to normal
            }
        }
        await waitforme(delay);
        swap(poles[min_index],poles[i]);
        poles[min_index].style.background="#009B77";//change the color of the min_index as it is now sorted
        poles[i].style.background="orange";//sorted poles color
    }
}
const selectionSortbtn = document.getElementById("selection-sort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayBtn();
});