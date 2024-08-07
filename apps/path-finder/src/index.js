const paths = [
    "The path is made by walking.",
    "If the path be beautiful, let us not ask where it leads.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Your path is beautiful and crooked and just as it should be.",
    "Follow your own path and let people talk.",
    "The journey of a thousand miles begins with one step.",
    "It is not the path which is the difficulty; rather, it is the difficulty which is the path.",
    "Sometimes the right path is not the easiest one.",
    "All paths are the same, leading nowhere. Therefore, pick a path with heart!",
    "The path you take is up to you. Make good choices, dream big, it is never too late.",
    "May the bridges I burn light the way."
];

const randomPath = paths[Math.floor(Math.random() * paths.length)];

document.getElementById("path").innerHTML = randomPath;