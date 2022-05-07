/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

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
