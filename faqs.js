/* all code part 1 goes inside one anonymous function that runs when the page is finished loading */
window.onload = function() {
    var allHeadings = document.getElementsByTagName("h2");

    for (var i = 0; i < allHeadings.length; i++) {

        allHeadings[i].onclick = function() {

            if (!this.hasAttributes('.minus')) {
                this.setAttribute('class', 'minus');
                this.nextElementSibling.setAttribute('class', 'open');
            } else {
                this.removeAttribute('class');
                this.nextElementSibling.removeAttribute('class');
            }

        }
    }

    document.getElementById('first_link').focus();

}