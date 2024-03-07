//Creating New Array

let array=[];
function createNewArray(Nbars=40){
    deletegraph();
    array=[];
    for(let i=0;i<Nbars;i++){
        array.push(Math.floor(Math.random()*250)+1);
    }
    console.log("Array created: "+array);

    const bars=document.getElementById("sort-graph");
    for(let i=0;i<Nbars;i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deletegraph(){
    const bar=document.getElementById("sort-graph");
    bar.innerHTML="";
    console.log("graph deleted");
}
createNewArray();
// Select speed of sorting dynamicaly while on progress
let sortSpeed=document.getElementById("sortingSpeed");
let delay=260;
sortSpeed.addEventListener("input",function (){
    delay=320-parseInt(sortSpeed.value);
});

//Selecting size of array and showing them dynamically
let arrSize=document.getElementById("arrSize");
arrSize.addEventListener('input', function(){
    createNewArray(parseInt(arrSize.value));

});
//New Array Event
const newArray=document.getElementById("New-array");
newArray.addEventListener("click",function (){
    console.log("array size assigned:"+arrSize.value);
    console.log("array speed:"+delay);
    enableSortingButton();
    enableSizeSlider();
    createNewArray(arrSize.value);
});
// ----------------------------------------------------------------------------

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingButton(){
    document.getElementById("bubble-sort").disabled = true;
    document.getElementById("selection-sort").disabled = true;
    document.getElementById("insertion-sort").disabled = true;
    document.getElementById("quick-sort").disabled = true;
    document.getElementById("merge-sort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingButton(){
    document.getElementById("bubble-sort").disabled = false;
    document.getElementById("selection-sort").disabled = false;
    document.getElementById("insertion-sort").disabled = false;
    document.getElementById("quick-sort").disabled = false;
    document.getElementById("merge-sort").disabled = false;
}

// Enable/disable size slider button
function disableSizeSlider(){
    document.getElementById("arrSize").disabled = true;
}
function enableSizeSlider(){
    document.getElementById("arrSize").disabled = false;
}

// Enable/disable new array button
function disableNewArrayBtn(){
    document.getElementById("New-array").disabled = true;
}

function enableNewArrayBtn(){
    document.getElementById("New-array").disabled = false;
}
// -------------------------------------------------------------------------
//sync so that transition can be shown
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
// change height of one bar to another
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

