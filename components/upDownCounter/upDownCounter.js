"use strict";

function upDownCounter(){
    const controller = this;

    controller.displayNumber = 0;

    controller.up = ()=>{
        controller.displayNumber+=10;
    }

    controller.down = ()=>{
        controller.displayNumber-=10;
    }
}

angular.module('MyApp').component('upDownCounter', {
    template:`
    <div class="counter-box">
        <button class="button" ng-click="$ctrl.up()">Up</button>
        <div class="number">{{$ctrl.displayNumber}}</div>
        <input type="text" class="expanding-input" expand-On-Focus display-number="$ctrl.displayNumber"></input>
        <button class="button" ng-click="$ctrl.down()">Down</button>
    </div>
        `,
        controller: upDownCounter
});