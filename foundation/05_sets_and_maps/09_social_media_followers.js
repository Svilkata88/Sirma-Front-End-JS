

function socialMedia(input) {
    
    const followers = {};

    for ( row of input ) {
        const [command, ...rest] = row.split(' ');
        if (command === 'Follow'){
            const username = rest[0];
            if (!followers[username]) {
                followers[username] = {posts: 0, likes: 0};
            }
        }
        else if (command === 'Post') {
            const username = rest[0];
            followers[username].posts++;
        }
        else if (command === 'Like') {
            const username = rest[0];
            const number = rest[1];

            followers[username].likes += Number(number);
        }
        else if (command === 'Unfollow') {
            const username = rest[0];
            delete followers[username];
        }
    }

    const sortedFollowers = Object.entries(followers)
        .sort((a, b) => b[0].posts - a[0].posts)
        .sort((a, b) => b[0].likes - a[0].likes)
        .forEach(username => {
            console.log(`${username[0]}: ${username[1].posts} posts, ${username[1].likes} likes`);
        })

}

socialMedia(
     [
        "Follow Alice",
        "Post Alice",
        "Like Alice 10",
        "Follow Bob",
        "Post Bob",
        "Post Bob",
        "Like Bob 5",
        "Unfollow Alice",
        "Follow Charlie",
        "Like Charlie 3"
    ]
)