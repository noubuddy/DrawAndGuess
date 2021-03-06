"use strict";

var unsentStrokes = [];

var connection = new signalR.HubConnectionBuilder().withUrl('/drawHub', {
    skipNegotiation: false
}).build();

connection.on('newStroke', drawStroke);
connection.on('clearCanvas', clearCanvas);
connection.start().then(() => console.log('connected!')).catch(err => console.error(err));

var canvas = document.getElementById('draw-canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 4;

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ev => {
    ev.preventDefault();
    if (confirm("Are you sure you want to clear everyone's canvases???")) {
        clearCanvas();
        connection.send('ClearCanvas');
    }
});

var colorButton = document.getElementById('color');

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var penDown = false;
var previous = { x: 0, y: 0, ts: 0 };

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('touchstart', mouseDown);

canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('touchend', mouseUp);
canvas.addEventListener('touchcancel', mouseUp);

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('touchmove', mouseMove);

function mouseDown() {
    penDown = true;
}

function mouseUp() {
    penDown = false;
}

function mouseMove(ev) {
    ev.preventDefault();
    const millisecondsSinceLastStroke = (new Date()).getTime() - previous.ts;
    if (penDown && millisecondsSinceLastStroke < 100) {
        var start = {
            x: previous.x - canvas.offsetLeft,
            y: previous.y - canvas.offsetTop
        };
        var end = {
            x: ev.pageX - canvas.offsetLeft,
            y: ev.pageY - canvas.offsetTop
        };
        drawStroke(start, end, colorButton.value);
        unsentStrokes.push({
            start: start,
            end: end,
            color: colorButton.value
        });
    }
    previous = {
        x: ev.pageX,
        y: ev.pageY,
        ts: (new Date()).getTime()
    };
}

function drawStroke(start, end, color) {
    color = color || "#000";
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

setInterval(function () {
    if (unsentStrokes.length) {
        connection.send('NewStrokes', unsentStrokes);
        unsentStrokes = [];
    }
}, 250);