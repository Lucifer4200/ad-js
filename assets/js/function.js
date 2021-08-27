(function ($) {
    'use strict';

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function (e) {
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
        $(this).remove();
    });

    // set inital count
    let count  = 0;

    // select value and buttons
    let values = document.querySelector('#value');
    let buttons = document. querySelectorAll('.btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let btnStyle = e.currentTarget.classList;
            if(btnStyle.contains('decrease')) {
                count--;
            }
            else if (btnStyle.contains('increase')) {
                count++;
            }
            else {
                count = 0;
            }
            if (count > 0) {
                values.style.color = 'green'
            }
            else if (count < 0) {
                values.style.color = 'red'
            }
            else {
                values.style.color = '#000'
            }

            values.textContent = count;
        })
    })

    // local reviews data
    const reviews = [
        {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:"assets/images/review/01.jpg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "assets/images/review/02.jpg",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        },
        {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:"assets/images/review/03.jpg",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        },
        // {
        //   id: 4,
        //   name: "bill anderson",
        //   job: "the boss",
        //   img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        //   text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        // },
    ];

    // select item

    let img = document.getElementById('personImg');
    let  auth = document.getElementById('auth');
    let  job = document.getElementById('job');
    let  info = document.getElementById('info');

    let prevBtn = document.querySelector('.prev-btn');
    let nextBtn = document.querySelector('.next-btn');
    let rendomBtn = document.querySelector('.random-btn');

    // set start Item
    let currentItem = 0;

    // load intial item
    window.addEventListener('DOMContentLoaded', function() {
        showPerson();
    })

    // show person based item

    function showPerson () {
        let item = reviews[currentItem];
        img.src = item.img;
        auth.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    // shwo next person

    nextBtn.addEventListener('click', function () {
        currentItem++;
        if(currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson();
    })

    
    // shwo prev person

    prevBtn.addEventListener('click', function () {
        currentItem--;
       if(currentItem < 0) {
           currentItem = reviews.length - 1
       }
        showPerson();
    })

    // show random person

    rendomBtn.addEventListener('click', function() {
        currentItem = Math.floor(Math.random() * reviews.length);
        console.log(currentItem);
        showPerson();
    })






})(jQuery);
