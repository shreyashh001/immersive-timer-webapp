let timer;
let seconds = 0;
const display = document.querySelector('.timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn'); // New Pause button
const resetBtn = document.getElementById('reset-btn');

// Set default background image
document.body.style.backgroundImage = "url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-black-solid-color-background.jpg')"; // Set your default wallpaper URL here

// Timer Functionality
startBtn.addEventListener('click', function() {
    // Prevent starting multiple timers
    if (!timer) {
        timer = setInterval(function() {
            seconds++;
            display.innerHTML = formatTime(seconds);
        }, 1000);
    }
});

// New Pause Functionality
pauseBtn.addEventListener('click', function() {
    clearInterval(timer); // Pause the timer
    timer = null; // Reset the timer variable to allow restarting
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer); // Clear the timer
    timer = null; // Reset the timer variable
    seconds = 0; // Reset seconds
    display.innerHTML = formatTime(seconds); // Update display
});

function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Task Input Functionality
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task !== "") {
        addTaskToList(task);
        taskInput.value = ""; // Clear input field
    }
});

function addTaskToList(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; // Use the new class for styling
    taskItem.textContent = task;

    // Delete Task Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskItem.remove(); // Remove task
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

// Wallpaper Upload Functionality
const wallpaperUpload = document.getElementById('wallpaper-upload');

wallpaperUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});
