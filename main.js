
$(document).ready(function() {




// const hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

// $('.form-control').on(b)
$('.form-control').focus(function(){
   $(this).css('background', 'green');

});

$(this).keyup(function(e){
    console.log(e.target.value);
});
$('.btn').submit(function(e) {
    e.preventDefault();
    var input = $('.form-control').val();
    console.log(input);
})


// function contentCheck()
// function changeColor()


// window.localStorage.setItem( "agendaitem", Userinput)
    

//     $(".btn").click(function() {
//        console.log("#input").text
//         // $("input").append(".form-control")
//     }) 
})