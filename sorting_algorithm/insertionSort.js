async function insertSort(){
    const poles=document.querySelectorAll(".bar");
    poles[0].getElementsByClassName.background="orange";
    for(let i=1;i<poles.length;i++){
        let j=i-1;
        let key=poles[i].style.height;
        poles[i].style.background="blue";
        await waitforme(delay);
        while(j>=0 && (parseInt(poles[j].style.height)>parseInt(key))){
            poles[j].style.background="blue";
            poles[j+1].style.height=poles[j].style.height;
            j--;
            await waitforme(delay);
            for(let k=i;k>=0;k--){
                poles[k].style.background="orange";
            }
        }
        poles[j+1].style.height=key;
        poles[i].style.background="orange";
    }
}

const inssrtbutton = document.getElementById("insertion-sort");
inssrtbutton.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertSort();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayBtn();
});

