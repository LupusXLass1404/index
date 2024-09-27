import { Passage } from '../json/Passage.js';
import { Monster } from '../json/Monster.js';
import { Item } from '../json/Item.js';
import { Skill } from '../json/Skill.js';
import { GameUI } from '../json/GameUI.js';
// console.log(Passage,Monster,Item,Skill,GameUI) // 確認數據庫都有讀取

// 將網站標題改為遊戲名稱
document.title = GameUI.gameName;

// 玩家資料
var PlayerData = {
    LV: 1,
    HP: 50,
    HPmax: 50,
    EXP: 0,
    EXPmax: 5,
    ATK: 1,
    gold: 0,
    weapon: 'worn_sword',
    bag: ['worn_sword'],
}

const PlayerEquipData = {
    ATK: function () {
        return PlayerData.ATK + Item[`${PlayerData.weapon}`].ATK;
    },
}

// 開始界面，初始化
into();

// 開始界面，初始化
function into() {
    startShow();
    mainHide();
    let start = document.getElementById('start');

    start.innerHTML = `<h2 id="title">${GameUI.gameName}</h2><button id="startBnt" class="link">開始遊戲</button>`;
    document.getElementById('startBnt').onclick = function () {
        startHide();
        mainShow();
        playerMenu();
    }
    contentUpdate('start');
}

// 生成遊戲界面
function playerMenu() {
    const menuId = document.getElementById('menu');
    const toggleId = document.getElementById('toggle');

    menuId.addEventListener('click', function (event) {
        if (event.target.id === 'toggle') {
            menuToggle(menuId, toggleId);
        };
    })

    for (let key in PlayerData) {
        if (key == 'EXP' || key == 'HP') {
            menuId.innerHTML += `<div id="${key}">${GameUI[key]}：<span id="${key}_data"></span><div class="bar_container"><div id="${key}_bar" class="bar"></div></div></div>`;
        } else if (key == 'bag') {
            menuId.innerHTML += `<div class="btn">${GameUI[key]}</div>`;
        } else if (key !== 'EXPmax' && key !== 'HPmax') {
            menuId.innerHTML += `<div id="${key}">${GameUI[key]}：<span id="${key}_data"></sapn></div>`;
        }
    }

    // 菜單更新
    menuUpdata();
}

// 菜單摺疊
function menuToggle(menuId, toggleId) {
    const className = toggleId.getAttribute('data-toggle-class');
    menuId.classList.toggle(className);
};

function menuUpdata() {
    // 每次更新菜單時判斷等級有沒有提升
    level_up();

    // 如果現有HP超過最大HP，則HP=最大HP
    if (PlayerData.HP > PlayerData.HPmax) {
        PlayerData.HP = PlayerData.HPmax;
    }

    // 載入能力值
    document.getElementById(`LV_data`).innerHTML = `${PlayerData.LV}`;
    document.getElementById(`HP_data`).innerHTML = `${PlayerData.HP}／${PlayerData.HPmax}`;
    document.getElementById(`EXP_data`).innerHTML = `${PlayerData.EXP}／${PlayerData.EXPmax}`;
    document.getElementById(`ATK_data`).innerHTML = `${PlayerEquipData.ATK()}（${PlayerData.ATK} + ${Item[`${PlayerData.weapon}`].ATK}）`;
    document.getElementById(`gold_data`).innerHTML = `${PlayerData.gold} G`;
    document.getElementById(`weapon_data`).innerHTML = `<abbr title="【攻擊力+${Item[`${PlayerData.weapon}`].ATK}】${Item[`${PlayerData.weapon}`].depiction}">${Item[`${PlayerData.weapon}`].name}</abbr>`;

    // 菜單數值條更新
    menuBarUpdate('HP', Math.floor(PlayerData.HP / PlayerData.HPmax * 100));
    menuBarUpdate('EXP', Math.floor(PlayerData.EXP / PlayerData.EXPmax * 100));
}

// 菜單數值條更新
function menuBarUpdate(bar_name, bar_data) {
    document.getElementById(`${bar_name}_bar`).style.width = bar_data + '%';
}

function contentUpdate(link) {
    contentTransitions();
    contentChange(link);
}

function contentTransitions() {
    let contentId = document.getElementById('content');
    contentId.className.add('hidden');


    setTimeout(function () {
        content.classList.remove("hidden");
    }, 100)
}

function contentChange(link) {
    let contentId = document.getElementById('content');

    // 清空內容
    contentId.innerHTML = '';

    // 重置鍵盤事件
    for (let i = 0; i < 9; i++) {
        Mousetrap.bind(`${i + 1}`, function () { console.log('無事件') });
    }

    // 增加文本
    contentId.innerHTML += E.text;



    // 建構頁面選項
    for (let i = 0; i < E.link.length; i++) {
        document.getElementById('opts').innerHTML += E.link[i];
    }

    // 點擊事件
    for (let i = 0; i < E.link.length; i++) {
        // console.log(document.getElementById(`${E.id[i]}`))
        document.getElementById(`${E.id[i]}`).onclick = function () {
            textChange(this.id);
        }
        // 增加鍵盤事件
        Mousetrap.bind(`${i + 1}`, function () {
            textChange(E.id[i]);
        });
    }

}

function level_up() {
    // 如果現有EXP大於等於最大EXP，則提升等級
    if (PlayerData.EXP >= PlayerData.EXPmax) {
        // 現有EXP減去最大EXP
        PlayerData.EXP -= PlayerData.EXPmax;
        // 等級提升
        PlayerData.LV++;

        // 玩家基本數值提升
        PlayerData.ATK += PlayerData.LV * 1;
        PlayerData.HPmax += PlayerData.LV * 10;
        PlayerData.HP = PlayerData.HPmax;
        PlayerData.EXPmax += PlayerData.LV * 10;

        // 如果EXP還有溢出，則繼續升級
        if (PlayerData.EXP >= PlayerData.EXPmax) {
            level_up()
        }
    }
}






























































// 共用顯示隱藏區
function startShow() {
    document.getElementById('start').style.display = 'block';
}
function startHide() {
    document.getElementById('start').style.display = 'none';
}

function mainShow() {
    document.getElementById('main').style.display = 'flex';
}
function mainHide() {
    document.getElementById('main').style.display = 'none';
}