/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

let numberOfFilms;


start();

const personalMovieDB={
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();


function detectPersonalLevel () {
 if (personalMovieDB.count < 10) {
     console.log ("Просмотрено довольно мало фильмов");
      }
  else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log ("Вы классический зритель");
  }    
  else if (personalMovieDB.count >=30) {
    console.log ("Вы киноман");
  }
  else {
      alert("errorchik");
  }
  console.log(personalMovieDB);
}

function rememberMyFilms() {

    for (let i=0; i<2; i++) {
        
        const a=prompt('Один из последних просмотренных фильмов?',''),
        b=prompt('На сколько оцените его?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a]=b;
            console.log( 'done');
        } else {
            console.log('error');
            i--;
        }
       
        
     }
    
    }

    function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
        while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
        }
    }    


    function writeYourGenres () {
        for (let i=1; i<4; i++) {
            let favoriteGenre= prompt(`Ваш любимый жанр под номером ${i}`,'');
            if (favoriteGenre !=null && favoriteGenre != '' && isNaN(favoriteGenre)!= false) {
                personalMovieDB.genres[i-1]=favoriteGenre;
            } else {
                favoriteGenre= prompt(`Ваш любимый жанр под номером ${i}`,'');
                i--;
            }
        }
    
    }    
function showMyDB () {
    if (personalMovieDB.privat== false) {
        console.log(personalMovieDB);
    }
}