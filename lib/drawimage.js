var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');

module.exports = function(req,res){
  var png = drawImage(getSize(req.params.args)).toBuffer();
  res.status(200).send(png);
};

function getSize(str){
  return str.toUpperCase().split('X');
}

function drawImage(arr){
  var width = parseInt(arr[0],10);
  var height = parseInt(arr[1],10);
  var canvas = new Canvas(width,height);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();

  var text = width+'X'+height;
  //绘制图形
  ctx.fillStyle = '#9c9c9c';
  ctx.fillRect(0, 0, width, height);

  //绘制文字
  ctx.fillStyle = "#fff";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width/2, height/2);

  //结束绘制
  ctx.closePath();

  return canvas;
}
