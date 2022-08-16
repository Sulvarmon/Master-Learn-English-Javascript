<?php
    session_start();
    define("conn", true);
    include("./conn.php");

    if (!isset($_SESSION['user'])) {
        header("Location: ./index.php");
        exit();
    }

    $user = $_SESSION["user"];
?>

    <!DOCTYPE html>

    <html lang="en">

    <head>

        <!-- fixing favicon icon not found err -->
        <link rel="shortcut icon" href="#">
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn English</title>

        <!-- bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

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
        <div class="user_cont_s">
            <!-- header -->
            <div class="container-md page_bg_color_s p-2 position-relative d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-2">
                        <div class="text-white">Hello</div>
                        <div class="username link_s text-white"> <b><?php echo $user ?></b> </div>
                    </div>
                    <img src="./Img/user_default_avatar.png" width="90" height="90" class="user_img rounded-circle border border-2 cursor_pointer_s">
                    <div class="home btn btn-warning p-21">Home</div>
                </div>
                <div class="play_btn_wrapper position-absolute top-50 start-50 translate-middle">
                    <div class="text-white play_btn_cont align-items-center justify-content-center gap-3 d-none d-lg-flex p-1 ps-5 pe-5 rounded">
                        <span>Go Here To Start</span>
                        <i class="material-icons">arrow_forward</i>
                        <div class="play_btn btn btn-warning ps-5 pe-5">Play</div>
                    </div>
                </div>
                <div class="settings settings_s cursor_pointer_s user-select-none"><i class="material-icons text-white">settings</i></div>
                <div class="navbar_dropdown navbar_dropdown_s position-absolute end-0 bg-light p-5 drop_down rounded">
                    <div class="d-flex flex-column gap-5 align-item-center justify-content-center mx-auto w_fit_s ">
                        <div class="home dp_item link_s mx-auto">Home</div>
                        <div class="profile_page_link dp_item link_s mx-auto">Profile</div>
                        <div class="logout_btn btn btn-primary mx-auto">Log Out</div>
                    </div>
                </div>
            </div>
            <div class="play_btn_wrapper">
                <div class="page_bg_color_s text-white container-md d-flex align-items-center justify-content-center gap-1 p-1 mb-3 mt-3 rounded d-lg-none">
                    <span>Go Here To Start</span>
                    <i class="material-icons">arrow_forward</i>
                    <div class="play_btn btn btn-warning ps-5 pe-5">Play</div>
                </div>
            </div>


            <!-- home page -->
            <div class="page main_cont container-md mt-5">
                <div class="home_grid_cont_s">
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Raitings</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">My Results</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Friends</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Events</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Contact us</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Donate</div>
                        <div class="grid_img_s"></div>
                    </div>
                    <div class="home_grid_item grid_dictionary_item_s p-2 border border-secondary cursor_pointer_s position-relative">
                        <div class="dark_bg_s"></div>
                        <div class="w_fit_s mx-auto mb-2 text-white h5">Dictionary</div>
                        <div class="grid_img_s"></div>
                    </div>
                </div>
            </div>

            <!-- raitings page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="h1 w_fit_s mx-auto m-5 text-warning">Raitings</div>
                <div class="update_tables_btn w_fit_s d-block btn btn-primary mx-auto">Update Data</div>
                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <!-- top 10 eng to geo raitings no time -->
                    <div class="mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Eng-Geo No Time</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">timer_off</i></div>
                        </div>

                        <div class="container d-flex flex-wrap">
                            <table class="table table-hover table-dark mt-2 text-center align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th scope='row'>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_e_g_no_time_img rounded-circle'>" . "<span class='top10_e_g_no_time_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_e_g_no_time_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- top 10 geo to eng raitings no time -->
                    <div class="mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Geo-Eng No Time</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">timer_off</i></div>
                        </div>

                        <div class="container d-flex flex-wrap">
                            <table class="table table-hover table-dark mt-2 text-center align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th scope='row'>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_g_e_no_time_img rounded-circle'>" . "<span class='top10_g_e_no_time_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_g_e_no_time_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- top 10 eng to geo raitings with time -->
                    <div class="container mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Eng-Geo With Time</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">timer</i></div>
                        </div>

                        <div class="container d-flex flex-wrap overflow-auto">
                            <table class="table table-hover table-dark mt-2 text-center align-middle ">
                                <thead>
                                    <tr>
                                        <th rowspan="2" class="align-middle">#</th>
                                        <th colspan="2">5 min</th>
                                        <th colspan="2">3 min</th>
                                        <th colspan="2">1 min</th>
                                    </tr>
                                    <tr>
                                        <th>user</th>
                                        <th>point</th>
                                        <th>user</th>
                                        <th>point</th>
                                        <th>user</th>
                                        <th>point</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_e_g_with_time5min_img rounded-circle'>" . "<span class='top10_e_g_with_time5min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_e_g_with_time5min_point'>" . "..." . "</td>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_e_g_with_time3min_img rounded-circle'>" . "<span class='top10_e_g_with_time3min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_e_g_with_time3min_point'>" . "..." . "</td>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_e_g_with_time1min_img rounded-circle'>" . "<span class='top10_e_g_with_time1min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_e_g_with_time1min_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- top 10 geo to eng raitings with time -->
                    <div class="container mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Geo-Eng With Time</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">timer</i></div>
                        </div>

                        <div class="container d-flex flex-wrap overflow-auto">
                            <table class="table table-hover table-dark mt-2 text-center align-middle">
                                <thead>
                                    <tr>
                                        <th rowspan="2" class="align-middle">#</th>
                                        <th colspan="2">5 min</th>
                                        <th colspan="2">3 min</th>
                                        <th colspan="2">1 min</th>
                                    </tr>
                                    <tr>
                                        <th>user</th>
                                        <th>point</th>
                                        <th>user</th>
                                        <th>point</th>
                                        <th>user</th>
                                        <th>point</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_g_e_with_time5min_img rounded-circle'>" . "<span class='top10_g_e_with_time5min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_g_e_with_time5min_point'>" . "..." . "</td>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_g_e_with_time3min_img rounded-circle'>" . "<span class='top10_g_e_with_time3min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_g_e_with_time3min_point'>" . "..." . "</td>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_g_e_with_time1min_img rounded-circle'>" . "<span class='top10_g_e_with_time1min_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_g_e_with_time1min_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- top 10 eng-geo quiz -->
                    <div class="mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Eng-Geo Quiz</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">quiz</i></div>
                        </div>

                        <div class="container d-flex flex-wrap">
                            <table class="table table-hover table-dark mt-2 text-center align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th scope='row'>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_e_g_quiz_img rounded-circle'>" . "<span class='top10_e_g_quiz_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_e_g_quiz_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- top 10 geo-eng quiz -->
                    <div class="mt-5">
                        <div class="d-flex gap-1 justify-content-center align-items-center">
                            <div class="h3 text-center">Top 10 Geo-Eng Quiz</div>
                            <div class="d-flex align-items-center" style="transform: translateY(-4px);"><i class="material-icons">quiz</i></div>
                        </div>

                        <div class="container d-flex flex-wrap">
                            <table class="table table-hover table-dark mt-2 text-center align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                            for ($i=0; $i <10 ; $i++) { 
                                                echo "<tr>";
                                                    echo "<th scope='row'>" . ($i+1) . "</th>";
                                                    echo "<td class='user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'>" . "<img src='./Img/user_default_avatar.png' width='50' height='50' class='top10_g_e_quiz_img rounded-circle'>" . "<span class='top10_g_e_quiz_user ms-2'>" . "username" . "</span>" . "</td>";
                                                    echo "<td class='top10_g_e_quiz_point'>" . "..." . "</td>";
                                                echo "</tr>";
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <!-- my results page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">My Results</div>
                <div class="update_tables_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                    <div><img class="results_user_img" src="./Img/user_default_avatar.png" width="250" height="250"></div>
                    <table class="w-25 table table-hover table-dark text-center align-middle " style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="2"> <span>Without Time</span> <i class="material-icons align-middle">timer_off</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Eng to Geo points</th>
                                <th>Geo to Eng points</th>
                            </tr>
                            <tr>
                                <td class="my_results_e_g_no_time">...</td>
                                <td class="my_results_g_e_no_time">...</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="w-25 table table-hover table-dark text-center align-middle " style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="2"> <span>Quiz</span> <i class="material-icons align-middle">quiz</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Eng to Geo points</th>
                                <th>Geo to Eng points</th>
                            </tr>
                            <tr>
                                <td class="my_results_e_g_quiz">...</td>
                                <td class="my_results_g_e_quiz">...</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="w-25 table table-hover table-dark text-center align-middle" style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="6"> <span>With Time</span> <i class="material-icons align-middle">timer</i>
                                </th>
                            </tr>
                            <tr>
                                <th colspan="3">Eng to Geo points</th>
                                <th colspan="3">Geo to Eng points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>5min</th>
                                <th>3min</th>
                                <th>1min</th>
                                <th>5min</th>
                                <th>3min</th>
                                <th>1min</th>
                            </tr>
                            <tr>
                                <th class="my_results_e_g_with_time5min">...</th>
                                <th class="my_results_e_g_with_time3min">...</th>
                                <th class="my_results_e_g_with_time1min">...</th>
                                <th class="my_results_g_e_with_time5min">...</th>
                                <th class="my_results_g_e_with_time3min">...</th>
                                <th class="my_results_g_e_with_time1min">...</th>
                            </tr>

                        </tbody>
                    </table>



                </div>

            </div>

            <!-- friends page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Friends</div>
                <div class="update_my_friends_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <!-- contents are appended in js file -->
                <div class="friends_cont container mt-5 p-2 border">
                    <div class="text-warning h5 mx-auto w_fit_s mb-5">Friends</div>
                    <div class="friends_cont_inner container d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
                    </div>
                </div>
                <div class="container mt-5 p-2 border">
                    <div class="text-warning h5 mx-auto w_fit_s mb-5">Search Friend</div>
                    <div class="d-flex flex-column gap-2 align-items-center">
                        <div class="d-flex flex-column gap-2 align-items-center">
                            <div class="search_friend_iput"><input type="text" class="p-2" placeholder="type username here">
                            </div>
                            <div class="search_user_btn btn btn-primary mt-3">Search User</div>
                        </div>
                        <div class="search_result p-2 d-flex flex-wrap"></div>
                    </div>
                </div>
                <div class="req_sent_cont container mt-5 p-2 border">
                    <div class="text-warning h5 mx-auto w_fit_s mb-5">Requests You Have Sent</div>
                    <div class="req_sent_inner container d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
                    </div>
                </div>
                <div class="req_rec_cont container mt-5 p-2 border">
                    <div class="text-warning h5 mx-auto w_fit_s mb-5">Requests You Have Received</div>
                    <div class="req_rec_inner container d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
                    </div>
                </div>
            </div>

            <!-- events Page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Events</div>
                <div class="update_events_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <!-- appended in js -->
                <div class="events_cont d-flex gap-2 flex-wrap border rounded mt-5 p-3"></div>
            </div>

            <!-- contacts Page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Contact Information</div>
                <div class="d-flex gap-5 flex-wrap justify-content-center">
                    <div class="d-flex flex-column gap-2 w_fit_s p-2">
                        <div class="d-1 gap-2 align-items-center"><span class="text-info">Master-Learn-English</span></div>
                        <div class="d-flex gap-2 align-items-center flex-wrap"><i class="material-icons">email</i><span>Email:</span><span class="text-info">MasterLearnEnglish@gmail.com</span></div>
                        <div class="d-flex gap-2 align-items-center flex-wrap"><i class="material-icons">phone</i><span>Phone:</span><span class="text-info">599 19 73
                            55</span></div>
                    </div>
                    <div class="d-flex flex-column align-items-center gap-3">
                        <div>Wright A Message</div>
                        <textarea class="wright_message_textarea"></textarea>
                        <div class="send_message_btn btn btn-primary">Send</div>
                    </div>
                </div>
            </div>

            <!-- donation Page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Donation</div>

                <div class="w_fit_s mx-auto"><img src="./Img/donatebg.jpg" class="img-fluid"> </div>
            </div>

            <!-- profile page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Profile</div>
                <div class="d-flex flex-column align-items-center p-2 gap-5">
                    <div class="p-3 border d-flex flex-column align-items-center">
                        <div class="h5 m-2">Change Username</div>
                        <div class="d-flex gap-2 align-items-center flex-wrap justify-content-center m-3">
                            <div class="change_username_input"><input class="p-2" type="text" placeholder="type new username"></div>
                            <div class="change_username_btn btn btn-primary">Change Username</div>
                        </div>
                    </div>
                    <div class="p-3 border d-flex flex-column align-items-center">
                        <div class="h5 m-2">Change Password</div>
                        <div class="d-flex gap-2 align-items-center flex-wrap justify-content-center m-3">
                            <div class="change_password_input"><input class="p-2" type="password" placeholder="type new username"></div>
                            <div class="change_password_btn btn btn-primary">Change Password</div>
                        </div>
                        <div class="change_pass_show_hide d-flex gap-2"><input class="p-2 form-check-input" type="checkbox"><span>Show Pass</span></div>
                    </div>
                    <div class="p-3 border d-flex flex-column align-items-center">
                        <div class="h5 m-2">Upload Image</div>
                        <form class="d-flex gap-2 align-items-center flex-wrap justify-content-center m-3" action="upload_img.php" method="post" enctype="multipart/form-data">
                            <div class="overflow-auto" style="width: 220px"><input class="p-2" type="file" name="profileImg" required></div>
                            <button class="btn btn-primary" type="submit" name="uploadImgBtn">Upload</button>
                        </form>
                    </div>
                    <div class="p-3 border d-flex flex-column align-items-center">
                        <div class="h5 m-2">Danger Zone</div>
                        <div class="d-flex gap-2 align-items-center flex-wrap justify-content-center m-3">
                            <div class="delete_account_btn btn btn-danger">Delece Account</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- play page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="play_page">
                    <div class="w_fit_s mx-auto h1 text-warning m-5">Play</div>
                    <div class="w_fit_s mx-auto h4">Chooes Play Type</div>
                    <div class="border d-flex flex-wrap p-3 m-2 gap-5 justify-content-around">
                        <div class="border p-2">
                            <div class="d-flex align-items-center gap-2">
                                <span class="h5">Play Without Time</span>
                                <i class="material-icons h5">timer_off</i>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>English to Georgia</span>
                                <div class="play_type_btn btn btn-primary">Eng-Geo</div>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>Georgia to English</span>
                                <div class="play_type_btn btn btn-primary">Geo-Eng</div>
                            </div>
                        </div>
                        <div class="border p-2">
                            <div class="d-flex align-items-center gap-2">
                                <span class="h5">Play On Time</span>
                                <i class="material-icons h5">timer</i>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>English to Georgia</span>
                                <div class="play_type_btn btn btn-primary">Eng-Geo</div>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>Georgia to English</span>
                                <div class="play_type_btn btn btn-primary">Geo-Eng</div>
                            </div>
                        </div>
                        <div class="border p-2">
                            <div class="d-flex align-items-center gap-2">
                                <span class="h5">Take A Quiz</span>
                                <i class="material-icons h5">quiz</i>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>English to Georgia</span>
                                <div class="play_type_btn btn btn-primary">Eng-Geo</div>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <span>Georgia to English</span>
                                <div class="play_type_btn btn btn-primary">Geo-Eng</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- play with and without time -->
                <div class="play_page">
                    <div class="w_fit_s mx-auto h1 text-warning m-5 text-center"><span class="play_type_test_title">Title</span><i class="play_type_test_icon material-icons ms-2 ">'icon'</i></div>
                    <div class="d-flex flex-column align-items-center gap-3 ">
                        <div class="choose_time_cont">
                            <div class="d-flex flex-column gap-4 h5 align-items-center ">
                                <div class="d-flex align-items-center gap-2 "><span>Choose</span><i class=" material-icons ">arrow_downward</i></div>
                                <div class="d-flex gap-4 flex-wrap justify-content-center ">
                                    <div><input type="radio" class="choose_time form-check-input" style="transform: translateY(-2px) "><span class="ms-2 ">5 Min(300 Sec)</span>
                                    </div>
                                    <div><input type="radio" class="choose_time form-check-input" style="transform: translateY(-2px) "><span class="ms-2 ">3 Min(180 Sec)</span>
                                    </div>
                                    <div><input type="radio" class="choose_time form-check-input" style="transform: translateY(-2px) "><span class="ms-2 ">1 Min(60 Sec)</span>
                                    </div>
                                </div>
                                <div class="start_btn btn btn-primary ">Start</div>
                            </div>
                        </div>
                        <div class="after_choosing_time_cont">
                            <div class="d-flex flex-column gap-4 h5 align-items-center ">
                                <div class="time_remining_cont">
                                    <div class="d-flex gap-2 align-items-center mb-3">
                                        <div class="text-center">Time Remaining</div>
                                        <div class="time_remining h3 text-danger"></div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column align-items-center">
                                    <div class="d-flex align-items-center"><span>Translate This Word</span><i class="material-icons ms-2">arrow_downward</i></div>
                                    <div class="random_word p-2 rounded h2 text-info">Word</div>
                                </div>
                                <div class="d-flex flex-column align-items-center gap-2">
                                    <div>Probable Answers</div>
                                    <div class="d-flex flex-wrap gap-3 p-3 border">
                                        <div class="prob_answer prob_answer_s p-2 border h5 cursor_pointer_s">answer 1</div>
                                        <div class="prob_answer prob_answer_s p-2 border h5 cursor_pointer_s">answer 2</div>
                                        <div class="prob_answer prob_answer_s p-2 border h5 cursor_pointer_s">answer 3</div>
                                        <div class="prob_answer prob_answer_s p-2 border h5 cursor_pointer_s">answer 4</div>
                                        <div class="prob_answer prob_answer_s p-2 border h5 cursor_pointer_s">answer 5</div>
                                    </div>
                                </div>
                                <div class="check_answer_cont">
                                    <div class="d-flex gap-3 mt-3 align-items-center">
                                        <div class="d-flex flex-column align-items-center gap-3 ">
                                            <div><input class="asnwer_input p-2" type="text "></div>
                                            <div class="d-flex gap-2 ">
                                                <div class="check_btn btn btn-light ">Check</div>
                                                <div class="next_btn btn btn-light ">Nex Word</div>
                                            </div>
                                        </div>
                                        <div><i class="check_visual material-icons text-warning user-select-none" style="font-size: 40px">question_mark</i></div>
                                    </div>
                                </div>
                                <div class="timeout_cont" style="display: none;">
                                    <div class="d-flex flex-column flex-md-row gap-3 align-items-center">
                                        <div class="text-danger" style="font-size: 40px;">Time Is Out</div>
                                        <div class="restart_btn_cont" style="display: none;">
                                            <div class="restart_btn btn btn-primary" style="transition: 1s;opacity: 0;">
                                                Restart</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column align-items-center mt-3 ">
                                    <div>Points Collected</div>
                                    <div class="points text-warning rounded " style="font-size: 40px;">...</div>
                                </div>
                            </div>

                        </div>
                        <div class="change_play_type_btn btn btn-primary mt-5 ">Change Play Type</div>
                    </div>
                </div>


                <!-- quiz -->
                <div class="play_page ">
                    <div class="w_fit_s mx-auto h1 text-warning m-5 "><span class="play_type_quiz_title">Title</span><i class="play_type_quiz_icon material-icons ms-2 ">'icon'</i></div>
                    <div class="d-flex flex-column align-items-center gap-3 ">
                        <div class="text-center mb-3">Translate all 10 words and click finish button to see result</div>
                        <div class="after_quiz_cont" style="display:none">
                            <div class="d-flex gap-2 align-items-center">
                                <div class="d-flex flex-column gap-2 mt-3 align-items-center">
                                    <div>Quiz Results</div>
                                    <div class="d-flex gap-2 p-2 bg-light text-dark rounded align-items-center">
                                        <div class="text-center">Total Points Collected In This Quiz</div>
                                        <div class="points_collected text-success h4">...</div>
                                    </div>
                                    <div class="d-flex gap-2 p-2 bg-light text-dark rounded align-items-center">
                                        <div class="text-center">Your Total Points In This Type Of Quiz</div>
                                        <div class="total_quiz_points text-success h4">...</div>
                                    </div>
                                </div>
                                <div class="quiz_restart_btn btn btn-primary">Restart</div>
                            </div>

                        </div>
                        <div class="container-fluid d-flex flex-column gap-3 align-items-center">

                            <?php
                                for ($i=0; $i <10 ; $i++) { 
                                        echo '<div class="d-flex flex-column gap-1 p-2">'; 
                                            echo '<div class="p-2">';
                                                echo '<div>' . '#' . ($i + 1) . '</div>';
                                                echo '<div class="d-flex flex-column align-items-center">';
                                                    echo '<div class="quiz_random_word text-info h5">' . 'Word' . '</div>';
                                                    echo '<div>' . '<input type="text" class="p-2 quiz_answer_input">' . '</div>';
                                                echo '</div>'; 
                                            echo '</div>';
                                            echo '<div class="answers_cont" style="display: none;">';
                                                echo '<div class="d-flex flex-column align-items-center">';
                                                    echo '<div class="correct_or_wrong h5" style="font-weight: bold;">' . 'answer is ?' . '</div>';
                                                    echo '<div class="gain_or_lose_points h5" style="font-weight: bold;">' . '+1 or -1' . '</div>';
                                                echo '</div>';
                                            echo '</div>';
                                        echo '</div>';
                                }
                            ?>


                                <div class="quiz_finish_btn btn btn-primary">Finish</div>
                                <div class="quiz_restart_btn btn btn-primary">Restart</div>
                        </div>
                        <div class="change_play_type_btn btn btn-primary mt-5 ">Change Play Type</div>


                    </div>
                </div>

            </div>

            <!-- other user's page -->

            <div class="page_bg_color_s page other_user_results_page container-md text-white mt-5 p-3 position-relative">
                <div class="back_btn position-absolute border d-flex align-items-center gap-2 btn btn-outline-warning">
                    <i class="material-icons">arrow_back</i>
                    <span>Go Back</span>
                </div>
                <div class="other_user_results_page_title w_fit_s mx-auto h1 text-warning m-5">User Results</div>
                <div class="update_other_user_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                    <div><img class="results_other_user_img" src="./Img/user_default_avatar.png" width="250" height="250">
                    </div>
                    <table class="w-25 table table-hover table-dark text-center align-middle " style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="2"> <span>Without Time</span> <i class="material-icons align-middle">timer_off</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Eng to Geo points</th>
                                <th>Geo to Eng points</th>
                            </tr>
                            <tr>
                                <td class="other_user_results_e_g_no_time">...</td>
                                <td class="other_user_results_g_e_no_time">...</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="w-25 table table-hover table-dark text-center align-middle " style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="2"> <span>Quiz</span> <i class="material-icons align-middle">quiz</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Eng to Geo points</th>
                                <th>Geo to Eng points</th>
                            </tr>
                            <tr>
                                <td class="other_user_results_e_g_quiz">...</td>
                                <td class="other_user_results_g_e_quiz">...</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="w-25 table table-hover table-dark text-center align-middle" style="height: fit-content;">
                        <thead>
                            <tr>
                                <th colspan="6"> <span>With Time</span> <i class="material-icons align-middle">timer</i>
                                </th>
                            </tr>
                            <tr>
                                <th colspan="3">Eng to Geo points</th>
                                <th colspan="3">Geo to Eng points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>5min</th>
                                <th>3min</th>
                                <th>1min</th>
                                <th>5min</th>
                                <th>3min</th>
                                <th>1min</th>
                            </tr>
                            <tr>
                                <th class="other_user_results_e_g_with_time5min">...</th>
                                <th class="other_user_results_e_g_with_time3min">...</th>
                                <th class="other_user_results_e_g_with_time1min">...</th>
                                <th class="other_user_results_g_e_with_time5min">...</th>
                                <th class="other_user_results_g_e_with_time3min">...</th>
                                <th class="other_user_results_g_e_with_time1min">...</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <!-- first event page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="back_btn position-absolute border d-flex align-items-center gap-2 btn btn-outline-warning">
                    <i class="material-icons">arrow_back</i>
                    <span>Go Back</span>
                </div>
                <div class="d-flex flex-column align-items-center w_fit_s mx-auto m-5">
                    <div class="event_name text-warning h1">A Particulat Event</div>
                    <div class="event_s_date text-info h5">Start Date</div>
                    <div class="event_e_date text-info h5">End Date</div>
                </div>

                <div class="update_event1_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="d-flex flex-column gap-2 align-items-center">
                    <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                        <div class="d-flex flex-column gap-2 align-items-center">
                            <div class="border p-2">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="h5">Take A Quiz And Collect Points</span>
                                </div>
                                <div class="d-flex align-items-center gap-2 mt-3">
                                    <span>English to Georgia</span>
                                    <div class="event1_quiz_btn_e_g btn btn-primary">Eng-Geo</div>
                                </div>
                                <div class="d-flex align-items-center gap-2 mt-3">
                                    <span>Georgia to English</span>
                                    <div class="event1_quiz_btn_g_e btn btn-primary">Geo-Eng</div>
                                </div>
                            </div>
                        </div>

                        <div class="border p-2">
                            <table class="table table-hover table-dark text-center align-middle">
                                <tr>
                                    <th colspan="2">Your Results In Event1</th>
                                </tr>

                                <tr>
                                    <th>Eng To Geo Points</th>
                                    <th>Geo To Eng Points</th>
                                </tr>
                                <tr>
                                    <td class="event1_e_g_point">0</td>
                                    <td class="event1_g_e_point">0</td>
                                </tr>
                            </table>
                        </div>

                    </div>



                    <div class="event1_hide_show mt-5 h3 text-center">Players Raitings In Event1</div>
                    <div class="event1_hide_show">
                        <div class="d-flex flex-column gap-2 border p-2 align-items-center">
                            <div>Search User In Eng-Geo Type</div>
                            <div class="d-flex gap-2 flex-wrap align-items-center justify-content-center">
                                <input type="text" class="search_event1_e_g_user_input p-1">
                                <div class="btn btn-primary search_event1_e_g_user_btn">Search</div>
                            </div>
                        </div>
                    </div>

                    <div class="event1_hide_show">
                        <div class="event1_hide_show d-flex flex-column gap-2 border p-2 align-items-center">
                            <div>Search User In Geo-Eng Type</div>
                            <div class="d-flex gap-2 flex-wrap align-items-center justify-content-center">
                                <input type="text" class="search_event1_g_e_user_input p-1">
                                <div class="btn btn-primary search_event1_g_e_user_btn">Search</div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="d-flex flex-column gap-2 p-2 border  mt-5 mb-2">
                        <div class="text-info mt-1 mb-1 w_fit_s mx-auto h5">Last Updated:</div>
                        <div class="event1_table_update_time h5 text-warning">...</div>
                    </div>

                    <div class="event1_hide_show event1_raitings_overflow overflow-auto">                                                
                        <div class="w_fit_s mx-auto">
                            <table class="event1_raitings table table-hover table-dark text-center align-middle">
                                <tr>
                                    <th>Place</th>
                                    <th>User</th>
                                    <th>Eng-Geo Point</th>
                                    <th>User</th>
                                    <th>Geo-Eng Point</th>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

            <!-- second event page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="back_btn position-absolute border d-flex align-items-center gap-2 btn btn-outline-warning">
                    <i class="material-icons">arrow_back</i>
                    <span>Go Back</span>
                </div>
                <div class="d-flex flex-column align-items-center w_fit_s mx-auto m-5">
                    <div class="event_name text-warning h1">A Particulat Event</div>
                    <div class="event_s_date text-info h5">Start Date</div>
                    <div class="event_e_date text-info h5">End Date</div>
                </div>

                <div class="update_event2_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                    This is event 2
                </div>
            </div>

            <!-- third event page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="back_btn position-absolute border d-flex align-items-center gap-2 btn btn-outline-warning">
                    <i class="material-icons">arrow_back</i>
                    <span>Go Back</span>
                </div>
                <div class="d-flex flex-column align-items-center w_fit_s mx-auto m-5">
                    <div class="event_name text-warning h1">A Particulat Event</div>
                    <div class="event_s_date text-info h5">Start Date</div>
                    <div class="event_e_date text-info h5">End Date</div>
                </div>

                <div class="update_event3_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                    This is event 3
                </div>
            </div>

            <!-- forth event page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="back_btn position-absolute border d-flex align-items-center gap-2 btn btn-outline-warning">
                    <i class="material-icons">arrow_back</i>
                    <span>Go Back</span>
                </div>
                <div class="d-flex flex-column align-items-center w_fit_s mx-auto m-5">
                    <div class="event_name text-warning h1">A Particulat Event</div>
                    <div class="event_s_date text-info h5">Start Date</div>
                    <div class="event_e_date text-info h5">End Date</div>
                </div>

                <div class="update_event4_btn d-block btn btn-primary w_fit_s mx-auto">Update Data</div>
                <div class="container mt-5 d-flex gap-5 flex-wrap justify-content-center">
                    This is event 4
                </div>
            </div>

            <!-- dictionary page -->
            <div class="page_bg_color_s page container-md text-white mt-5 p-3">
                <div class="w_fit_s mx-auto h1 text-warning m-5">Dictionary</div>
                <div class="container-fluid overflow-auto d-flex flex-column gap-2 align-items-center p-2">
                    <div class="mt-2 d-flex flex-column gap-2 align-items-center">
                        <div>Search A Word</div>
                        <div class="d-flex flex-wrap gap-2 jus">
                            <input class="dictionary_search_input p-2" type="text">
                            <button class="dictionary_search_btn btn btn-primary p-2">Search</button>
                        </div>
                        <div class="dic_search_result_cont_wrapper">
                            <div class="dic_search_result_cont d-flex flex-wrap gap-2 p-2 align-items-center">
                                <div>
                                    <table class="dic_search_result_table table table-dark mt-2 text-start align-middle">
                                        <tr>
                                            <th>English</th>
                                            <th>Georgian</th>
                                        </tr>
                                        <tr>
                                            <td class="text-warning search_result_eng_word">...</td>
                                            <td class="text-success search_result_geo_word">...</td>
                                        </tr>
                                    </table>
                                </div>
                                <button class="clear_dic_search_btn btn btn-primary">Clear</button>
                            </div>
                        </div>

                    </div>
                    <div class="w_fit_s mx-auto">
                        <table class="dictionary_table table table-hover table-dark mt-2 text-start align-middle">
                            <tr>
                                <th>#</th>
                                <th>English</th>
                                <th>Georgian</th>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div>













    </body>

    </html>