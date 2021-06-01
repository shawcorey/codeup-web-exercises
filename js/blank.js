const body = document.body;
renderHomePage();
function renderBlogPage(){
    // be sure to empty out the html body before running anything else in this function!
    // calls functions that add components to blog page, like:
    // getNavBar();
    // getBlogArea();
}
function renderHomePage(){
    // be sure to empty out the html body before running anything else in this function!
    // calls functions that add components to blog page, like:
    // getNavBar();
    // whatever else you decide to build for your home page!
}
function addButtonEvent() {
    // adds event and listener to blog form button
}
function addPost() {
    // button listener for adding a blog post to page
}
function buildBlogPost() {
    // orchestrates building a blog post html node
    // uses the three methods below to add children to the blog node that it returns to addPost()
}
function getDateNode() {
    // builds and returns node for the date
}
function getBlogTextNode() {
    // builds and returns node for the post text from the form
}
function getNameNode(){
    // builds and returns node for the name text from the form
}
// Use to remove your static blog-related html and serve it from the DOM as a node
function getBlogArea(){
    body.innerHTML += `<div class="container">
        <div class="row my-5 mx-3 p-2 border">
            <div class="col-12 px-0">
                <form action="">
                    <div class="form-group my-0">
                        <label for="user-input">What's on your mind?</label>
                        <textarea id="user-input" class="form-control"></textarea>
                    </div>
                    <div class="form-group my-1">
                        <label for="user-name">Name</label>
                        <input id="user-name" class="form-control" type="text">
                    </div>
                    <button id="submitBtn" class="btn btn-dark mt-1" type="button">POST</button>
                </form>
            </div>
        </div>
        <div id="blog-container">
        </div>
    </div>`;
}