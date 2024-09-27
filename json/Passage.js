export const Passage = {
    Instructions: {
        type: 'place',
        link: ['繼續'],
        id: ['start'],
        text: ['歡迎遊玩此RPG遊戲！']
    },
    start: {
        type: 'place',
        link: ['下樓'],
        id: ['start2'],
        text: ['「咕、咕咕——」<br/><br/>幾聲刺耳的鳴叫聲將你從美夢中喚醒，清晨的陽光透過窗戶撒進了你的房間。<br/><br/>你揉了揉眼睛，起身下床。']
    },
    start2: {
        type: 'place',
        link: ['繼續'],
        id: ['street'],
        text: ['你走出自己的房間，下樓就看見媽媽在煮飯。她轉過頭來說：「你醒啦？幫我去後院收雞蛋吧。」你點頭答應，轉身走向了後門。<br/><br/>你拿起了在門旁的木棍，你知道這會是辛苦的一仗。<span class="gold">你獲得了木棍。</span>']
    },
    start2: {
        type: 'place',
        link: ['繼續'],
        id: ['street'],
        text: ['經過千辛萬苦，你總算拿到雞蛋了<br/><br/>你趕緊跑回屋內，關上門。<br/><br/>近年來，附近的動物變得越來越爆躁，原本只是外出比較危險，不要太常外出就沒事，但後來連家畜也開始有攻擊傾向了。你聽過謠言，說是因為魔王復活了。雖然你不太聽信謠言，但村裡的大部分居民都相信這種說法。<br/><br/>你將雞蛋的拿給了媽媽。「辛苦了，沒受傷吧？」媽媽關切地問道。「沒有，那些雞還傷害不了我。」你笑著回應，裝做一派輕鬆的樣子，至少不能讓媽媽擔心。']
    },

    // ============== 場景 ==============
    // 草原谷
    MeadowVale_home: {
        type: 'place',
        link: ['離開家', '你的房間'],
        id: ['forest_0', 'weapon_shop', 'potion_shop', 'hostel', 'street_rest'],
        text: ['阿瑟站在熙熙攘攘的街道，人群匆忙而熱情。']
    },
    MeadowVale_street: {
        type: 'place',
        link: ['你家', '利修的家', '雜貨店', '平原',],
        id: ['MeadowVale_home', 'MeadowVale_LishHome', 'MeadowVale_plain',],
        text: ['阿瑟站在熙熙攘攘的街道，人群匆忙而熱情。']
    },
    MeadowVale_shop: {
        type: 'place',
        link: ['購買', '返回街道'],
        id: ['buy', 'MeadowVale_street'],
        text: ['阿瑟在武器店。商店內充滿金屬香氣，陳列著各式刀劍、魔法杖，各種武器應有盡有。冒險者在這裡尋找力量的象徵。'],
        item: ['wood_sword', 'iron_sword', 'bronze_long_sword',],
    },
    potion_shop: {
        type: 'place',
        link: ['購買', '返回街道'],
        id: ['buy', 'street'],
        text: ['阿瑟在藥水店內。一間充滿藥瓶香氣的小店，經營各種藥水與治癒道具。冒險者在這裡尋找康復與增益的良方'],
        item: ['S_red_potion', 'M_red_potion', 'L_red_potion', 'exp_potion'],
    },
    hostel: {
        type: 'place',
        link: ['休息', '返回街道'],
        id: ['hostel_rest', 'street'],
        text: ['阿瑟在旅館的大廳內。溫馨的床鋪，微弱的燭光。疲憊的冒險者在這裡找到安寧，夢想著明天的冒險。']
    },
    hostel_rest: {
        type: 'event',
        link: ['起床'],
        id: ['return'],
        text: ['阿瑟疲憊地進入旅館，躺在柔軟的床上。微弱的燭光映在他疲憊的臉上，逐漸進入夢鄉，為明日的冒險補充體力。'],
        event: 'hostel_rest',
    },
    forest_0: {
        type: 'place',
        link: ['在附近繞繞', '深入｜離城鎮越遠、怪物越強', '回到街道'],
        id: ['forest_0', 'forest_1', 'street'],
        text: ['阿瑟在森林入口。你能在這裡看到城鎮的城牆。城鎮的熙熙攘攘在你身後，而前方是一片神秘的樹海。'],
        monster_name: ['slime_baby', 'slime_green'],
        monster_rng: [5, 100],
    },
    forest_1: {
        type: 'place',
        link: ['在附近繞繞', '深入｜離城鎮越遠、怪物越強', '往回走'],
        id: ['forest_1', 'forest_2', 'forest_0'],
        text: ['阿瑟在森林裡。樹木還很稀疏，你離城鎮還沒有很遠，城鎮的煙囪仍可遠眺。'],
        monster_name: ['slime_green', 'slime_blue'],
        monster_rng: [30, 100],
    },
    forest_2: {
        type: 'place',
        link: ['在附近繞繞', '深入｜離城鎮越遠、怪物越強', '往回走'],
        id: ['forest_2', 'forest_3', 'forest_1'],
        text: ['阿瑟在森林裡。你被樹木巍峨包圍。陽光透過樹葉灑下，大自然的靜謐彷彿籠罩著他。'],
        monster_name: ['slime_blue', 'slime_purple'],
        monster_rng: [30, 100],
    },
    forest_3: {
        type: 'place',
        link: ['在附近繞繞', '深入｜離城鎮越遠、怪物越強', '往回走'],
        id: ['forest_3', 'forest_4', 'forest_2'],
        text: ['阿瑟在深處。樹冠遮天蔽日，你迷失在綠色迷霧中，聽見微風低語。'],
        monster_name: ['slime_purple', 'slime_orange'],
        monster_rng: [30, 100],
    },
    forest_4: {
        type: 'place',
        link: ['在附近繞繞', '往回走'],
        id: ['forest_4', 'forest_3'],
        text: ['阿瑟在森林最深處。樹木茂密，陽光難以穿透。他感應到奇異的氛圍，知道那是強大魔物的氣息。心中猶豫，未知的挑戰即將面前。'],
        monster_name: ['slime_orange', 'slime_red'],
        monster_rng: [30, 100],
        //  '討伐魔物首領','Boss',
    },
    small_red_potion: {
        type: 'shop',
        link: [''],
        id: [''],
        text: ['']
    },
    fight: {
        type: 'fight',
        link: ['攻擊', '防禦', '逃跑'],
        id: ['att', 'def', 'run'],
        text: ['<p id="fight_monster"><span class="red">你遇到了 <span id="monster"></span>！</span>你拿起了武器準備戰鬥。<p id="fight_action"><p id="monster_hp">']
    },
    fight_end: {
        type: 'fight_end',
        link: ['繼續'],
        id: ['return'],
        text: ['<p id="fight_action"><p id="result">。']
        // 你擊敗了怪物，得到了12點經驗值，和12個金幣。
        // 你被怪物打敗了，你落荒而逃。
    },
    att: {
        type: 'action',
        link: [''],
        id: [''],
        text: [''],
    },
    def: {
        type: 'action',
        link: [''],
        id: [''],
        text: ['']
    },
    run: {
        type: 'action',
        link: [''],
        id: [''],
        text: ['']
    },
    buy: {
        type: 'buy',
        link: ['返回'],
        id: ['return'],
        text: ['你要購買什麼？']
    },
    return: {
        type: 'return',
        link: [''],
        id: [''],
        text: ['']
    },
    Boss: {
        type: 'fight',
        link: ['攻擊', '防禦', '逃跑'],
        id: ['att', 'def', 'run'],
        text: ['<p id="fight_monster"><span class="red">你遇到了 <span id="monster"></span>！</span>你拿起了武器準備戰鬥。<p id="fight_action">']
    }
}