const strikeThrough = document.querySelector('ol');


    strikeThrough.addEventListener('click', function(event){
        event.target.style.textDecoration = 'line-through'
    })

    //////////////////////////////////////////////////////////////

 const fadeAways = document.querySelector('ul');


    fadeAways.addEventListener('click', function(event){
        event.target.style.opacity = 0
    })

    ////////////////////////////////////////////////////////////

    const collapse = document.querySelector('#destroy-all');
    const dinoPics = document.querySelectorAll('#row img')
    const dinoPictures = document.querySelector('#row')

    dinoPictures.addEventListener('click', function(event){
        event.target.style.width = '0px'
    })

    const allStrikeThroughs = document.querySelectorAll('ol li');
    const allFadeAways = document.querySelectorAll('ul li');

    collapse.addEventListener('click', function(){
        for(let i = 0; i < dinoPics.length; i++){
            dinoPics[i].style.width = '0px'
        }
        for(let i = 0; i < allStrikeThroughs.length; i++){
            allStrikeThroughs[i].style.textDecoration = 'line-through'
        }
        for(let i = 0; i < allFadeAways.length; i++){
            allFadeAways[i].style.opacity = 0
        }

    })