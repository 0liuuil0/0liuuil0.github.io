function showPopup() {
    const popup = document.getElementById('popup-window');
    if (popup) {
        popup.classList.remove('hidden');
        popup.style.display = 'block'; // 确保显示浮窗

        // 监听滚动事件
        const popupContent = popup.querySelector('.popup-content');
        const agreeBtn = popup.querySelector('#agree-btn');

        function checkScroll() {
            if (popupContent.scrollTop + popupContent.clientHeight >= popupContent.scrollHeight - 10) {
                agreeBtn.classList.remove('disabled');
                agreeBtn.classList.add('enabled');
                agreeBtn.disabled = false;
                agreeBtn.textContent = "点击同意";
            } else {
                agreeBtn.classList.add('disabled');
                agreeBtn.classList.remove('enabled');
                agreeBtn.disabled = true;
                agreeBtn.textContent = "同意";
            }
        }

        // 初始化检查
        checkScroll();

        // 添加滚动监听器
        popupContent.addEventListener('scroll', checkScroll);

        // 清除之前的监听器（如果存在）
        popupContent.removeEventListener('scroll', checkScroll);

        // 添加新的监听器
        popupContent.addEventListener('scroll', checkScroll);
    } else {
        console.error("Element with ID 'popup-window' not found.");
    }
}

function hidePopup() {
    const popup = document.getElementById('popup-window');
    if (popup) {
        popup.classList.add('hidden');
        popup.style.display = 'none'; // 确保隐藏浮窗

        // 移除滚动监听器
        const popupContent = popup.querySelector('.popup-content');
        popupContent.removeEventListener('scroll', checkScroll);
    } else {
        console.error("Element with ID 'popup-window' not found.");
    }
}

// 处理按钮点击事件
document.addEventListener('DOMContentLoaded', function () {
    const agreeBtn = document.getElementById('agree-btn');
    if (agreeBtn) {
        agreeBtn.addEventListener('click', function () {
            if (!agreeBtn.disabled) {
                window.open('new_page.html', '_blank'); // 打开新的 HTML 页面
            }
        });
    }
});

// 侧边栏点击切换显示内容
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有侧边栏链接
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

    // 初始化，默认显示第一个元素的内容
    const firstSection = document.querySelector('.content-section');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    // 遍历所有链接并添加点击事件监听器
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默认行为

            // 移除所有激活状态
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            // 获取目标内容的 ID 并显示对应的内容
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

// 确保DOM完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', function () {
    // 获取当前年份并插入到页面中
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // 控制台输出用于调试
    console.log("Current year set to:", currentYear);
});

function showMaintenanceMessage() {
    alert("功能维护，请联系人工客服。");
}

function plzDontKeepFindingBug() {
    alert("别找bug了，收手吧，bug都有js alert😬")
}

function version() {
    alert("v.25.112.3.0")
}

function IdontlikeJavaScripts() {
    alert("前端后端都一人，工程师写不动了，以后更新")
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'l' && event.ctrlKey) {
        alert("你发现了隐藏的彩蛋！");
    }
});

