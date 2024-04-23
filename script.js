document.getElementById('add-task').addEventListener('click', function() {
    var taskList = document.getElementById('task-list');
    var taskInput = document.getElementById('new-task');
    var newTask = taskInput.value.trim();
    if (!newTask) {
        alert('請輸入待辦事項！');
        return;
    }

    var listItem = document.createElement('li');

    var taskText = document.createElement('span');
    taskText.textContent = newTask;
    listItem.appendChild(taskText);

    var editButton = document.createElement('button');
    editButton.textContent = '編輯';
    editButton.className = 'edit';
    editButton.addEventListener('click', function() {
        taskInput.value = taskText.textContent;
        document.getElementById('add-task').textContent = '編輯';
        editButton.parentNode.parentNode.removeChild(editButton.parentNode);
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = '刪除';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
        if (!taskList.hasChildNodes()) {
            document.getElementById('clear-tasks').style.display = 'none';
        }
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ''; // 清空輸入欄位
    document.getElementById('add-task').textContent = '添加';

    // 確保清除所有項目按鈕僅在第一筆資料添加後顯示
    if (taskList.childNodes.length === 1) {
        document.getElementById('clear-tasks').style.display = 'block';
    }
});

document.getElementById('clear-tasks').addEventListener('click', function() {
    var taskList = document.getElementById('task-list');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    document.getElementById('clear-tasks').style.display = 'none'; // 隱藏清除按鈕
});

// 初始化時隱藏清除所有項目按鈕
document.getElementById('clear-tasks').style.display = 'none';
