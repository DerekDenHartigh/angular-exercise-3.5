"use strict";

function expandOnFocus(){
    // this is super obnoxious, enjoy, unless you have epilepsy, then you may want to comment this out
    $('up-down-counter').on('click', ()=>{
        if ($('body').hasClass('pink')===true){
            $('body').removeClass('pink');
        } else {
            $('body').addClass('pink');
        }
    })
    return{
        restrict: "A",
        link: function($scope, $element, $attrs) {

            let height;

            $element.on('focus', ()=>{
                $element.css('height', height+"px"); // this works w/ hardcoded values not w/ variables yet
            }),

            $element.on('blur', ()=>{
                $element.css('height', '50px');
            }),

            $scope.$watch($attrs.displayNumber, function(value) {
                height = value;
                console.log(value);
            });
        }
    };
};

angular
.module("MyApp")
.directive("expandOnFocus", expandOnFocus);