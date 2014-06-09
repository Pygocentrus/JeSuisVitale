// BLUR
(function() {
    var content = document.querySelector('.blur-percentage');
    var duplicate = content.cloneNode(true);
    var contentBlurred = document.createElement('div');
    contentBlurred.className = 'content-blurred';
    contentBlurred.appendChild(duplicate);

    var blur = document.querySelector('#blur');
    blur.appendChild(contentBlurred);
}).call(this);
