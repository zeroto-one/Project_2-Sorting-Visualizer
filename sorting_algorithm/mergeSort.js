async function merge(pol, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        pol[low + i].style.background = 'cyan';
        left[i] = pol[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        pol[mid + 1 + i].style.background = 'yellow';
        right[i] = pol[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === pol.length){
                pol[k].style.background = 'green';
            }
            else{
                pol[k].style.background = 'orange';
            }
            
            pol[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === pol.length){
                pol[k].style.background = 'green';
            }
            else{
                pol[k].style.background = 'orange';
            } 
            pol[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        if((n1 + n2) === pol.length){
            pol[k].style.background = 'green';
        }
        else{
            pol[k].style.background = 'orange';
        }
        pol[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        console.log(pol.length);
        if((n1 + n2) === pol.length){
            pol[k].style.background = 'green';
        }
        else{
            pol[k].style.background = 'orange';
        }
        pol[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(pol, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(pol, l, m);
    await mergeSort(pol, m + 1, r);
    await merge(pol, l, m, r);
}

const mergeSortbtn = document.getElementById("merge-sort");
mergeSortbtn.addEventListener('click', async function(){
    let pol = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(pol.length) - 1;
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(pol, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayBtn();
});


