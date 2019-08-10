$(document).ready(function () {
    loadAjaxData();
});

function loadAjaxData() {
    $.ajax({
        dataType: 'json',
        url: 'Gallery.json',
        success: function (jsonObj) {
            var index = 0;

            $("#previous").click(previousImage);
            $("#next").click(nextImage);
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
                var srcImg = "<img src='" + jsonObj[index].url + "'style='max-height: 100%; max-width: 100%'>";
                $("#container").hide().html(srcImg).fadeIn(1000, 'linear');
            }

            showGallery();
            setInterval(nextImage, jsonObj[index].time);
        }
    });
};
