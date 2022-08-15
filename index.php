<!DOCTYPE html>

<html lang="en">

<head>

    <!-- fixing favicon icon not found err -->
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>

    <!-- google fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">

    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- google icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <!-- connect to css and js -->
    <link rel="stylesheet" href="./styles.css" />
    <script src="app.js" defer></script>

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>

    <div class="website_bg_s"></div>

     <div class="login_page">
        <div class="login_cont_s m-auto_s mt-5_s text-white_s rounded_s p-4_s d-flex_s flex-column_s gap-2_s align-items-center_s">
            <div class="h1_s">Log In Here</div>
            <div class="login_username_input"><input class="p-2_s h5_s" type="text" placeholder="username"></div>
            <div class="login_password_input"><input class="p-2_s h5_s" type="password" placeholder="password"></div>
            <div class="login_show_hide_password"><input type="checkbox"><span class="ms-2">Show Password</span></div>
            <button class="login_btn">Log In</button>
            <div class="mt-5_s">Not Register ?</div>
            <button class="register_btn">Register Here</button>
        </div>
    </div>

    <div class="reg_page">
        <div class="login_cont_s m-auto_s mt-5_s text-white_s rounded_s p-4_s d-flex_s flex-column_s gap-2_s align-items-center_s">
            <div class="h1_s">Registration</div>
            <div class="reg_username_input"><input class="p-2_s h5_s" type="text" placeholder="username"></div>
            <div class="reg_password_input"><input class="p-2_s h5_s" type="password" placeholder="password"></div>
            <div class="reg_show_hide_password"><input type="checkbox"><span class="ms-2">Show Password</span></div>
            <button class="reg_btn">Register</button>
            <div class="mt-5">Go Here To Log In</div>
            <button class="login_here_btn ">Log In Here</button>
        </div>
    </div>

</body>

</html>