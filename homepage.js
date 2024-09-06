let movies = [{
    item: 'img/1.jpg'
}, {
    item: 'img/2.jpg'
}, {
    item: 'img/3.jpg'
}, {
    item: 'img/4.jpg'
}, {
    item: 'img/5.jpg'
}, {
    item: 'img/6.jpg'
}, {
    item: 'img/7.jpeg'
}]

let trend = document.querySelector('.trending-movies');

movies.forEach((movies) => {
    trend.innerHTML += `
        <img src="${movies.item}" alt="">
    `
})

console.log('tae');