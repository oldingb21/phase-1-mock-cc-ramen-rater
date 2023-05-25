// write your code here
window.addEventListener('DOMContentLoaded', (e) => {
    fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramens) => {
        ramens.forEach(ramen => {
            const ramenImg = document.createElement('img');
            ramenImg.src = ramen.image
            document.getElementById("ramen-menu").appendChild(ramenImg);
            ramenImg.addEventListener('click', e => {
                const ramenDetailImg = document.querySelector('.detail-image');
                ramenDetailImg.src = e.target.src;
                const ramenDetailName = document.querySelector('.name');
                ramenDetailName.textContent = ramen.name
                const ramenDetailRestaurant = document.querySelector('.restaurant');
                ramenDetailRestaurant.textContent = ramen.restaurant;
                const ramenRating = document.querySelector('#rating-display');
                ramenRating.textContent = ramen.rating;
                const ramenComment = document.querySelector('#comment-display');
                ramenComment.textContent = ramen.comment;
            })
        });
    })
    document.querySelector('#new-ramen').addEventListener('submit', e => {
        e.preventDefault();
        const newImg = document.createElement('img')
        newImg.src = e.target.image.value;
        fetch("http://localhost:3000/ramens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name":`${e.target.name.value}`,
                "restaurant":`${e.target.restaurant.value}`,
                "image":`${e.target.image.value}`,
                "rating": parseInt(e.target.rating.value, 10),
                "comment":`${e.target.new_comment.value}`,
            })
        })
        document.getElementById("ramen-menu").appendChild(newImg);
    })
})