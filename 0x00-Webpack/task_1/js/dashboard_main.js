import $ from 'jquery';
const _ = require('lodash');

$(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});

let count = 0;
const updateCounter = _.debounce(() => {
    $('button').on('click', () => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    })
}, 300);

updateCounter();