const followButton = document.querySelector('.follow-btn');
const followLocalStorageKey = 'follow';
const isFollowing = JSON.parse(localStorage.getItem(followLocalStorageKey)) || false;

updateFollowButton(isFollowing);

function updateFollowButton(isFollowing) {
    if (isFollowing) {
        followButton.innerText = 'Following';
        followButton.classList.add('is-following')};
    if (!isFollowing) {
        followButton.innerText = 'Follow';
        followButton.classList.remove('is-following');
    }
}

followButton.addEventListener('click', clickOnFollowButton);

function clickOnFollowButton() {
    const isCurrentlyFollowing = followButton.innerText === 'Following';
    const newFollowStatus = !isCurrentlyFollowing;
    updateFollowButton(newFollowStatus);
    localStorage.setItem(followLocalStorageKey, JSON.stringify(newFollowStatus));
}
