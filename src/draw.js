define([

], function(){

  'use strict';

  return function(ctx){
    ctx.fillRect(0, 0, this.width, this.height);
    this.entities.forEach(function(entity){
    	entity.draw(ctx);
    });
  };

});