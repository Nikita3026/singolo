window.addEventListener("load", function() {
    //Change color of links and navigate on click
    const navLinks = document.querySelector(".nav__links");
    let selectedId;

    navLinks.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target;
        if (!id.classList.contains("nav__link")) return;
        highlight(id);
        let destinationOfNav = id.getAttribute("href").substr(1);
        document.getElementById(destinationOfNav).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })

    function highlight(id) {
        if (selectedId) {
            selectedId.classList.remove("active");
        }
        selectedId = id;
        selectedId.classList.add("active");
    }

    //Change color of Portfolio tabs on click and change position of Portfolio gallery images
    const portfolioTab = document.querySelector(".port__nav");
    const gallery = document.querySelector(".gallery");
    let selectedTab;

    portfolioTab.addEventListener("click", function(event) {
        event.preventDefault();
        let TabId = event.target;
        if (!TabId.classList.contains("item__port__nav")) return;
        highlightTab(TabId);
        let galleryItems = gallery.querySelectorAll(".gallery_image");
        gallery.appendChild(galleryItems[0]);
    })

    function highlightTab(TabId) {
        if (selectedTab) selectedTab.classList.remove("highlightTab");
        selectedTab = TabId;
        selectedTab.classList.add("highlightTab");
    }

    //Gives Portfolio images border
    let selectedPicture;

    gallery.addEventListener("click", function(event) {
        let pictureId = event.target;
        if (!pictureId.classList.contains("gallery__item")) return;
        giveBorderToPicture(pictureId);
    });

    function giveBorderToPicture(pictureId) {
        if (selectedPicture == pictureId && selectedPicture.classList.contains("borderOfImage")) selectedPicture.classList.remove("borderOfImage");
        else {
            if (selectedPicture) selectedPicture.classList.remove("borderOfImage");
            selectedPicture = pictureId;
            selectedPicture.classList.add("borderOfImage");
        }
    }


    //Get telephone scrin off
    const gorizontalPhone = document.querySelector(".gorizontal__phone");
    const verticalPhone = document.querySelector(".vertical__phone");
    const blackGorizontal = document.querySelector(".blackGorizontalScreen");
    const blackVertical = document.querySelector(".blackVerticalScreen");

    gorizontalPhone.addEventListener("click", function() {
        blackGorizontal.hidden = !blackGorizontal.hidden;
    })

    verticalPhone.addEventListener("click", function() {
        blackVertical.hidden = !blackVertical.hidden;
    })


    //Submit form
    const buttonSubmit = document.querySelector(".submit");
    const dialog = document.querySelector("dialog");
    const buttonClose = document.querySelector(".buttonClose");
    const subjectInput = document.querySelector("#sub");
    const describeInput = document.querySelector("#describe");
    const firstRequired = document.querySelector("#name-required");
    const secondRequired = document.querySelector("#e-mail");

    buttonSubmit.addEventListener("click", function() {
        event.preventDefault();
        if (firstRequired.value != "" && secondRequired.value != "") {
            dialog.show();
            if (subjectInput.value == "") document.querySelector(".toSecondRow").after("Без темы");
            else document.querySelector(".toSecondRow").after(`Тема: ${subjectInput.value}`);
            if (describeInput.value == "") document.querySelector(".toThirdRow").after("Без описания");
            else document.querySelector(".toThirdRow").after(`Описание: ${describeInput.value}`);
        }
    })
    buttonClose.addEventListener("click", function() {
        event.preventDefault();
        dialog.close();
        dialog.remove();
        firstRequired.value ="";
        secondRequired.value ="";
        subjectInput.value="";
        describeInput.value="";
    })

    //Slider
    
//Slider
let slice = document.querySelectorAll(".slide_single");
const leftArrow1 = document.querySelector(".arrow__left");
const rightArrow1 = document.querySelector(".arrow__right");
const leftArrow2 = document.querySelector(".arrow__left2");
const rightArrow2 = document.querySelector(".arrow__right2");
const mainSlider = document.querySelector(".slider");

let slider = [];
for(let i = 0;i<slice.length;i++)
{
     slider[i] = slice[i];
     slice[i].remove();
}

let step = 0;
let offSet = 0;
let counterOfSteps = 0;

function draw(){
    slider[step].style.left = offSet*960 + "px";
    document.querySelector(".sliders__block").appendChild(slider[step]);
    if(step+1 == slider.length) step = 0;
    else step++;
    offSet = 1;
}

function drawReverse(){
    slider[step].style.left = offSet*960 + "px";
    document.querySelector(".sliders__block").appendChild(slider[step]);
    if(step+1 == slider.length) step = 0;
    else step++;
    offSet = -1;
}

function left(){
    let slides2 = document.querySelectorAll(".slide_single");
    let offSet2 = 0;
        slides2[0].style.left = offSet2*960 - 960 + "px";
        offSet2++;
        if( counterOfSteps %2==0) mainSlider.style.backgroundColor = "#648BF0";
        else  mainSlider.style.backgroundColor = "#F06C64";
        counterOfSteps++;
        slides2[1].style.left = offSet2*960 - 960 + "px";
        offSet2++;
    setTimeout(function(){
       slides2[0].remove();
        draw();
    },1000);
}   

function right(){
    let slides3 = document.querySelectorAll(".slide_single");
    let offSet3 = 1;
    slides3[0].style.left = offSet3*960 + "px";
    offSet3--;
    if( counterOfSteps %2==0) mainSlider.style.backgroundColor = "#648BF0";
    else  mainSlider.style.backgroundColor = "#F06C64";
    counterOfSteps++;
    slides3[1].style.left = offSet3*960 + "px";
    setTimeout(function(){
        slides3[0].remove();
        draw();
    },1000);
}   

leftArrow1.addEventListener("click",left);
leftArrow2.addEventListener("click",left);
rightArrow1.addEventListener("click",right);
rightArrow2.addEventListener("click",right);

draw();draw();

});