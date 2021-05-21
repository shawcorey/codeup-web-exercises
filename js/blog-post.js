const blogContainer = document.getElementById("blog-container");
addButtonEvent();

function addButtonEvent() {

    document.getElementById("submitBtn")
        .addEventListener("click", addPost);
}

function addPost() {

  blogContainer.appendChild(buildBlogPost());

}

function buildBlogPost() {

    let blogPost = document.createElement("div");
    blogPost.setAttribute("class","col-12 border mb-1");
    blogPost.appendChild(getDateNode());
    blogPost.appendChild(getBlogText());
    return blogPost;
}

function getDateNode() {
    let dateNode = document.createElement("p");
    dateNode.textContent = new Date(Date.now()).toDateString();
    return dateNode
}

function getBlogText() {
    let blogText = document.getElementById("user-input").value;
    let paragraphTag = document.createElement("p");
    paragraphTag.textContent = blogText;
    paragraphTag.setAttribute("class", "p-2");
    return paragraphTag;
}
