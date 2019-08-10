/*
 *   Created by: Ederson Cardoso - Created on: August 04, 2019
*/

// IFFE - Immediataly Invoked Funcion Expression
// Anonymous Self Executing Function
(function () {
    "use strict";

    const xhr = new XMLHttpRequest();

    xhr.onload = function loadFile () {
        const jsonObj = JSON.parse(this.responseText);
        var index = 0;

        $("#next").click(nextImage);
        $("#previous").click(previousImage);
        $("#update").click(updateGallery);

        function nextImage() {
            if (index >= jsonObj.length - 1) {
                index = 0;
            } else {
                index++;
            }
            showGallery();
        }

        function previousImage() {
            if (index <= 0) {
                index = jsonObj.length - 1;
            } else {
                index--;
            }
            showGallery();
        }

        function updateGallery() {
            index = 0;
            showGallery();
        }

        function showGallery() {
            var srcImg = "<img src='" + jsonObj[index].url + "'>";
            $("#container").hide().html(srcImg).fadeIn();
        }

        showGallery();
        setInterval(nextImage, jsonObj[index].time);
    };

    xhr.open('get', './Gallery.txt');
    xhr.send();

})();