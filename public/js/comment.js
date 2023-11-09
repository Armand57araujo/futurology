const submitButton = document.querySelector("#commentButton");
const commentInput = document.querySelector("#commentInput");

submitButton.addEventListener("submit", function(event) {
    event.preventDefault();
    const comment = commentInput.value;
    const post_id = window.location.href.split("/")[4]
    
    fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => {
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            throw new Error('Failed to create comment');
        }
    })
    .catch(error => {
        alert(error.message);
    });
});
