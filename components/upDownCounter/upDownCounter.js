"use strict";

function upDownCounter(){
    const controller = this;

    controller.displayNumber = 0;

    controller.up = ()=>{
        controller.displayNumber++;
    }

    controller.down = ()=>{
        controller.displayNumber--;
    }
}

angular.module('MyApp').component('upDownCounter', {
    template:`
    <div class="counter-box">
        <button class="button" ng-click="$ctrl.up()">Up</button>
        <div class="number">{{$ctrl.displayNumber}}</div>
        <button class="button" ng-click="$ctrl.down()">Down</button>
    </div>
        `,
        controller: upDownCounter
});