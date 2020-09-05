const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const searchForm = document.querySelector('.header__searchform');
const searchBtn = document.querySelector('.header__search');
const cancelSearchBtn= document.querySelector('.btn-cancel');
const cartBtn = document.querySelector('.header__cart');


burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('block_scroll');
});

const searchGroup = [searchBtn, menu, cartBtn, burger];
searchBtn.addEventListener('click', function(){
    for(let el of searchGroup){
        el.classList.add('hidden');
    }
    searchForm.classList.add('active');
});

cancelSearchBtn.addEventListener('click', function(){
    for(let el of searchGroup){
        el.classList.remove('hidden');
    }
    searchForm.classList.remove('active');
});

const day0 = document.getElementById("day0");
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const hour0 = document.getElementById("hour0");
const hour1 = document.getElementById("hour1");
const min0 = document.getElementById("min0");
const min1 = document.getElementById("min1");
const sec0 = document.getElementById("sec0");
const sec1 = document.getElementById("sec1");

function get_timer(){
    let date_new = "January 1,2021 00:00";
    let date_t = new Date(date_new);
    const date = new Date();
    let timer = date_t - date;
    if(date_t > date){
        let day = parseInt(timer/(60*60*1000*24));
        if(day < 10){
            day = '00' + day;
        }else{
            if(day < 100){
                day = '0' + day;
            }
        }
        day = day.toString();
        let hour = parseInt(timer/(60*60*1000))%24;
        if(hour < 10){
            hour = '0' + hour;
        }
        hour = hour.toString();
        let mins = parseInt(timer/(1000*60))%60;
        if(mins < 10){
            mins = '0' + mins;
        }
        mins = mins.toString();
        let sec = parseInt(timer/1000)%60;
        if(sec < 10) {
            sec = '0' + sec;
        }
        sec = sec.toString();
        day0.innerText = day[0];
        day1.innerText = day[1];
        day2.innerText = day[2];
        hour0.innerText = hour[0];
        hour1.innerText = hour[1];
        min0.innerText = mins[0];
        min1.innerText = mins[1];
        sec0.innerText = sec[0];
        sec1.innerText = sec[1];
        setTimeout(get_timer,1000);
    }
    else{
        document.getElementById("clock").innerHTML = "<span id='stop'>С Новым годом!</span>";
    }
}
get_timer();