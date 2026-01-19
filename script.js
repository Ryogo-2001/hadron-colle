// ハンバーガーメニューの開閉
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// サイドバーの中身を生成（ハドこれ専用）
function createSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    // 他のページへのリンクは削除し、ゲーム関連のみにする
    const menuItems = [
        { name: 'Gacha Base', link: 'index.html' }, // hadron.html を index.html に変えたのでここも変更
        { name: 'Battle Sortie', link: 'battle.html' }
    ];

    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    sidebar.appendChild(ul);
}

// ページ読み込み時にサイドバー生成
document.addEventListener('DOMContentLoaded', createSidebar);