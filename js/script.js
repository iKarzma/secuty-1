$(document).ready(function() {
  $('.nav-item a').on('click', function(e) {
      e.preventDefault();
      var link = $(this).attr('href');
      console.log('Link clicked: ' + link);
  });
  $('.card').on('click', function() {
      console.log('Card clicked');
  });
});
$(document).ready(function() {
    $("#signupForm").submit(function(e) {
        e.preventDefault();
        var username = $('#signupUsername').val().trim();
        var email = $('#signupEmail').val().trim();
        var password = $('#signupPassword').val().trim();

        if (username && email && password) {
            var userData = {
                username: username,
                email: email,
                password: password
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            $('#signupSuccessAlert').fadeIn().removeClass('fade').delay(2000).fadeOut(500, function() {
                $(this).addClass('fade');
            });
            $('#signupAlert').hide();
            $('#signupUsername').val('');
            $('#signupEmail').val('');
            $('#signupPassword').val('');
        } else {
            $('#signupAlert').fadeIn().removeClass('fade').delay(2000).fadeOut(500, function() {
                $(this).addClass('fade');
            });
            $('#signupSuccessAlert').hide();
        }
    });
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        var username = $('#loginUsername').val().trim();
        var email = $('#loginEmail').val().trim();
        var password = $('#loginPassword').val().trim();
        if (username && email && password) {
            var storedData = JSON.parse(localStorage.getItem('userData'));
            if (storedData && storedData.email === email && storedData.password === password) {
                $('#loginSuccessAlert').fadeIn().removeClass('fade').delay(2000).fadeOut(500, function() {
                    $(this).addClass('fade');
                });
                $('#loginAlert').hide();
                $('#loginUsername').val('');
                $('#loginEmail').val('');
                $('#loginPassword').val('');
            } else {
                $('#loginAlert').fadeIn().removeClass('fade').delay(2000).fadeOut(500, function() {
                    $(this).addClass('fade');
                });
                $('#loginSuccessAlert').hide();
            }
        } else {
            $('#loginAlert').fadeIn().removeClass('fade').delay(2000).fadeOut(500, function() {
                $(this).addClass('fade');
            });
            $('#loginSuccessAlert').hide();
        }
    });
});
      $(document).ready(function() {
        $('.sin').click(function(e) {
            e.preventDefault();
            $('.ts').get(0).scrollIntoView({ behavior: 'smooth' });
        });
    });
      $(document).ready(function() {
        $('.log').click(function(e) {
            e.preventDefault();
            $('.tg').get(0).scrollIntoView({ behavior: 'smooth' });
        });
    });