document.addEventListener("DOMContentLoaded", () => {
    const heartButton = document.querySelector(".heart-btn");
    const loveCount = document.querySelector(".love-count");
    const postForm = document.getElementById("post-form");
    const postContent = document.getElementById("post-content");
    const postsContainer = document.getElementById("posts-container");

    // Load saved like count
    const savedLikeCount = localStorage.getItem("loveCount");
    if (savedLikeCount) {
        loveCount.textContent = savedLikeCount;
    } else {
        loveCount.textContent = "0";
    }

    // Load saved posts
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts.forEach(post => {
        const newPost = document.createElement("div");
        newPost.className = "post";
        newPost.textContent = post;
        postsContainer.prepend(newPost);
    });

    heartButton.addEventListener("click", () => {
        let count = parseInt(loveCount.textContent);
        count++;
        loveCount.textContent = count;
        
        // Save updated like count
        localStorage.setItem("loveCount", count);
    });

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newPost = document.createElement("div");
        newPost.className = "post";
        newPost.textContent = postContent.value;
        postsContainer.prepend(newPost);
        
        // Save new post to local storage
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(postContent.value);
        localStorage.setItem("posts", JSON.stringify(posts));

        postContent.value = "";
    });
});