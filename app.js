window.addEventListener('load', () => {

    /**variables */
    let userSettingState = true;
    let user = $(".username").text().trim();
    let dictionary = [];
    let checkBtnState = true;
    let playType = "";
    let eventVar = "";
    let timeControl = 999;
    let playTimer;
    let scrollPos = 0;
    let pageIndex = {
        oldValue: 0,
        newValue: 0
    };
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /** */

    $.ajax({
        url: "arrays.php",
        type: "post",
        data: {
            arraysBtn: "dictionary"
        },
        dataType: "json",
        async: false,
        success: function(data) {
            dictionary = data;
        }
    })

    /**functions */
    function winScr() {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    function getDate() {

        let date = {
            year: new Date().getFullYear(),
            month: month[new Date().getMonth()],
            day: new Date().getDate(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
        }

        return date;
    }


    function showJS(element, index = 0) {
        document.getElementsByClassName(`${element}`)[index].style.display = "block";
    }

    function hideAll(element) {
        let page = document.getElementsByClassName(`${element}`);
        for (let i = 0; i < page.length; i++) {
            document.getElementsByClassName(`${element}`)[i].style.display = "none";
        }
    }

    function displayPage(i) {
        hideAll('page');
        showJS('page', i)
        pageIndex.oldValue = pageIndex.newValue;
        pageIndex.newValue = i;
    }

    function gridClicks(i) {
        let element = document.getElementsByClassName('home_grid_item');
        element[i].addEventListener('click', function() {
            winScr()
            switch (i) {
                case 6:
                    displayPage(14);
                    break;
                default:
                    displayPage(i + 1);
                    break;
            }
        })
    }

    function setUserImgs() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "user_imgs_array"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < data.length; i++) {
                        /**no times */
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_e_g_no_time_user');
                            let el2 = document.getElementsByClassName('top10_e_g_no_time_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_g_e_no_time_user');
                            let el2 = document.getElementsByClassName('top10_g_e_no_time_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /** */

                        /**eng to geo with time*/
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_e_g_with_time5min_user');
                            let el2 = document.getElementsByClassName('top10_e_g_with_time5min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_e_g_with_time3min_user');
                            let el2 = document.getElementsByClassName('top10_e_g_with_time3min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_e_g_with_time1min_user');
                            let el2 = document.getElementsByClassName('top10_e_g_with_time1min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /** */

                        /**geo to eng with time*/
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_g_e_with_time5min_user');
                            let el2 = document.getElementsByClassName('top10_g_e_with_time5min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_g_e_with_time3min_user');
                            let el2 = document.getElementsByClassName('top10_g_e_with_time3min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_g_e_with_time1min_user');
                            let el2 = document.getElementsByClassName('top10_g_e_with_time1min_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /**eng to geo quiz*/
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_e_g_quiz_user');
                            let el2 = document.getElementsByClassName('top10_e_g_quiz_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /**geo to eng quiz*/
                        for (let j = 0; j < 10; j++) {
                            let el = document.getElementsByClassName('top10_g_e_quiz_user');
                            let el2 = document.getElementsByClassName('top10_g_e_quiz_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /** */

                        /**results page */
                        if (user == data[i]["user"]) {
                            let el = document.querySelector('.results_user_img');
                            el.src = `./Img/profile_imgs/${data[i].img}`;
                        }

                        /** */

                        /**friends page */
                        for (let j = 0; j < document.getElementsByClassName('friend_name').length; j++) {
                            let el = document.getElementsByClassName('friend_name');
                            let el2 = document.getElementsByClassName('friend_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }



                        for (let j = 0; j < document.getElementsByClassName('req_sent_name').length; j++) {
                            let el = document.getElementsByClassName('req_sent_name');
                            let el2 = document.getElementsByClassName('req_sent_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }



                        for (let j = 0; j < document.getElementsByClassName('req_rec_name').length; j++) {
                            let el = document.getElementsByClassName('req_rec_name');
                            let el2 = document.getElementsByClassName('req_rec_img');
                            if (data[i].user == el[j].textContent) {
                                el2[j].src = `./Img/profile_imgs/${data[i].img}`;
                            }
                        }

                        /** */
                    }
                }
            }
        })
    }

    function updateTables() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "EGTop10NoTime"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_e_g_no_time_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_e_g_no_time_point:eq(${i})`).text(`${data[i].e_g_points}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_e_g_no_time").text(`${data[i].e_g_points}`)
                        }
                    }
                }
            }
        })
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "GETop10NoTime"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_g_e_no_time_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_g_e_no_time_point:eq(${i})`).text(`${data[i].g_e_points}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_g_e_no_time").text(`${data[i].g_e_points}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "EGTop10WithTime5min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_e_g_with_time5min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_e_g_with_time5min_point:eq(${i})`).text(`${data[i].e_g_points_5min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_e_g_with_time5min").text(`${data[i].e_g_points_5min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "EGTop10WithTime3min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_e_g_with_time3min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_e_g_with_time3min_point:eq(${i})`).text(`${data[i].e_g_points_3min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_e_g_with_time3min").text(`${data[i].e_g_points_3min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "EGTop10WithTime1min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_e_g_with_time1min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_e_g_with_time1min_point:eq(${i})`).text(`${data[i].e_g_points_1min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_e_g_with_time1min").text(`${data[i].e_g_points_1min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "GETop10WithTime5min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_g_e_with_time5min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_g_e_with_time5min_point:eq(${i})`).text(`${data[i].g_e_points_5min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_g_e_with_time5min").text(`${data[i].g_e_points_5min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "GETop10WithTime3min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_g_e_with_time3min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_g_e_with_time3min_point:eq(${i})`).text(`${data[i].g_e_points_3min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_g_e_with_time3min").text(`${data[i].g_e_points_3min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "GETop10WithTime1min"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_g_e_with_time1min_user:eq(${i})`).text(`${data[i].username}`);
                        $(`.top10_g_e_with_time1min_point:eq(${i})`).text(`${data[i].g_e_points_1min}`);
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].username) {
                            $(".my_results_g_e_with_time1min").text(`${data[i].g_e_points_1min}`)
                        }
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "quizEG"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_e_g_quiz_user:eq(${i})`).text(`${data[i].user}`);
                        $(`.top10_e_g_quiz_point:eq(${i})`).text(`${data[i].e_g_points}`);
                    }
                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "quizGE"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < 10; i++) {
                        $(`.top10_g_e_quiz_user:eq(${i})`).text(`${data[i].user}`);
                        $(`.top10_g_e_quiz_point:eq(${i})`).text(`${data[i].g_e_points}`);
                    }
                }
            }
        })
        setUserImgs();
    }

    function getQuizData() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "quizEG"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].user) {
                            $(".my_results_e_g_quiz").text(`${data[i].e_g_points}`)
                        }
                    }
                }
            }
        })
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "quizGE"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    for (let i = 0; i < data.length; i++) {
                        if (user == data[i].user) {
                            $(".my_results_g_e_quiz").text(`${data[i].g_e_points}`)
                        }
                    }
                }
            }
        })
    }

    function clickOnUserImgAndUsernameCont() {
        $(".user_img_and_username").off().on("click", function() {
            scrollPos = $(window).scrollTop();
            winScr();
            let otherUser = $(this).children().eq(1).text().trim();
            if (otherUser == user) {
                setOtherUserPage(otherUser);
                $(".other_user_results_page_title").text(`My Results`);
                displayPage(9)
            } else {
                setOtherUserPage(otherUser);
                $(".other_user_results_page_title").text(`${otherUser} 's Results`);
                displayPage(9)
            }
        })
    }

    function getFriendsArray() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "friends"
            },
            dataType: "json",
            success: function(data) {
                filteredData = data.filter(function(value, index) {
                    return value.user_name == user;
                })
                if (filteredData.length != 0) {
                    for (let i = 0; i < filteredData.length; i++) {
                        $(".friends_cont_inner").append("<div class='firends_cont_item p-2 border d-flex flex-column gap-2 align-items-center'></div>")
                    }
                    for (let i = 0; i < $(".firends_cont_item").length; i++) {
                        $(`.firends_cont_item:eq(${i})`).append("<div class='firends_cont_item_img_and_username user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'></div>");
                        $(`.firends_cont_item:eq(${i})`).append("<div class='unfriend_btn btn btn-danger'>Unfriend</div>");
                    }
                    for (let i = 0; i < $(".firends_cont_item_img_and_username").length; i++) {
                        $(`.firends_cont_item_img_and_username:eq(${i})`).append("<div><img src='./Img/user_default_avatar.png' class='friend_img rounded-circle' width='60' height='60'></div>")
                        $(`.firends_cont_item_img_and_username:eq(${i})`).append(`<div class='friend_name'>${filteredData[i].friend_name}</div>`);
                    }
                    setUserImgs();
                    clickOnUserImgAndUsernameCont();
                } else {
                    $(".friends_cont_inner").append("<div class='nothing_message mx-auto'>Nothing Here</div>")
                }
            }
        })
    }

    function getReqsSentArray() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "requests"
            },
            dataType: "json",
            success: function(data) {
                filteredData = data.filter(function(value, index) {
                    return value.friend_name == user;
                })
                if (filteredData.length != 0) {
                    for (let i = 0; i < filteredData.length; i++) {
                        $(".req_sent_inner").append("<div class='req_sent_item p-2 border d-flex flex-column gap-2 align-items-center'></div>")
                    }
                    for (let i = 0; i < $(".req_sent_item").length; i++) {
                        $(`.req_sent_item:eq(${i})`).append("<div class='req_sent_item_img_and_username user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'></div>");
                        $(`.req_sent_item:eq(${i})`).append("<div class='unsend_btn btn btn-danger'>Unsend</div>");
                    }
                    for (let i = 0; i < $(".req_sent_item_img_and_username").length; i++) {
                        $(`.req_sent_item_img_and_username:eq(${i})`).append("<div><img src='./Img/user_default_avatar.png' class='req_sent_img rounded-circle' width='60' height='60'></div>")
                        $(`.req_sent_item_img_and_username:eq(${i})`).append(`<div class='req_sent_name'>${filteredData[i].user_name}</div>`);
                    }
                    setUserImgs();
                    clickOnUserImgAndUsernameCont();
                } else {
                    $(".req_sent_inner").append("<div class='nothing_message mx-auto'>Nothing Here</div>")
                }
            }
        })
    }

    function getReqsRecArray() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "requests"
            },
            dataType: "json",
            success: function(data) {
                filteredData = data.filter(function(value, index) {
                    return value.user_name == user;
                })
                if (filteredData.length != 0) {
                    for (let i = 0; i < filteredData.length; i++) {
                        $(".req_rec_inner").append("<div class='req_rec_item p-2 border d-flex flex-column gap-2 align-items-center'></div>")
                    }
                    for (let i = 0; i < $(".req_rec_item").length; i++) {
                        $(`.req_rec_item:eq(${i})`).append("<div class='req_rec_item_img_and_username user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center'></div>");
                        $(`.req_rec_item:eq(${i})`).append("<div class='req_rec_btns_cont d-flex gap-2'></div>");
                    }
                    for (let i = 0; i < $(".req_rec_btns_cont").length; i++) {
                        $(`.req_rec_btns_cont:eq(${i})`).append("<div class='add_friend_btn btn btn-success'>Add As Friend</div>");
                        $(`.req_rec_btns_cont:eq(${i})`).append("<div class='rej_friend_btn btn btn-danger'>Reject</div>");
                    }
                    for (let i = 0; i < $(".req_rec_item_img_and_username").length; i++) {
                        $(`.req_rec_item_img_and_username:eq(${i})`).append("<div><img src='./Img/user_default_avatar.png' class='req_rec_img rounded-circle' width='60' height='60'></div>")
                        $(`.req_rec_item_img_and_username:eq(${i})`).append(`<div class='req_rec_name'>${filteredData[i].friend_name}</div>`);
                    }
                    setUserImgs();
                    clickOnUserImgAndUsernameCont();
                } else {
                    $(".req_rec_inner ").append("<div class='nothing_message mx-auto'>Nothing Here</div>")
                }
            }
        })
    }

    function showHidePassword(clickedEl, input) {
        $(`.${clickedEl}`).click(function() {
            if ($(`.${input}`).attr("type") == "password") {
                $(`.${input}`).attr("type", "text");
            } else {
                $(`.${input}`).attr("type", "password");
            }
        })
    }

    function getPlayPagesPoints(index, time = 999) {
        switch (index) {
            case 0:
                $.ajax({
                    url: "arrays.php",
                    type: "post",
                    data: {
                        arraysBtn: "users_array"
                    },
                    dataType: "json",
                    success: function(data) {
                        for (let i = 0; i < data.length; i++) {
                            if (user == data[i].username) {
                                $(".points").text(`${data[i].e_g_points}`);
                            }

                        }

                    }
                })
                break;
            case 1:
                $.ajax({
                    url: "arrays.php",
                    type: "post",
                    data: {
                        arraysBtn: "users_array"
                    },
                    dataType: "json",
                    success: function(data) {
                        for (let i = 0; i < data.length; i++) {
                            if (user == data[i].username) {
                                $(".points").text(`${data[i].g_e_points}`);
                            }

                        }

                    }
                })
                break;
            default:
                break;
        }
    }

    function EGSetup() {
        let randomNumfromDic = Math.floor(Math.random() * dictionary.length);
        let randomWord = dictionary[randomNumfromDic].eng_word;
        let answer = dictionary[randomNumfromDic].geo_word
        $(".random_word").text(`${randomWord}`);
        let filteredDicArray = dictionary.filter(function(value, index) {
            return value.eng_word != $(".random_word").text();
        })
        let randomIndexs = [];
        while (randomIndexs.length < 5) {
            let r = Math.floor(Math.random() * filteredDicArray.length);
            if (randomIndexs.indexOf(r) == -1) {
                randomIndexs.push(r);
            }
        }
        for (let i = 0; i < 5; i++) {
            $(`.prob_answer:eq(${i})`).text(`${filteredDicArray[randomIndexs[i]].geo_word}`);
        }
        let randomNumFrom5 = Math.floor(Math.random() * 5);
        $(`.prob_answer:eq(${randomNumFrom5})`).text(`${answer}`);
        checkBtnState = true;
        $(".asnwer_input").val("");
        $(".check_btn").removeClass("disabled");
        $(".check_visual, .points").removeClass("text-success");
        $(".check_visual, .points").removeClass("text-danger");
        $(".check_visual, .points").addClass("text-warning");
        $(".check_visual").text("question_mark");
    }

    function GESetup() {
        let randomNumfromDic = Math.floor(Math.random() * dictionary.length);
        let randomWord = dictionary[randomNumfromDic].geo_word;
        let answer = dictionary[randomNumfromDic].eng_word
        $(".random_word").text(`${randomWord}`);
        let filteredDicArray = dictionary.filter(function(value, index) {
            return value.geo_word != $(".random_word").text();
        })
        let randomIndexs = [];
        while (randomIndexs.length < 5) {
            let r = Math.floor(Math.random() * filteredDicArray.length);
            if (randomIndexs.indexOf(r) == -1) {
                randomIndexs.push(r);
            }
        }
        for (let i = 0; i < 5; i++) {
            $(`.prob_answer:eq(${i})`).text(`${filteredDicArray[randomIndexs[i]].eng_word}`);
        }
        let randomNumFrom5 = Math.floor(Math.random() * 5);
        $(`.prob_answer:eq(${randomNumFrom5})`).text(`${answer}`);
        checkBtnState = true;
        $(".asnwer_input").val("");
        $(".check_btn").removeClass("disabled");
        $(".check_visual, .points").removeClass("text-success");
        $(".check_visual, .points").removeClass("text-danger");
        $(".check_visual, .points").addClass("text-warning");
        $(".check_visual").text("question_mark");
    }

    function setPlayTypeTestPages(index) {
        switch (index) {
            case 0:
                $(".play_type_test_title").text("Eng To Geo No Time");
                $(".play_type_test_icon").text("timer_off");
                $(".choose_time_cont, .time_remining_cont").hide();
                $(".after_choosing_time_cont").show();
                EGSetup();
                break;
            case 1:
                $(".play_type_test_title").text("Geo To Eng No Time");
                $(".play_type_test_icon").text("timer_off");
                $(".choose_time_cont, .time_remining_cont").hide();
                $(".after_choosing_time_cont").show();
                GESetup();
                break;
            case 2:
                $(".play_type_test_title").text("Eng To Geo With Time");
                $(".play_type_test_icon").text("timer");
                $(".after_choosing_time_cont").hide();
                $(".choose_time_cont, .time_remining_cont").show();
                EGSetup();
                break;
            case 3:
                $(".play_type_test_title").text("Geo To Eng With Time");
                $(".play_type_test_icon").text("timer");
                $(".after_choosing_time_cont").hide();
                $(".choose_time_cont, .time_remining_cont").show();
                GESetup();
                break;
            default:
                break;
        }

    }

    function setPlayTypeQuizPages(index) {
        switch (index) {
            case 0:
                {
                    $(".play_type_quiz_title").text(`${eventVar == "event1" ? "Event1 Eng To Geo Quiz" : "Eng To Geo Training Quiz"}`);
                    $(".play_type_quiz_icon").text("quiz");

                    let randomIndexs = [];
                    while (randomIndexs.length < 10) {
                        let r = Math.floor(Math.random() * dictionary.length);
                        if (randomIndexs.indexOf(r) == -1) {
                            randomIndexs.push(r);
                        }
                    }
                    let dicRandom10Words = [];
                    for (let i = 0; i < randomIndexs.length; i++) {
                        dicRandom10Words.push(dictionary[randomIndexs[i]].eng_word);
                    }

                    for (let i = 0; i < 10; i++) {
                        $(`.quiz_random_word:eq(${i})`).text(`${dicRandom10Words[i]}`);
                    }

                    switch (eventVar) {
                        case "event1":
                            $.ajax({
                                url: "events.php",
                                type: "post",
                                data: {
                                    eventBtn: "get_event1_results"
                                },
                                dataType: "json",
                                success: function(data) {
                                    for (let i = 0; i < data.length; i++) {
                                        if (user == data[i].user) {
                                            $(".total_quiz_points").text(`${data[i].event1_e_g} `)
                                            break;
                                        }
                                    }
                                }
                            })
                            break;
                        default:
                            $.ajax({
                                url: "arrays.php",
                                type: "post",
                                data: {
                                    arraysBtn: "quizEG"
                                },
                                dataType: "json",
                                success: function(data) {
                                    for (let i = 0; i < data.length; i++) {
                                        if (user == data[i].user) {
                                            $(".total_quiz_points").text(`${data[i].e_g_points} `)
                                            break;
                                        }
                                    }
                                }
                            })
                            break;
                    }
                    break;
                }
            case 1:
                {
                    $(".play_type_quiz_title").text(`${eventVar == "event1" ? "Event1 Geo To Eng Quiz" : "Geo To Eng Training Quiz"}`);
                    $(".play_type_quiz_icon").text("quiz");

                    let randomIndexs = [];
                    while (randomIndexs.length < 10) {
                        let r = Math.floor(Math.random() * dictionary.length);
                        if (randomIndexs.indexOf(r) == -1) {
                            randomIndexs.push(r);
                        }
                    }
                    let dicRandom10Words = [];
                    for (let i = 0; i < randomIndexs.length; i++) {
                        dicRandom10Words.push(dictionary[randomIndexs[i]].geo_word);
                    }

                    for (let i = 0; i < 10; i++) {
                        $(`.quiz_random_word:eq(${i})`).text(`${dicRandom10Words[i]}`);
                    }

                    switch (eventVar) {
                        case "event1":
                            $.ajax({
                                url: "events.php",
                                type: "post",
                                data: {
                                    eventBtn: "get_event1_results"
                                },
                                dataType: "json",
                                success: function(data) {
                                    for (let i = 0; i < data.length; i++) {
                                        if (user == data[i].user) {
                                            $(".total_quiz_points").text(`${data[i].event1_g_e} `)
                                            break;
                                        }
                                    }
                                }
                            })
                            break;
                        default:
                            $.ajax({
                                url: "arrays.php",
                                type: "post",
                                data: {
                                    arraysBtn: "quizGE"
                                },
                                dataType: "json",
                                success: function(data) {
                                    for (let i = 0; i < data.length; i++) {
                                        if (user == data[i].user) {
                                            $(".total_quiz_points").text(`${data[i].g_e_points} `)
                                            break;
                                        }
                                    }
                                }
                            })
                            break;
                    }
                    break;
                }
            default:
                break;
        }
    }

    function determinePlayType(index) {
        $(`.play_type_btn:eq(${index})`).click(function() {
            $(".play_page").hide();
            switch (index) {
                case 0:
                    $(".play_page:eq(1)").show()
                    playType = "e_g_no_time";
                    setPlayTypeTestPages(0);
                    getPlayPagesPoints(0);
                    break;
                case 1:
                    $(".play_page:eq(1)").show()
                    playType = "g_e_no_time";
                    setPlayTypeTestPages(1);
                    getPlayPagesPoints(1);
                    break;
                case 2:
                    $(".play_page:eq(1)").show()
                    playType = "e_g_with_time";
                    setPlayTypeTestPages(2);
                    break;
                case 3:
                    $(".play_page:eq(1)").show()
                    playType = "g_e_with_time";
                    setPlayTypeTestPages(3);
                    break;
                case 4:
                    $(".play_page:eq(2)").show()
                    playType = "e_g_quiz";
                    setPlayTypeQuizPages(0);
                    break;
                case 5:
                    $(".play_page:eq(2)").show()
                    playType = "g_e_quiz";
                    setPlayTypeQuizPages(1);
                    break;
                default:
                    break;
            }
        })
    }

    function probAnswerClicks(clickedEl, input) {
        $(`.${clickedEl}`).click(function() {
            $(`.${input}`).val(`${$(this).text()}`)
        })
    }


    function setOtherUserPage(username) {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "user_imgs_array"
            },
            dataType: "json",
            success: function(data) {
                $(".results_other_user_img").attr("src", `./Img/user_default_avatar.png`);
                for (let i = 0; i < data.length; i++) {
                    /**results page */
                    if (username == data[i]["user"]) {
                        $(".results_other_user_img").attr("src", `./Img/profile_imgs/${data[i].img}`)
                        break;
                    }

                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "users_array"
            },
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    if (username == data[i].username) {
                        $(".other_user_results_e_g_no_time").text(`${data[i].e_g_points}`);
                        $(".other_user_results_g_e_no_time").text(`${data[i].g_e_points}`);
                        $(".other_user_results_e_g_with_time5min").text(`${data[i].g_e_points_5min}`);
                        $(".other_user_results_e_g_with_time3min").text(`${data[i].g_e_points_3min}`);
                        $(".other_user_results_e_g_with_time1min").text(`${data[i].g_e_points_1min}`);
                        $(".other_user_results_g_e_with_time5min").text(`${data[i].g_e_points_5min}`);
                        $(".other_user_results_g_e_with_time3min").text(`${data[i].g_e_points_3min}`);
                        $(".other_user_results_g_e_with_time1min").text(`${data[i].g_e_points_1min}`);
                        break;
                    }

                }
            }
        })

        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "quizEG"
            },
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    if (username == data[i].user) {
                        $(".other_user_results_e_g_quiz").text(`${data[i].e_g_points}`);
                        $(".other_user_results_g_e_quiz").text(`${data[i].g_e_points}`);
                    }
                }

            }
        })
    }

    function getEvent1Data() {
        $.ajax({
            url: "events.php",
            type: "post",
            data: {
                eventBtn: "get_event1_results"
            },
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {

                    if (user == data[i].user) {
                        $(".event1_e_g_point").text(`${data[i].event1_e_g}`);
                        $(".event1_g_e_point").text(`${data[i].event1_g_e}`);
                    }
                }

            }
        })
    }

    function updateEvent1EGData() {
        $.ajax({
            url: "events.php",
            type: "post",
            data: {
                eventBtn: "get_event1_results_sorted_e_g"
            },
            dataType: "json",
            success: function(data) {

                for (let i = 0; i < $(".event1_raitings_e_g_user_username").length; i++) {
                    $(`.event1_raitings_e_g_user_username:eq(${i})`).text(`${data[i].user}`);
                    $(`.event1_raitings_e_g_user_point:eq(${i})`).text(`${data[i].event1_e_g}`);
                }

                $.ajax({
                    url: "arrays.php",
                    type: "post",
                    data: {
                        arraysBtn: "user_imgs_array"
                    },
                    dataType: "json",
                    success: function(data) {
                        $(`.event1_raitings_e_g_user_username`).siblings().attr("src", `./Img/user_default_avatar.png`);
                        for (let i = 0; i < $(".event1_raitings_e_g_user_username").length; i++) {
                            for (let j = 0; j < data.length; j++) {
                                if ($(`.event1_raitings_e_g_user_username:eq(${i})`).text().trim() == data[j].user) {
                                    $(`.event1_raitings_e_g_user_username:eq(${i})`).siblings().attr("src", `Img/profile_imgs/${data[j].img}`);
                                }
                            }
                        }
                    }
                })
            }
        })
    }

    function updateEvent1GEData() {
        $.ajax({
            url: "events.php",
            type: "post",
            data: {
                eventBtn: "get_event1_results_sorted_g_e"
            },
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < $(".event1_raitings_g_e_user_username").length; i++) {
                    $(`.event1_raitings_g_e_user_username:eq(${i})`).text(`${data[i].user}`);
                    $(`.event1_raitings_g_e_user_point:eq(${i})`).text(`${data[i].event1_g_e}`);
                }
                $.ajax({
                    url: "arrays.php",
                    type: "post",
                    data: {
                        arraysBtn: "user_imgs_array"
                    },
                    dataType: "json",
                    success: function(data) {
                        $(`.event1_raitings_g_e_user_username`).siblings().attr("src", `./Img/user_default_avatar.png`);
                        for (let i = 0; i < $(".event1_raitings_g_e_user_username").length; i++) {
                            for (let j = 0; j < data.length; j++) {
                                if ($(`.event1_raitings_g_e_user_username:eq(${i})`).text().trim() == data[j].user) {
                                    $(`.event1_raitings_g_e_user_username:eq(${i})`).siblings().attr("src", `Img/profile_imgs/${data[j].img}`);
                                }
                            }

                        }
                    }
                })
            }
        })
    }

    function createEvent1Raitings() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "users_array"
            },
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    $(".event1_raitings").append("<tr class='event1_raitings_el'></tr>")
                }

                for (let i = 0; i < $(".event1_raitings_el").length; i++) {
                    $(`.event1_raitings_el:eq(${i})`).append(`<td>${i+1}</td>`);
                    $(`.event1_raitings_el:eq(${i})`).append(`<td class="event1_raitings_e_g_user event1_raitings_user user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center"></td>`);
                    $(`.event1_raitings_el:eq(${i})`).append(`<td class="event1_raitings_e_g_user_point">0</td>`);
                    $(`.event1_raitings_el:eq(${i})`).append(`<td class="event1_raitings_g_e_user event1_raitings_user user_img_and_username user_img_and_username_s d-flex gap-2 align-items-center"></td>`);
                    $(`.event1_raitings_el:eq(${i})`).append(`<td class="event1_raitings_g_e_user_point">0</td>`);
                }

                for (let i = 0; i < $(".event1_raitings_e_g_user").length; i++) {
                    $(`.event1_raitings_e_g_user:eq(${i})`).append('<img src="./Img/user_default_avatar.png" width="50" height="50" class="rounded-circle" class="event1_raitings_e_g_user_img">');
                    $(`.event1_raitings_e_g_user:eq(${i})`).append('<span class="event1_raitings_e_g_user_username">username</span>');
                }

                for (let i = 0; i < $(".event1_raitings_g_e_user").length; i++) {
                    $(`.event1_raitings_g_e_user:eq(${i})`).append('<img src="./Img/user_default_avatar.png" width="50" height="50" class="rounded-circle" class="event1_raitings_g_e_user_img">');
                    $(`.event1_raitings_g_e_user:eq(${i})`).append('<span class="event1_raitings_g_e_user_username">username</span>');
                }

                updateEvent1EGData();
                updateEvent1GEData();

                clickOnUserImgAndUsernameCont();
            }
        })
    }


    function displayEvnetsInfo() {
        $.ajax({
            url: "events.php",
            type: "post",
            data: {
                eventBtn: "get_events"
            },
            dataType: "json",
            success: function(data) {

                $(".events_cont").empty();
                $.each(data, function(i, e) {
                    $(".events_cont").append('<div class="events_item btn btn-primary border p-2 d-flex flex-column align-items-center"></div>');
                })

                for (let i = 0; i < $(".events_item").length; i++) {
                    $(`.events_item:eq(${i})`).append(`<div>${data[i].name}</div>`);
                    $(`.events_item:eq(${i})`).append(`<div>Start Date : ${data[i].sDate}</div>`);
                    $(`.events_item:eq(${i})`).append(`<div>End Date : ${data[i].sDate}</div>`);
                }



                $(document).off().on("click", ".events_item", function() {
                    let event = {};
                    event.name = $(this).children().eq(0).text();
                    event.sDate = $(this).children().eq(1).text();
                    event.eDate = $(this).children().eq(2).text();
                    switch (event.name) {
                        case 'Event1':
                            displayPage(10);
                            break;
                        case 'Event2':
                            displayPage(11);
                            break;
                        case 'Event3':
                            displayPage(12);
                            break;
                        case 'Event4':
                            displayPage(13);
                            break;
                        default:
                            break;
                    }

                    $(".event_name").text(`${event.name}`);
                    $(".event_s_date").text(`${event.sDate}`);
                    $(".event_e_date").text(`${event.eDate}`);
                })
            }
        })
    }

    /** */

    /**set raitings and my results pages data and images */
    updateTables();
    getQuizData();
    /** */

    /**friends page setup */
    getFriendsArray();
    getReqsSentArray();
    getReqsRecArray();
    /** */

    /**set user imgs */
    showHidePassword("login_show_hide_password>input", "login_password_input>input");
    showHidePassword("reg_show_hide_password>input", "reg_password_input>input");
    showHidePassword("change_pass_show_hide>input", "change_password_input>input");

    getEvent1Data();

    $(".login_username_input>input, .login_password_input>input").keydown(function(e) {
        if (e.which == 13) {
            $(".login_btn").click();
        }
    })

    $(".reg_username_input>input, .reg_password_input>input").keydown(function(e) {
        if (e.which == 13) {
            $(".reg_btn").click();
        }
    })

    $(".reg_page").hide();

    $(".register_btn").click(function() {
        $(".login_page").hide();
        $(".reg_page").show();
    })

    $(".login_here_btn").click(function() {
        $(".login_page").show();
        $(".reg_page").hide();
    })

    /**register the user */
    $(".reg_btn").click(function() {
        let user = $(".reg_username_input>input").val();
        let password = $(".reg_password_input>input").val();
        $.ajax({
            url: "./register.php",
            type: "post",
            data: {
                registerBtn: true,
                username: user,
                password: password
            },
            success: function(data) {
                if (data == "111") {
                    alert("Registration Was Successful");
                    $(".reg_username_input>input").val("");
                    $(".reg_password_input>input").val("");
                    $(".login_here_btn").click();
                } else {
                    if (data != 0) {
                        alert(data);
                    }
                }
            }
        })
    })

    /**login */
    $(".login_btn").click(function() {
        let user = $(".login_username_input>input").val();
        let password = $(".login_password_input>input").val();
        $.ajax({
            url: "./login.php",
            type: "post",
            data: {
                loginInitials: true,
                username: user,
                password: password
            },
            success: function(data) {
                if (data == "111") {
                    window.location.href = "user.php";
                }
                if (data == "999") {
                    alert("Login Initials Are Wrong");
                }
            }
        })
    })


    /**logout */
    $(".logout_btn").click(function() {
        $.ajax({
            url: "logout.php",
            type: "post",
            data: {
                logout: true
            },
            success: function(data) {
                window.location.href = "index.php";
            }
        })
    })


    /**set user profile img */
    $.ajax({
        url: "arrays.php",
        type: "post",
        data: {
            arraysBtn: "user_imgs_array"
        },
        dataType: "json",
        success: function(data) {
            if (data != 0) {
                for (let index = 0; index < data.length; index++) {
                    if (user == data[index].user) {
                        $(".user_img").attr("src", `./Img/profile_imgs/${data[index].img}`)
                    }
                }
            }
        }
    })

    /** */

    /** click on settings icon*/
    $(".settings").click(function() {
        if (userSettingState) {
            $(".settings").css("transform", "rotate(360deg)");
            $(".drop_down").slideDown(200);
            userSettingState = false;
        } else {
            $(".settings").css("transform", "rotate(0deg)");
            $(".drop_down").slideUp(200);
            userSettingState = true;
        }
    })

    /** click on dropdown item forces slide up*/
    $(".dp_item").click(function() {
        $(".settings").css("transform", "rotate(0deg)");
        $(".drop_down").slideUp(200);
        userSettingState = true;
        $(".play_btn_wrapper").show();
    })

    /**display home page first */
    $(".page").hide();
    $(".page:eq(0)").show();

    /** */

    /**click on username or drop down home displays home page */
    $(".home").click(function() {
        displayPage(0);
        $(".play_btn_wrapper").show();
    })

    /**define home grid clicks */
    for (let index = 0; index < $(".home_grid_item").length; index++) {
        gridClicks(index);
    }

    $(".profile_page_link").click(function() {
        displayPage(7);
    })

    $(".play_btn").click(function() {
        displayPage(8);
        $(".play_btn_wrapper").hide();
    })

    /**update all data and images by clicking the button */
    $(".update_tables_btn").click(function() {
        updateTables();
        getQuizData();
    })

    $(".update_my_friends_btn").click(function() {
        $(".friends_cont_inner").empty();
        $(".req_sent_inner").empty();
        $(".req_rec_inner").empty();
        getFriendsArray();
        getReqsSentArray();
        getReqsRecArray();
    })

    /**unfriend */
    $(document).on("click", ".unfriend_btn", function() {
        let index = $(".unfriend_btn").index(this);
        let friend = $(`.friend_name:eq(${index})`).text().trim();
        if (confirm(`Are You Sure You Want To Remove Friend ${friend} ?`)) {
            $(`.firends_cont_item:eq(${index})`).remove();
            $.ajax({
                url: "friends_page.php",
                type: "post",
                data: {
                    friendsPageBtn: "unfriend",
                    user: user,
                    friend: friend,
                },
                success: function() {
                    $(".update_my_friends_btn").click();
                }
            })

        }
    })

    /**unsend friend request */
    $(document).on("click", ".unsend_btn", function() {
        let index = $(".unsend_btn").index(this);
        let friend = $(`.req_sent_name:eq(${index})`).text().trim();
        if (confirm(`Do You Want To Unsend Request ?`)) {
            $(`.req_sent_item:eq(${index})`).remove();
            $.ajax({
                url: "friends_page.php",
                type: "post",
                data: {
                    friendsPageBtn: "unsend",
                    user: user,
                    friend: friend,
                },
                success: function() {
                    $(".update_my_friends_btn").click();
                }
            })
        }
    })

    /**add friend */
    $(document).on("click", ".add_friend_btn", function() {
        let index = $(".add_friend_btn").index(this);
        let friend = $(`.req_rec_name:eq(${index})`).text().trim();
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "requests",
            },
            dataType: 'json',
            success: function(data) {
                let reqHasBeenUnsent = true;
                for (let i = 0; i < data.length; i++) {
                    if (friend == data[i].friend_name && user == data[i].user_name) {
                        reqHasBeenUnsent = false;
                        if (confirm(`Do You Want To Add ${friend} As Friend ?`)) {
                            $(`.req_rec_item:eq(${index})`).remove();
                            $.ajax({
                                url: "friends_page.php",
                                type: "post",
                                data: {
                                    friendsPageBtn: "addFriend",
                                    user: user,
                                    friend: friend,
                                },
                                success: function() {
                                    $(".update_my_friends_btn").click();
                                }
                            })
                        }
                        break;
                    }
                }
                if (reqHasBeenUnsent) {
                    $(`.req_rec_item:eq(${index})`).remove();
                    alert("This User Unsent Request");
                }
            }
        })
    })

    /**reject friend request*/
    $(document).on("click", ".rej_friend_btn", function() {
        let index = $(".rej_friend_btn").index(this);
        let friend = $(`.req_rec_name:eq(${index})`).text().trim();
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "requests",
            },
            dataType: 'json',
            success: function(data) {
                let reqHasBeenUnsent = true;
                for (let i = 0; i < data.length; i++) {
                    if (friend == data[i].friend_name && user == data[i].user_name) {
                        reqHasBeenUnsent = false;
                        if (confirm(`Do You Want Reject Request From ${friend} ?`)) {
                            $(`.req_rec_item:eq(${index})`).remove();
                            $.ajax({
                                url: "friends_page.php",
                                type: "post",
                                data: {
                                    friendsPageBtn: "rejFriend",
                                    user: user,
                                    friend: friend,
                                },
                                success: function() {
                                    $(".update_my_friends_btn").click();
                                }
                            })
                        }
                        break;
                    }
                }
                if (reqHasBeenUnsent) {
                    $(`.req_rec_item:eq(${index})`).remove();
                    alert("This User Unsent Request");
                }
            }
        })
    })

    $(".search_friend_iput>input").keydown(function(e) {
        if (e.which === 13) { //click on enter
            $(".search_user_btn").click();
        }
    })

    $(".search_user_btn").click(function() {
        $.ajax({
            url: "arrays.php",
            type: "post",
            data: {
                arraysBtn: "users_array"
            },
            dataType: "json",
            success: function(data) {
                if (data != 0) {
                    let searchedUser = $(".search_friend_iput>input").val().trim();
                    let noSearchResult = true;
                    for (let i = 0; i < data.length; i++) {
                        if (searchedUser == data[i].username && searchedUser != "") {
                            noSearchResult = false;
                            $(".search_result").empty();
                            $(".search_result").append("<div class='search_result_item p-2 d-flex flex-column gap-2 align-items-center'></div>")
                            $(`.search_result_item`).append("<div class='search_result_item_img_and_username d-flex gap-2 align-items-center'></div>");
                            $(`.search_result_item`).append("<div class='search_result_btns_cont d-flex gap-2'></div>");
                            $(`.search_result_btns_cont`).append("<div class='send_friend_req_btn btn btn-success'>Send Friend Request</div>");
                            $(`.search_result_btns_cont`).append("<div class='clean_search_user_btn btn btn-danger'>Clean</div>");
                            $(`.search_result_item_img_and_username`).append("<div><img src='./Img/user_default_avatar.png' class='search_user_img rounded-circle' width='60' height='60'></div>")
                            $(`.search_result_item_img_and_username`).append(`<div class='search_user_name'>${data[i].username}</div>`);
                            break;
                        }
                    }
                    $(".send_friend_req_btn").click(function() {
                        let friend = $(".search_user_name").text().trim();

                        $.ajax({
                            url: "arrays.php",
                            type: "post",
                            data: {
                                arraysBtn: "friends"
                            },
                            dataType: "json",
                            success: function(data) {
                                let isInFriends = false;
                                for (let i = 0; i < data.length; i++) {
                                    if (user == data[i].user_name && friend == data[i].friend_name) {
                                        isInFriends = true;
                                        alert("The User Is Already Your Friend");
                                        break;
                                    }
                                }
                                if (!isInFriends) {
                                    let isInReqSents = false;
                                    $.ajax({
                                        url: "arrays.php",
                                        type: "post",
                                        data: {
                                            arraysBtn: "requests"
                                        },
                                        dataType: "json",
                                        success: function(data) {
                                            for (let i = 0; i < data.length; i++) {
                                                if (user == data[i].friend_name && friend == data[i].user_name) {
                                                    isInReqSents = true;
                                                    alert("You Already Have Sent Request To This User");
                                                    break;
                                                }
                                            }
                                            if (!isInReqSents) {
                                                if (user == friend) {
                                                    alert("You And Yourself Are Already Friends. \n Unless You Are Suicidal")
                                                } else {
                                                    $.ajax({
                                                        url: "friends_page.php",
                                                        type: "post",
                                                        data: {
                                                            friendsPageBtn: "send_req",
                                                            user: user,
                                                            friend: friend
                                                        },
                                                        success: function() {
                                                            $(".update_my_friends_btn").click();
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    })
                    $.ajax({
                        url: "arrays.php",
                        type: "post",
                        data: {
                            arraysBtn: "user_imgs_array"
                        },
                        dataType: "json",
                        success: function(data) {
                            if (data != 0) {
                                for (let i = 0; i < data.length; i++) {
                                    if (searchedUser == data[i].user) {
                                        $(".search_user_img").attr("src", `./Img/profile_imgs/${data[i].img}`);
                                        break;
                                    }

                                }
                            }
                        }
                    })
                    if (noSearchResult && searchedUser != "") {
                        $(".search_result").empty();
                        $(".search_result").append("<div class='search_result_item p-2 d-flex flex-column gap-2 align-items-center'></div>")
                        $(`.search_result_item`).append("<div>There Is Not Such User</div>");
                        $(`.search_result_item`).append("<div class='clean_search_user_btn btn btn-danger'>Clean</div>");
                    }
                    $(".clean_search_user_btn").click(function() {
                        $(".search_result").empty();
                        $(".search_friend_iput>input").val("");
                    })
                }
            }
        })
    })


    /**delete account */
    $(".delete_account_btn").click(function() {
        if (confirm("Are You Sure You Want To Permanently Delete Your Account ?")) {
            $.ajax({
                url: "delete_user.php",
                type: "post",
                data: {
                    deleteUserBtn: true
                },
                success: function() {
                    window.location.href = "./index.php";
                }
            })
        }
    })

    /**change username */
    $(".change_username_btn").click(function() {
        if (confirm("You Sure You Want To Change Username ?")) {
            let newUsername = $(".change_username_input>input").val().trim();
            $.ajax({
                url: "change.php",
                type: "post",
                data: {
                    changeBtn: "change_username",
                    newUsername: newUsername
                },
                success: function() {
                    alert("Username Has Changed \n Log In Again");
                    window.location.href = "./index.php";
                }
            })
        }
    })

    /**change password */
    $(".change_password_btn").click(function() {
        if (confirm("You Sure You Want To Change Password ?")) {
            let newPassword = $(".change_password_input>input").val().trim();
            $.ajax({
                url: "change.php",
                type: "post",
                data: {
                    changeBtn: "change_password",
                    newPassword: newPassword
                },
                success: function() {
                    alert("Password Has Changed \n Log In Again");
                    window.location.href = "./index.php";
                }
            })
        }
    })

    /**From here starts play pages code*/
    $(".play_page").hide();
    $(".play_page:eq(0)").show();

    for (let i = 0; i < $(".play_type_btn").length; i++) {
        determinePlayType(i);
    }

    $(".choose_time").click(function() {
        $(".choose_time").prop("checked", false);
        $(this).prop("checked", true);
        timeControl = $(".choose_time").index(this); //index 0 is 5min index 1 is 3min and index 2 is 1 min
        $(".points").text('0');
    })


    $(".start_btn").click(function() {
        if (timeControl == 999) {
            alert("Choose Time Control");
        } else {
            $(".choose_time_cont").hide();
            $(".after_choosing_time_cont").show();
            switch (timeControl) {
                case 0:
                    $(".time_remining").text(300);
                    break;
                case 1:
                    $(".time_remining").text(180);
                    break;
                case 2:
                    $(".time_remining").text(60);
                    break;
                default:
                    break;
            }
            playTimer = setInterval(function() {
                timeRemining = $(".time_remining").text();
                let point = $(".points").text();
                if (timeRemining == 1) {
                    $(".time_remining").text(0);
                    clearInterval(playTimer);
                    $(".check_answer_cont").hide();
                    $(".timeout_cont").show();
                    setTimeout(function() {
                        $(".restart_btn_cont").show();
                        $(".restart_btn").css("opacity", "1");
                    }, 1000)
                    if (playType == "e_g_with_time") {
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "e_g_with_time",
                                point: point,
                                user: user,
                                timeControl,
                                timeControl
                            }
                        })
                    }
                    if (playType == "g_e_with_time") {
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "g_e_with_time",
                                point: point,
                                user: user,
                                timeControl,
                                timeControl
                            }
                        })
                    }

                    $(".restart_btn").click(function() {
                        switch (timeControl) {
                            case 0:
                                $(".change_play_type_btn").click();
                                $(".play_type_btn:eq(2)").click();
                                $(".choose_time:eq(0)").click();
                                $(".start_btn").click();
                                break;
                            case 1:
                                $(".change_play_type_btn").click();
                                $(".play_type_btn:eq(2)").click();
                                $(".choose_time_e_g:eq(1)").click();
                                $(".start_btn").click();
                                break;
                            case 2:
                                $(".change_play_type_btn").click();
                                $(".play_type_btn:eq(2)").click();
                                $(".choose_time:eq(2)").click();
                                $(".start_btn").click();
                                break;
                            default:
                                break;
                        }
                    })
                } else {
                    timeRemining--;
                    $(".time_remining").text(timeRemining);
                }
            }, 1000)
        }
    })


    $(".change_play_type_btn").click(function() {
        clearInterval(playTimer);
        $(".play_page, .after_choosing_time_cont, .timeout_cont, .restart_btn_cont, .after_quiz_cont").hide();
        $(".play_page:eq(0), .choose_time_cont, .check_answer_cont").show();

        timeControl = 999;
        $(".choose_time").prop("checked", false);
        $(".restart_btn").css("opacity", "0");

        $(".quiz_finish_btn").removeClass("disabled");
        $(".answers_cont").hide();
        $(".correct_or_wrong").text("answer is ?");
        $(".gain_or_lose_points").text("+1 or -1");
        $(".quiz_answer_input").val("");
        $(".points_collected").text("0");

        eventVar = "";

    })

    probAnswerClicks("prob_answer", "asnwer_input");

    $(".next_btn").click(function() {

        switch (playType) {
            case "e_g_no_time":
                setPlayTypeTestPages(0);
                break;
            case "g_e_no_time":
                setPlayTypeTestPages(1);
                break;
            case "e_g_with_time":
                EGSetup();
                break;
            case "g_e_with_time":
                GESetup();
                break;
            default:
                break;
        }

    })

    $(".after_choosing_cont").hide();

    /** check button click */
    $(".check_btn").click(function() {
        if (checkBtnState) {
            let randomWord = $(".random_word").text();
            let userAnswered = $(".asnwer_input").val();
            let points = $(".points").text();
            let answer;
            /**i have this variable because if answer is wrong i want to do something only once by being out of the each loop.
             * i think this will enhance performance
             */
            let passedTest = false;

            if (playType == "e_g_no_time" || playType == "e_g_with_time") {
                $.each(dictionary, function(i, e) {
                    if (randomWord == e.eng_word) {
                        answer = e.geo_word;
                    }
                    if ($(".asnwer_input").val() == answer) {
                        passedTest = true;
                        return false;
                    }
                })
            }

            if (playType == "g_e_no_time" || playType == "g_e_with_time") {
                $.each(dictionary, function(i, e) {
                    if (randomWord == e.geo_word) {
                        answer = e.eng_word;
                    }
                    if ($(".asnwer_input").val() == answer) {
                        passedTest = true;
                        return false;
                    }
                })
            }

            if (passedTest && userAnswered != "") { //if answer is correct  
                checkBtnState = false;
                points++;
                $(".points").text(`${points}`);
                $(".check_btn").addClass("disabled");
                $(".check_visual, .points").removeClass("text-warning");
                $(".check_visual, .points").removeClass("text-danger");
                $(".check_visual, .points").addClass("text-success");
                $(".check_visual").text("check");
                if (playType == "e_g_no_time") {
                    $.ajax({
                        url: "points.php",
                        type: "post",
                        data: {
                            pointsBtn: "e_g_no_time",
                            point: points,
                            user: user
                        }
                    })
                }
                if (playType == "g_e_no_time") {
                    $.ajax({
                        url: "points.php",
                        type: "post",
                        data: {
                            pointsBtn: "g_e_no_time",
                            point: points,
                            user: user
                        }
                    })
                }

            }
            if (!passedTest && userAnswered != "") { //if answer is wrong 
                points--;
                if (points != -1) {
                    $(".points").text(`${points}`);
                    if (playType == "e_g_no_time") {
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "e_g_no_time",
                                point: points,
                                user: user
                            }
                        })
                    }
                    if (playType == "g_e_no_time") {
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "g_e_no_time",
                                point: points,
                                user: user
                            }
                        })
                    }
                }
                $(".check_visual, .points").removeClass("text-warning");
                $(".check_visual, .points").removeClass("text-success");
                $(".check_visual, .points").addClass("text-danger");
                $(".check_visual").text("close");
            }
        }
    })

    $(".quiz_finish_btn").click(function() {
        winScr();
        $(".quiz_finish_btn").addClass("disabled");
        $(".answers_cont, .after_quiz_cont").show();
        let questions = [];
        let userAnswers = [];
        let correctAnswers = [];
        let pointsCollected = 0;
        for (let i = 0; i < 10; i++) {
            questions.push($(`.quiz_random_word:eq(${i})`).text());
            userAnswers.push($(`.quiz_answer_input:eq(${i})`).val());
        }

        switch (playType) {
            case "e_g_quiz":
                for (let j = 0; j < 10; j++) {
                    $.each(dictionary, function(i, e) {
                        if (e.eng_word == questions[j]) {
                            correctAnswers.push(e.geo_word);
                        }
                    })

                }
                break;
            case "g_e_quiz":
                for (let j = 0; j < 10; j++) {
                    $.each(dictionary, function(i, e) {
                        if (e.geo_word == questions[j]) {
                            correctAnswers.push(e.eng_word);
                        }
                    })

                }
                break;
            default:
                break;
        }


        for (let i = 0; i < 10; i++) {
            if (userAnswers[i] == correctAnswers[i]) {
                pointsCollected++;
                $(`.correct_or_wrong:eq(${i})`).text(`Correct`);
                $(`.correct_or_wrong:eq(${i})`).removeClass("text-danger");
                $(`.correct_or_wrong:eq(${i})`).addClass("text-success");
                $(`.gain_or_lose_points:eq(${i})`).text(`+1`);
                $(`.gain_or_lose_points:eq(${i})`).removeClass("text-danger");
                $(`.gain_or_lose_points:eq(${i})`).addClass("text-success");
            } else {
                $(`.correct_or_wrong:eq(${i})`).text(`${correctAnswers[i]}`);
                $(`.correct_or_wrong:eq(${i})`).removeClass("text-success");
                $(`.correct_or_wrong:eq(${i})`).addClass("text-danger");
                $(`.gain_or_lose_points:eq(${i})`).text(`-1`);
                $(`.gain_or_lose_points:eq(${i})`).removeClass("text-success");
                $(`.gain_or_lose_points:eq(${i})`).addClass("text-danger");
            }
        }

        let currentPoints = parseInt($(".total_quiz_points").text());
        let totalPoints = currentPoints + pointsCollected
        $(".total_quiz_points").text(`${totalPoints}`);

        switch (playType) {
            case "e_g_quiz":

                switch (eventVar) {
                    case "event1":
                        $.ajax({
                            url: "events.php",
                            type: "post",
                            data: {
                                eventBtn: "set_event1_e_g_points",
                                user: user,
                                point: totalPoints
                            }
                        })
                        break;
                    default:
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "e_g_quiz",
                                user: user,
                                point: totalPoints
                            }
                        })
                        break;
                }
                break;
            case "g_e_quiz":
                switch (eventVar) {
                    case "event1":
                        $.ajax({
                            url: "events.php",
                            type: "post",
                            data: {
                                eventBtn: "set_event1_g_e_points",
                                user: user,
                                point: totalPoints
                            }
                        })
                        break;
                    default:
                        $.ajax({
                            url: "points.php",
                            type: "post",
                            data: {
                                pointsBtn: "g_e_quiz",
                                user: user,
                                point: totalPoints
                            }
                        })
                        break;
                }
                break;
            default:
                break;
        }

        $(".points_collected").text(`${pointsCollected}`);
    })

    $(".quiz_restart_btn").click(function() {
        winScr();
        $(".quiz_finish_btn").removeClass("disabled");
        $(".answers_cont, .after_quiz_cont").hide();
        $(".correct_or_wrong").text("answer is ?");
        $(".gain_or_lose_points").text("+1 or -1");
        $(".quiz_answer_input").val("");
        $(".points_collected").text("0");
        switch (playType) {
            case "e_g_quiz":
                setPlayTypeQuizPages(0);
                break;
            case "g_e_quiz":
                setPlayTypeQuizPages(1);
                break;
            default:
                break;
        }
    })

    /**Here is the end of play page*/

    clickOnUserImgAndUsernameCont();

    $(".user_img, .username").click(function() {
        $(".home").click();
        $(".home_grid_item:eq(1)").click();
    })


    $(".back_btn").click(function() {
        function withOrWithoutScroll(index) {
            switch (index) {
                case 1:
                    displayPage(pageIndex.oldValue);
                    window.scrollTo({
                        top: scrollPos,
                        behavior: 'instant',
                    });


                    break;
                case 0:
                    displayPage(pageIndex.oldValue);
                    break;
                default:
                    break;
            }
        }
        if (
            pageIndex.oldValue == 1 && pageIndex.newValue == 9 ||
            pageIndex.oldValue == 3 && pageIndex.newValue == 9
        ) {
            withOrWithoutScroll(1);
        } else {
            withOrWithoutScroll(0);
        }
    })

    displayEvnetsInfo();

    $(".update_events_btn").click(function() {
        displayEvnetsInfo();
    })

    $(".update_event1_btn").click(function() {
        getEvent1Data();
        $.ajax({
            url: "events.php",
            type: "post",
            data: {
                eventBtn: "get_events"
            },
            dataType: "json",
            success: function(data) {
                if (data[0].showDailyTable == 1) {
                    $(".event1_hide_show").show();
                    updateEvent1EGData();
                    updateEvent1GEData();
                } else {
                    $(".event1_hide_show").hide();
                    for (let i = 0; i < $(".event1_raitings_e_g_user_username").length; i++) {
                        $(`.event1_raitings_e_g_user_username:eq(${i})`).text(`username`);
                        $(`.event1_raitings_e_g_user_point:eq(${i})`).text(`...`);
                    }
                    $(`.event1_raitings_e_g_user_username`).siblings().attr("src", `./Img/user_default_avatar.png`);
                    $(`.event1_raitings_g_e_user_username`).siblings().attr("src", `./Img/user_default_avatar.png`);
                    for (let i = 0; i < $(".event1_raitings_g_e_user_username").length; i++) {
                        $(`.event1_raitings_g_e_user_username:eq(${i})`).text(`username`);
                        $(`.event1_raitings_g_e_user_point:eq(${i})`).text(`...`);
                    }
                }
            }
        })
        $(".event1_table_update_time").text(`${getDate().month}/${getDate().day}/${getDate().year} ${getDate().hour}:${getDate().minute}`)
    })

    $(".event1_quiz_btn_e_g").click(function() {
        eventVar = "event1";
        $(".home").click();
        $(".play_btn").click();
        $(".play_type_btn:eq(4)").click();
        $(".quiz_restart_btn").click();
    })

    $(".event1_quiz_btn_g_e").click(function() {
        eventVar = "event1";
        $(".home").click();
        $(".play_btn").click();
        $(".play_type_btn:eq(5)").click();
        $(".quiz_restart_btn").click();
    })

    createEvent1Raitings();

    $.ajax({
        url: "arrays.php",
        type: "post",
        data: {
            arraysBtn: "users_array"
        },
        dataType: "json",
        success: function(data) {

            $(".search_event1_e_g_user_input").keydown(function(e) {
                if (e.which == 13) {
                    $('.search_event1_e_g_user_btn').click();
                }
            })

            $(".search_event1_g_e_user_input").keydown(function(e) {
                if (e.which == 13) {
                    $('.search_event1_g_e_user_btn').click();
                }
            })

            $(".search_event1_e_g_user_btn").click(function() {
                let UserExists = false;
                let searchuser = $('.search_event1_e_g_user_input').val().trim();
                for (let i = 0; i < data.length; i++) {
                    if (searchuser == $(`.event1_raitings_e_g_user_username:eq(${i})`).text()) {
                        $(`.event1_raitings_overflow`).scrollTop('0');
                        let distance = $(`.event1_raitings_e_g_user:eq(${i})`).offset().top - $(`.event1_raitings_overflow`).offset().top;
                        $(`.event1_raitings_overflow`).scrollTop(distance);
                        UserExists = true;
                    }
                }
                if (!UserExists && searchuser != '') {
                    alert('There is no such user');
                }
            })

            $(".search_event1_g_e_user_btn").click(function() {
                let UserExists = false;
                let searchuser = $('.search_event1_g_e_user_input').val().trim();
                for (let i = 0; i < data.length; i++) {
                    if (searchuser == $(`.event1_raitings_g_e_user_username:eq(${i})`).text()) {
                        $(`.event1_raitings_overflow`).scrollTop('0');
                        let distance = $(`.event1_raitings_g_e_user:eq(${i})`).offset().top - $(`.event1_raitings_overflow`).offset().top;
                        $(`.event1_raitings_overflow`).scrollTop(distance);
                        UserExists = true;
                    }
                }
                if (!UserExists && searchuser != '') {
                    alert('There is no such user');
                }
            })

        }
    })

    $(".send_message_btn").click(function() {
        let message = $(".wright_message_textarea").val();
        if (message == '') {
            alert('You Can Not Send Empty Message');
        } else {
            $.ajax({
                url: "message.php",
                type: "post",
                data: {
                    messageBtn: true,
                    message: message,
                    user: user,
                    date: new Date()
                },
                success: function(data) {
                    alert('Message Has Been Sent');
                    $(".wright_message_textarea").val("");
                }
            })

        }
    })

    $.each(dictionary, function(i, e) {
        $(".dictionary_table").append("<tr class='dictionary_table_item'></tr>");
    })

    for (let i = 0; i < $(".dictionary_table_item").length; i++) {
        $(`.dictionary_table_item:eq(${i})`).append('<td class="text-info">' + (i + 1) + '</td>');
        $(`.dictionary_table_item:eq(${i})`).append('<td class="text-warning">' + dictionary[i].eng_word + '</td>');
        $(`.dictionary_table_item:eq(${i})`).append('<td class="text-success">' + dictionary[i].geo_word + '</td>');
    }

    $(".dic_search_result_cont_wrapper").hide();

    $(".dictionary_search_input").keydown(function(e) {
        if (e.which == 13) {
            $(".dictionary_search_btn").click();
        }
    })

    $(".dictionary_search_btn").click(function() {
        let word = $(".dictionary_search_input").val().trim();
        if (word != '') {
            let isResult = false;
            $.each(dictionary, function(i, e) {
                if (word == e.eng_word || word == e.geo_word) {
                    $(".dic_search_result_cont_wrapper").show();
                    $(".search_result_eng_word").text(`${e.eng_word}`);
                    $(".search_result_geo_word").text(`${e.geo_word}`);
                    isResult = true;
                    return false;
                }
            })

            if (!isResult) {
                alert("There Is Not Such Word In This Dictionary");
                $(".dictionary_search_input").val('');
            }
        }

    })

    $(".clear_dic_search_btn").click(function() {
        $(".dic_search_result_cont_wrapper").hide();
        $(".search_result_eng_word").text(`...`);
        $(".search_result_geo_word").text(`...`);
        $(".dictionary_search_input").val('');
    })



    $(".event1_table_update_time").text(`${getDate().month}/${getDate().day}/${getDate().year} ${getDate().hour}:${getDate().minute}`)



})