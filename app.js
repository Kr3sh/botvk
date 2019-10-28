const { VK } = require('vk-io');
const vk = new VK();
const user = new VK();
const fs = require("fs");
const commands = [];
const users = require('./users.json'); 
const promo = require('./promo.json'); 
const pay = require('./pay.json')
const clans = require('./clans.json')
const chat = require('./chat.json')
const cht = require('./cht.json')
const botinfo = require('./botinfo.json')
const f = require('./functions.js')
let giving = false;
console.log("======= Bot by User =========\n======= @levelupbot -> vk")
user.setOptions({
	token: '5c9b00e50f52b8c2141bdb86ecb9472a3ab0f4205faf82a00e889ae1bdfeef1d9a83bec0b43ba35cc505f'
});


const guns = {

	"1": {
		name: 'Пистолет "Deagle"',
		count: 36,
		price: 100000000
	},
	"2": {
		name: 'Автомат "M4A4"',
		count: 54,
		price: 600000000
	},
	"3": {
		name: 'Дробовик "Sawed-Off"',
		count: 55,
		price: 800000000
	},
	"4": {
		name: 'Пистолет "Five-SeveN | Испытание огнём"',
		count: 43,
		price: 1200000000
	},
	"5": {
		name: 'Автомат "AK-47"',
		count: 43,
		price: 15000000000
	},
	"6": {
		name: 'Автомат "AUG"',
		count: 35,
		price: 200000000
	},
   "7": {
        name: 'Автомат "Galil AR"',
		count: 34,
		price: 40000000
    },
  "8": {
        name: 'Пистолет-Пулемет "ПП-19 Бизон"',
		count: 37,
		price: 500000000
   },
 "9": {
        name: 'Пистолет-Пулемет "MP9"',
		count: 45,
		price: 100000000
  },
 "10": {
 	   name: 'Пистолет-Пулемет "UMP-45"',
		count: 44,
		price: 600200010
  },
  "11": {
        name: 'Пистолеты "Dual Berettas | Удар кобры"',
		count: 55,
		price: 800000000
  },
  "12": {
  	  name: 'Дробовик "Nova | Экзо"',
		count: 49,
		price: 900000000
  },
  "13": {
  	  name: 'Пистолет "Desert Eagle | Директива"',
		count: 43,
		price: 1000000000
  },
 "14": {
 	   name: 'Револьвер "R8 | Кровавая паутина"',
		count: 48,
		price: 1300000000
  },
 "15": {
 	   name: 'Сувенирный "AWP | Dragon Lore"',
		count: 75,
		price: 1600000000
 },
 "16": {
 	   name: 'Star Track "М4А1 | Вой"',
		count: 56,
		price: 1800000000
  },
 "17": {
 	name: 'Star Track "AK-47 | Императрица "',
     count: 63,
     price: 192000000000
   }
}

let cases = [
	{
		uron: 36,
		name: 'Пистолет "Deagle"'
	},
	{
		uron: 36,
		name: 'Автомат "M4A4"'
	}, 
	{
		uron: 55,
		name: `Дробовик "Sawed-Off"`
	},
	{
		uron: 43,
		name: `Пистолет "Five-SeveN | Испытание огнём"`
	},
	{
		uron: 37,
		name: `Автомат "AK-47"`
	},
	{
		uron: 35,
		name: `Автомат "AUG"`
	},
	{
		uron: 34,
		name: `Автомат "Galil AR"`
	},
	{
		uron: 37,
		name: `Пистолет-Пулемет "ПП-19 Бизон"`
	},
	{
		uron: 44,
		name: `Пистолет-Пулемет "MP9"`
	},
	{
		uron: 45,
		name: `Пистолет-Пулемет "UMP-45"`
	}, 
	{
		uron: 55,
		name: `Пистолеты "Dual Berettas | Удар кобры"`
	},
	{
		uron: 49,
		name: `Дробовик "Nova | Экзо"`
	},
	{
		uron: 43,
		name: `Пистолет "Desert Eagle | Директива"`
	},
	{
		uron: 45,
		name: `Револьвер "R8 | Кровавая паутина"`
	},
	{
		uron: 75,
		name: `Сувенирный "AWP | Dragon Lore"`
	}, 
    {
		uron: 56,
		name: `Star Track "М4А1 | Вой"`
	}, 
]


const garaje = [
	{
		name: 'нету',
		id: 0
	},
	{
        name: 'обычный',
		cost: 150000,
		mesto: 1,
		id: 1
	},
	{
	    name: 'улучшенный',
		cost: 350000,
		mesto: 3,
		id: 2
	},
	{
		name: 'максимально-улучшенный',
		cost: 800000,
		mesto: 10,
		id: 3
	}
];

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 2500,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];


setInterval(async () => {
	await saveUsers();
}, 10000);

async function saveUsers() {
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	require('fs').writeFileSync('./chat.json', JSON.stringify(chat, null, '\t'));
	require('fs').writeFileSync('./cht.json', JSON.stringify(cht, null, '\t'));
	require('fs').writeFileSync('./promo.json', JSON.stringify(promo, null, '\t'));
	require('fs').writeFileSync('./clans.json', JSON.stringify(clans, null, '\t'));
	require('fs').writeFileSync('./pay.json', JSON.stringify(pay, null, '\t'));
	require('fs').writeFileSync('./botinfo.json', JSON.stringify(botinfo, null, '\t'));
	return true;
}

setInterval(async () => {
	users.filter(x=> x.home == true).map(x=> {
            var wat = rand(1, 100);
            var ele = rand(1, 100);
            var maxo = (x.residents/10).toFixed(0);
            var maxo = (maxo == 0) ? 1: maxo;
            var mino = (maxo/2).toFixed(0);
            x.residents += (wat <= x.water) ? rand(0, maxo): rand(0, mino);
            x.residents += (ele <= x.electro) ? rand(0, maxo): rand(0, mino);
            x.residents += (x.works >= maxo) ? rand(0, maxo): rand(0, mino);
            x.residents -= (wat <= x.water) ? rand(0, mino): rand(0, maxo);
            x.residents -= (ele <= x.electro) ? rand(0, mino): rand(0, maxo);
            x.residents -= (x.works >= maxo) ? rand(0, mino): rand(0, maxo);
            x.residents = (x.residents > x.colvo) ? x.colvo:
            (x.residents < 0) ? 0: x.residents;
	});
}, 600000);

 setInterval(function(){
	for (i=0;i<users.length;i++) {
	 	let u = users[i];
		if (u) {
			u.balance += Number(u.modules['1'].profit * u.modules['1'].count);
		 	u.balance += Number(u.modules['2'].profit * u.modules['2'].count);
		 	u.balance += Number(u.modules['3'].profit * u.modules['3'].count);
		 	u.balance += Number(u.modules['4'].profit * u.modules['4'].count);
		 	u.balance += Number(u.modules['5'].profit * u.modules['5'].count);
		 	u.balance += Number(u.modules['6'].profit * u.modules['6'].count);

		 	if (u.vip == 1) { u.balance += 20 }
		 	if (u.vip == 2) { u.balance += 40 }
		 	if (u.vip == 3) { u.balance += 60 }
		} 
	 }
}, 1000);

setInterval(async () => {
	users.filter(x=> x.bonus != 0).map(x=> {
		x.bonus -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.cass != 0).map(x=> {
		x.cass -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.mtop != 0).map(x=> {
		x.mtop -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.mbonus != 0).map(x=> {
		x.mbonus -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.kwork != 0).map(x=> {
		x.kwork -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.clanwar != 0).map(x=> {
		x.clanwar -= 1;
	});
}, 1000);



setInterval(async () => {
	users.filter(x=> x.bank > 0).map(x=> {
		x.bank += Number((x.bank/100).toFixed(0));
	});
}, 3600000);

setInterval(async () => {
	users.filter(x=> x.fire != 0).map(x=> {
		x.fire -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.podval != 0).map(x=> {
		x.podval -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.activ != "с4").map(x=> {
		x.activ++;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.home == true).map(x=> {
	 var obh = (x.obhome == true) ? (x.residents*10000)/10: 0;
		x.money+=(x.residents*10000+obh);
       x.money-=(x.residents*x.water*x.electro);
       x.money -= x.works*1000;
x.money = (x.money < 0) ? 0: x.money;
	});
}, 600000);

setInterval(async () => {
	users.filter(x=> x.rekl > 0 && x.rekl_id > 0).map(x=> {
		 var rkmin = (x.rekl_id == 1) ?  10:
(x.rekl_id == 2) ? 1000:
(x.rekl_id == 3) ? 100000:
(x.rekl_id == 4) ? 10000000: 0;
var rkmax = (x.rekl_id == 1) ?  30:
(x.rekl_id == 2) ? 3000:
(x.rekl_id == 3) ? 300000:
(x.rekl_id == 4) ? 30000000: 0;
function rand(min, max) {
	return Math.round(Math.random() * (max - min)) + min
};
x.residents += rand(rkmin, rkmax);
x.residents = (x.residents > x.colvo) ? x.colvo: x.residents;
x.rekl -= 600;
x.rekl_id = (x.rekl == 0) ? 0: x.rekl_id;
	});
}, 600000);

setInterval(async () => {
	users.filter(x=> x.work != 0).map(x=> {
		x.work -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.ban_acc != 0).map(x=> {
		x.ban_acc -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.hack != 0).map(x=> {
		x.hack -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x=> x.poxod != 0).map(x=> {
		x.poxod -= 1;
	});
}, 1000);

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

vk.updates.on(['chat_invite_user'], async (message, next) => {

        let user = await vk.api.call('users.get', {
            user_id: message.payload.action.member_id
        })

        message.send(`@id${message.payload.action.member_id} (${user[0].first_name} ${user[0].last_name}), добро пожаловать в беседу. Напиши команду "Помощь", что бы узнать мои команды\n ➖➖➖➖➖➖➖➖➖\n ${chat[message.chatId].rules}`);
        await next();
    });

    vk.updates.on(['chat_kick_user'], async (message, next) => {
        let user = await vk.api.users.get({user_id: message.payload.action.member_id})

        message.send(`Пользователь @id${message.payload.action.member_id} (${user[0].first_name} ${user[0].last_name}) покинул или был исключен из беседы`);

    vk.api.call("messages.removeChatUser", {
                    chat_id: message.chatId,
                    user_id: message.payload.action.member_id
                });

        await next();
    });

    vk.updates.on(['chat_invite_user_by_link'], async (message, next) => {
        message.send(`Приветствую!. Напиши команду "Помощь", что бы узнать мои команды\n ➖➖➖➖➖➖➖➖➖\n ${chat[message.chatId].rules}`);
        await next()
    });

            vk.updates.on(['chat_title_update'], async(message) => {
                if(chat[message.chatId].block_title != false) {
            message.send(`В этой беседе запрещено менять название!`);
            vk.api.call('messages.editChat',{chat_id: message.chatId, title: chat[message.chatId].title})
        }
    })

vk.setOptions({ token: '409ed95ad15bfbd47fd1a2bdca823110cbd9e1de022dc35ee1be9d66658694af8c11fe86995f03352d45c', pollingGroupId: 183382147 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club183382147\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club183382147\|(.*)\]/ig, '').trim();
	if(!users.find(x=> x.id === message.senderId)) {
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
          id: message.senderId,
		  name: "не зареган!",
		  tag: "ержан",
		  iron: 0,
          home: false,
          obhome: false,
          activ: 0,
          residents: 5,
          garaje: false,
          mtop: 0,
            	game: {
				strela_win: 0,
				strela_loose: 0
			},
          water: 70,
          transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
			    farm_count: 0
            },
          gb: 0,
          clanwar: 0,
          clanid: 0,
          kwork: 0,
          uv: true,
          electro: 70,
          colvo: 100,
          vip: 0,
          cost: 1000000,
          works: 5,
          wmax: 10,
          level: 1,
          mbonus: 0,
          rekl: 0,
          rekl_id: 0,
          post: 0,
          hack: 0,
          balance: 0,
          money: 0,
          bank: 0,
          donate: 0,
          win: 45,
          work: 0,
          bonus: 0,
          ban_acc: 0,
          ban_rep: false,
          ban_pay: false,
          ban_top: false,
          limit_pay: true,
          refka: false,
          ref: 0,
          fire: 0,
          podval: 0,
          poxod: 0,
          uid: users.length,
                    modules:    	
				{
					"1": 		{
						price: 	50,
						count:  0,
						profit: 1
					},
					"2": 		{
						price: 	1400,
						count:  0,
						profit: 2
					},
					"3": 		{
						price: 	2500,
						count:  0,
						profit: 3
					},
					"4": 		{
						price: 	5000,
						count:  0,
						profit: 4
					},
					"5": 		{
						price: 	10250,
						count:  0,
						profit: 6
					},
					"6": 		{
						price: 	15000,
						count:  0,
						profit: 8
					},
					"7": 		{
						price: 	40000,
						count:  0,
						profit: 10
          					}
				},
			a_war: false,
			iron: 0,
			tbonus: 0,
			uron: 0,
			war: false,
            card: 0,
            hero_id: false,
            hero_name: `Герой не выбран`,
            hero_hp: 100,
            hero_zashita: 8,
            hero_ataka: 10,
            hero_kr_udar: 4,
			gold: 0,
			active: 0,
			duel: false,
			duel_summ: false,
			nachal: false,
			cvb: false,
			btc: 0, 
			rang: "Новичок",
			credit: 0,
			farm_btc: 0,
			straik: 0,
			procent: 0,
			prefix: 1,
			pay: false,
			kazna: 0,
			donate_case: 0,
			gold: 0,
            biz: 0,
            lists: 0,
            ruda: 0,
			right: 0,
			frac_name: false,
			frac: false,
			bancard: false,
			givemyrub: false,
			urabota: false,
			a_case: false,
			ymoney: 0,
            warns: 0,
            warn: 0,
			warn_p: `Нет`,
			rating: 0,
			mention: true,
			ban: false,
			timers: {
				translation: false,
				commands: false,
				clanwar: false,
				delacc: false,
				obva: false,
				blockpay: false,
				krik: false,
				mine: false,
				hasWorked: false,
				bonus: false,
			    Poxod: false,
			    shaxta: false
            },
			tag: user_info.first_name,
			work: 0,
			vig: 0,
            voice: true,
            gun_name: false,
            	game: {
				strela_win: 0,
				strela_loose: 0
			},
            sword: false,
            eda: false,
            games: true,
            invites: true,
            systempc: {
            },
            gun: false,
            case: true,
            dice: true,
            free: true,
            giverub: false,
            mute: false,
            msg: 0,
            pay: 0,
			message: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
		});
	}
	
	i = users.find(x=> x.id === message.senderId);
	message.user = users.find(x=> x.id === message.senderId);
	if(i.ban_acc != 0) return;

		if(message.isChat) {
    fs.appendFileSync("messages.txt", `[CID: ${message.chatId}] @id${i.id} (юзер) - ${message.text}\n`);
        if(!chat[message.chatId]) {
            chat[message.chatId] = {
                block: false,
                rules: "",
                title: "TEST BOT CHAT",
                block_title: false,
                admin_id: false
            }
        }
}
 if(!message.isChat) {
    fs.appendFileSync("messagesLS.txt", ` @id${i.id} (юзер) - ${message.text}\n`);
 }
if(message.isChat) {
if(chat[message.chatId].block != false) {
if(message.isChat) {
    if(/https:|http:|\.com|\.ru|vk\.|\.join|\.ua|\.net|vk\.com|ok\.ru/.test(message.text)) {
        message.send(`❌ Ссылки в данной беседе запрещены.\n🔺 По этому, Вы будете кикнуты.`)
        setTimeout(() => {
        vk.api.call('messages.removeChatUser',{chat_id: message.chatId, user_id: i.id})
    }, 500);
    }
}
}
}

if(message.isChat) {
if(i.warn == 3) {
if(message.isChat) {
        message.send(`❌ У вас 3 предупреждения.\n🔺 По этому, Вы будете кикнуты.`)
        setTimeout(() => {
        vk.api.call('messages.removeChatUser',{chat_id: message.chatId, user_id: i.id})
    }, 500);
}
}
}


if(message.isChat) {
    if(!cht[message.chatId]) {
        cht[message.chatId] = {
            msg: 0,
            forwarded_messages: 0,
            photos: 0,
            videos: 0,
            audios: 0,
            stikers: 0,
            wall_posts: 0,
            documents: 0,
            audio_messages: 0,
        }
    }
}

 const bot = (text, params) => {
		return message.send(text, params)
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;
	i.activ = 0;

 args = message.text.match(command[0]);
 message.args = message.text.match(command[0]);
	await command[1](message, bot);

});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}

function sp(string) {
var syt = string;
		if (typeof string !== "string") string = string.toString();
		if(string.length < 21) return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(",").split("").reverse().join("");
		return syt;
	};

function scl(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

function timer(seconds) {
    if(seconds == "") return "0 секунд"
    var day = parseInt(seconds/86400 );
    seconds = seconds%86400;
    var hours = parseInt(seconds/3600 );
    seconds = seconds%3600;
    var minutes = parseInt(seconds/60); 
    seconds = seconds%60;
    day = day == 0 ? "" : day + " " + scl(day, ["день", "дня", "дней"])
    hours = (hours == 0 ? "" : hours + " " + scl(hours, ["час", "часа", "часов"]))
    minutes = (minutes == 0 ? "" : minutes + " " + scl(minutes, ["минуту", "минуты", "минут"]))
    seconds = (seconds == 0 ? "" : seconds + " " + scl(seconds, ["секунду", "секунды", "секунд"]))
    var gone = day + " " + hours + " " + minutes + " " + seconds
    return gone
};

function getUnix() {
	return Date.now();
}

function unixStamp(stamp) {
	let date = new Date(stamp),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0"+date.getHours() : date.getHours(),
		mins = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes(),
		secs = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();

	return `${day}.${month}.${year}, ${hour}:${mins}:${secs}`;
}

function unixStampLeft(stamp) {
	stamp = stamp / 1000;

	let s = stamp % 60;
	stamp = ( stamp - s ) / 60;

	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;

	let	h = ( stamp ) % 24;
	let	d = ( stamp - h ) / 24;

	let text = ``;

	if(d > 0) text += Math.floor(d) + " д. ";
	if(h > 0) text += Math.floor(h) + " ч. ";
	if(m > 0) text += Math.floor(m) + " мин. ";
	if(s > 0) text += Math.floor(s) + " с.";

	return text;
}

function repl(num){
	var sjop = num.replace(/(k|K|К|к)/ig, "000")
   sjop = sjop.replace(/(все|Все|Всё|всё)/ig, i.money)
	return [sjop]
};  

function fix(num) {
num = Number(num)
num = num.toFixed(0)
num = Number(num)
return [num]
}

function rand(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}

cmd.on(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	if(i.id != 218806894) return;
	try {
	  message.send("Готово: "+JSON.stringify(eval(args[1])));
	} catch(err){
		console.log(err);
		message.send(">Error: "+ err);
	}
});

cmd.on(/^(?:положить|пополнить)\s([^]+)$/i, async (message, bot) => {
	 var mon = repl(args[1]);
	if(!Number(mon)) return message.send("📛| Сумма должна быть числовой!");
	mon = Number(fix(mon));
	if(i.money < mon) return message.send("📛| на вашем балансе нет столько денег!");
	i.money -= mon;
	i.bank += mon;
	message.send("💳Вы успешно пополнили банковский счёт!");
	});
	
	cmd.on(/^(?:снять|вывести)\s([^]+)$/i, async (message, bot) => {
	 var mon = repl(args[1]);
	if(!Number(mon)) return message.send("📛| Сумма должна быть числовой!");
	mon = Number(fix(mon));
	if(i.bank < mon) return message.send("📛| у вас нет столько $ в банке!");
	i.money += mon;
	i.bank -= mon;
	message.send("💵Вы успешно сняли $ с банковского счёта!");
	});

	cmd.on(/(?:ускорение|ускорения|улучшения|@mining_bot1 ♻ ускорения|♻ ускорения|♻ улучшения)\s?([0-9]+)?/i, async (message) => { 
		if(i.home == false) return message.send("??| У вас нет дома!\n---\n🔹Для покупки дома пишите: Построить [название компании]");


	if (!args[1]) {
		return message.send(
			`
			➡ - - Покупка ускорений - - ⬅
			🔔  Название | Цена | Доход 🔔

			1&#8419;. Курсор | ${i.modules["1"].price} | +1/сек 
			2&#8419;. Видеокарта | ${i.modules["2"].price} | +2/сек
			3&#8419;. Стойка Видеокарт | ${i.modules["3"].price} | +3/сек
			4&#8419;. Суперкомпьютер | ${i.modules["4"].price} | +4/сек
			5&#8419;. Сервер ВКонтакте | ${i.modules["5"].price} | +6/сек
			6&#8419;. Квантовый компьютер | ${i.modules["6"].price} | +8/сек
			7&#8419;. Датацентр | ${i.modules["7"].price} | +10/сек

			➡ - -  Для покупки напишите "Ускорение (номер)" - - ⬅
			➡ - -  Пример: "Ускорение 1" - - ⬅
			`
		);	
	}
	let a = args[1];
	
	if (!Number(a) || a < 0 || a > 7) return message.send(`[@id${i.id} (${i.name})] => Неверно указан номер ускорения!`);
	if (i.balance < i.modules[Number(a)].price) return message.send(`[@id${i.id} (${i.name})] => У вас недостаточно RUB`);

	i.balance -= Number(i.modules[Number(a)].price);
	i.modules[Number(a)].price += (Math.round(i.modules[Number(a)].price * 0.5));
	i.modules[Number(a)].count += 1;

	return message.send(`[@id${i.id} (${i.name})] => Вы успешно преобрели ускорение!\n❗ Подробная информация в 'мпрофиль'`);
	 
});

	cmd.on(/^(?:pay)\s?([0-9]+)?/i, (message) => { 

	if (i.post == 0) return;

	if (!args[1]) return message.send(`Укажите ID заявки`);

	for(i=0;i<pay.length;i++){ 
		if(i == Number(args[1])){
			vk.api.call('messages.send', { 
				user_id: pay[i].vk, 
				message: `🔔 [RUB ВЫДАНЫ] 🔔\n=> Количество: ${pay[i].summa}`
			})
			message.send(`
			🔔 Выплата RUB
			=> Количество: ${pay[i].summa}
			=> Игроку vk.com/id${pay[i].vk}	
			`);
			delete pay[i];
			pay = pay.filter(element => element !== null);
			return;
		}
	}
	return message.send(`Неверный ID заявки`);
});

	cmd.on(/(?:мпрофиль|💼 мпрофиль|@mining_bot1 💼 мпрофиль|мпрофиль|мпрф|мпроф)/i, async (message) => {
		if(i.home == false) return message.send("??| У вас нет дома!\n---\n🔹Для покупки дома пишите: Построить [название компании]");

	return message.send(`
	🆔 ID: ${i.id}

	💰 Баланс: ${sp(i.balance)} RUB
	👑 ${i.vip.toString().replace(/0/ig, 'MINING VIP не куплен').replace(/1/ig, 'MINING VIP').replace(/2/ig, 'MINING VIP++').replace(/3/ig, 'Super MINING VIP')} | +${i.vip.toString().replace(/0/ig, '0').replace(/1/ig, '20').replace(/2/ig, '40').replace(/3/ig, '60')}/сек
	
	⏳ Ваши ускорения ⏳ 
	📕 Курсор [${i.modules["1"].count}] +${i.modules["1"].count*1}/сек
	📗 Видеокарта  [${i.modules["2"].count}] +${i.modules["2"].count*2}/сек
	📘 Стойка Видеокарт  [${i.modules["3"].count}] +${i.modules["3"].count*3}/сек
    📙 Суперкомпьютер  [${i.modules["4"].count}] +${i.modules["4"].count*4}/сек
    📔 Сервер ВКонтакте [${i.modules["5"].count}] +${i.modules["5"].count*6}/сек
	📓 Квантовый компьютер  [${i.modules["6"].count}] +${i.modules["6"].count*8}/сек
	🖥 Датацентр [${i.modules["7"].count}] +${i.modules["7"].count*10}/сек

	💿 Суммарно: ${(i.modules["1"].count*1)+(i.modules["2"].count*2)+(i.modules["3"].count*3)+(i.modules["4"].count*4)+(i.modules["5"].count*6)+(i.modules["6"].count*8)+(i.modules["7"].count*10)}/сек
	`,
	    		 {
keyboard: JSON.stringify( 
{ 
"one_time": false, 
"buttons": [ 
[{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"1\"}", 
"label": "👑 MINING VIP" 
}, 
"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"2\"}", 
"label": "💼 мпрофиль" 
}, 
"color": "primary" 
},
{
"action": { 
"type": "text", 
"payload": "{\"button\": \"4\"}", 
"label": "♻ ускорения" 
}, 
"color": "negative"
}],
[{
"action": { 
"type": "text", 
"payload": "{\"button\": \"4\"}", 
"label": "🎁 мбонус" 
}, 
"color": "positive"
}],
[{
"action": { 
"type": "text", 
"payload": "{\"button\": \"5\"}", 
"label": "🔝 мтоп" 
}, 
"color": "negative"
}] 
] 
}) 
});
 
});     

	cmd.on(/(?:MINING VIP|👑 MINING VIP|VIP|вип|майнинг вип)/i, async (message) => {  

	return message.send(
		`
		👑 - - MINING VIP АККАУНТ - - 👑
		🔸 Вип аккаунт позволяет вам получать больше RUB в секунду
		🎁 'Бонус' даёт больше коинов

		1&#8419;. VIP | 30 рублей | +20/сек
		2&#8419;. VIP++ | 50 рублей | +40/сек
		3&#8419;. Super VIP | 100 рублей | +60/сек

		📝 За покупкой: @d_and_y_studio (Сюда)

		`
	);	
}); 

cmd.on(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(i.garaje == false) return message.send(`У вас нету гаража.`)
	if(i.gb == 0) return message.send(`в вашем гараже нету места!!!`)
	if(!args[1]) return bot(`машины: 
${i.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500 RUB)
${i.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500 RUB)
${i.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000 RUB)
${i.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500 RUB)
${i.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000 RUB)
${i.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000RUB)
${i.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000 RUB)
${i.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000 RUB)
${i.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000 RUB)
${i.transport.car === 10 ? ' 🔹' : '🔸'} 10. Вездеход (200.000 RUB)
${i.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000 RUB)
${i.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000 RUB)
${i.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000 RUB)
${i.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000 RUB)
${i.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000 RUB)
${i.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000 RUB)
${i.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000 RUB)
${i.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000 RUB)
${i.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000 RUB)
${i.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000 RUB)
${i.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000 RUB)
${i.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000 RUB)
${i.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000 RUB)
${i.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000 RUB)
${i.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000 RUB)
${i.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000 RUB)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(args[1]));
	if(!sell) return;
	if(i.transport.car) return bot(`у вас уже есть машина (${cars[i.transport.car - 1].name}), введите "Продать машину"`);

	if(i.balance < sell.cost) return bot(`недостаточно денег`);
	else if(i.balance >= sell.cost)
	{
		i.balance -= sell.cost;
		i.gb -= 1;
		i.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} RUB`)
	}
});

cmd.on(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	if(i.garaje == false) return message.send(`У вас нету гаража.`)
	if(i.gb == 0) return message.send(`в вашем гараже нету места!!!`)
	if(!args[1]) return bot(`яхты: 
${i.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000 RUB)
${i.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000 RUB)
${i.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000 RUB)
${i.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000 RUB)
${i.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000 RUB)
${i.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000 RUB)
${i.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000 RUB)
${i.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000 RUB)
${i.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000 RUB)
${i.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000 RUB)
${i.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000 RUB)
${i.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000 RUB)
${i.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000 RUB)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(args[1]));
	if(!sell) return;
	if(i.transport.yacht) return bot(`у вас уже есть яхта (${yachts[i.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(i.balance < sell.cost) return bot(`недостаточно денег`);
	else if(i.balance >= sell.cost)
	{
		i.balance -= sell.cost;
		i.gb -= 1;
		i.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} RUB`);
	}
}); 

cmd.on(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(i.garaje == false) return message.send(`У вас нету гаража.`)
	if(i.gb == 0) return message.send(`в вашем гараже нету места!!!`)
	if(!args[1]) return bot(`самолеты: 
${i.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000 RUB)
${i.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000 RUB)
${i.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000 RUB)
${i.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000 RUB)
${i.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000 RUB)
${i.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000 RUB)
${i.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000 RUB)
${i.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000 RUB)
${i.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000 RUB)
${i.transport.airplane === 10 ? '??' : '🔸'} 10. Learjet 31 (45.000.000 RUB)
${i.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000 RUB)
${i.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000 RUB)
${i.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000 RUB)
${i.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000 RUB)
${i.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000 RUB)
${i.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000 RUB)
${i.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000 RUB)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(i.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[i.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(i.balance < sell.cost) return bot(`недостаточно денег`);
	else if(i.balance >= sell.cost)
	{
		i.balance -= sell.cost;
		i.gb -= 1;
		i.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} RUB`);
	}
});

cmd.on(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(i.garaje == false) return message.send(`У вас нету гаража.`)
	if(i.gb == 0) return message.send(`в вашем гараже нету места!!!`)

	if(!args[1]) return bot(`вертолеты: 
${i.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2 RUB)
${i.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000 RUB)
${i.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000 RUB)
${i.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000 RUB)
${i.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000 RUB)
${i.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000 RUB)
${i.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000 RUB)
${i.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000 RUB)
${i.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000 RUB)
${i.transport.helicopter === 10 ? '🔹' : ' 🔸'} 10. Bell 429WLG (19.000.000 RUB)
${i.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000 RUB)
${i.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000 RUB)
${i.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000 RUB)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(args[1]));
	if(!sell) return;
	if(i.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[i.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(i.balance < sell.cost) return bot(`недостаточно денег`);
	if(i.garaje < sell.mesto) return bot(`недостаточно места в гараже`);
	else if(i.balance >= sell.cost)
	{
		i.balance -= sell.cost;
		i.gb -= 1;
		i.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)} RUB`);
		i.garaje += 1;
	}
});  


cmd.on(/^(?:кейсы|кеисы)$/i, async (message, bot) => {
	message.send("💼CASE-SHOP💼\n\n♦Кейс каменный♦\n🔍| Может выпасть: до 100.000$, до 5 жителей.\n💲Цена: 50.000$\n📔ID: 1\n\n♦Кейс медный♦\n🔍| Может выпасть: до 1.000.000$, до 30 жителей, до 30 рабочих.\n💲Цена: 500.000$\n📔ID: 2\n\n♦Кейс золотой♦\n🔍| Может выпасть: до 10.000.000$, до 100 жителей, до 100 рабочих.\n💲Цена: 5.000.000$\n📔ID: 3\n\n♦Кейс алмазный♦\n🔍| Может выпасть: до 1.000.000.000$, до 1000 жителей, до 1000 рабочих.\n💲Цена: 500.000.000$\n📔ID: 4\n\n🔘Кейс Донат🔘\n🔍| Может выпасть: валюта, привилегии(VIP, MODER).\n💲Цена: 50 доната.\n📔ID: 5\n\n🔫Оружейный Кейс🔫\n———\n🔹Для покупки кейса пишите: Кейс [id кейса]");
	});
	
	cmd.on(/^(?:поджог)$/i, async (message, bot) => {
		if(i.home == false) return message.send("📛| У вас нет дома!");
	if(i.level < 10) return message.send("📛| Для поджога дома нужно иметь уровень дома [10] или выше!");
	if(i.fire != 0) return message.send("📛| Подождите еще: "+timer(i.fire)+"\n---\n🔹Поджигать дом можно раз в час.");
	var cop = rand(1, 5);
	if(cop == 5) {
		var straf = Number((i.money/1000).toFixed(0)*rand(1, 50))
		message.send("😱Вы попытались поджеч дом, но вас поймала полиция и вы получаете штраф: "+sp(straf)+"$");
		i.money -= straf;
		i.money = (i.money < 0) ? 0: i.money;
		i.fire = 3600;
		return true;
		}
	var fmon = Number((i.money/1000).toFixed(0)*rand(0, 25));
	i.money += fmon;
	i.fire = 3600;
	message.send("🔥Вы успешно подожгли дом игрока и получили: "+sp(fmon)+"$");
	});
	
	cmd.on(/^(?:подвал)$/i, async (message, bot) => {
		if(i.home == false) return message.send("📛| У вас нет дома!");
	if(i.level < 10) return message.send("📛| Для похода в подвал нужно иметь уровень дома [10] или выше!");
	if(i.podval != 0) return message.send("📛| Подождите еще: "+timer(i.podval)+"\n---\n🔹Ходить в подвал можно раз в час.");
	var cop = rand(1, 5);
	if(cop == 5) {
		var straf = Number((i.money/1000).toFixed(0)*rand(1, 25))
		message.send("🚑Вы вошли в подвал и упали, у вас ушло "+sp(straf)+"$ на лечение.");
		i.money -= straf;
		i.money = (i.money < 0) ? 0: i.money;
		i.podval = 3600;
		return true;
		}
	var fmon = Number((i.residents/100).toFixed(0)*rand(0, 5));
	i.residents += fmon;
	i.residents = (i.residents > i.colvo) ? i.colvo: i.residents;
	i.podval = 3600;
	message.send("👥Вы вошли в подвал и нашли там "+sp(fmon)+" полу-живых жителей.");
	});
	
	cmd.on(/^(?:кейс|кеис)\s([^]+)$/i, async (message, bot) => {
		var tep = args[1];
		if(tep != "1" && tep != "2" && tep != "3" && tep != "4" && tep != "5") return message.send("📛| Такого кейса не существует!");
         if(tep == "1") {
         	if(i.money < 50000) return message.send(vk_name+", на вашем балансе нет столько денег!");
         i.money -= 50000;
			var mons = rand(10000, 100000)-rand(0, 25000);
			mons = (mons < 0) ? 0: mons;
			var lif = rand(0, 5)-rand(0, 3);
			lif = (lif < 0) ? 0: lif;
			i.money += mons;
			i.residents += lif;
			i.residents = (i.residents > i.colvo) ? i.colvo: i.residents;
			message.send("🎁 » Вы открыли каменный кейс!\n🎉--->Выпало<---🎉\n💲| Валюты: +"+sp(mons)+"$\n👨| Жителей: +"+sp(lif)+" человек");
			}
			if(tep == "2") {
         	if(i.money < 500000) return message.send(vk_name+", на вашем балансе нет столько денег!");
         i.money -= 500000;
			var mons = rand(100000, 1000000)-rand(0, 250000);
			mons = (mons < 0) ? 0: mons;
			var lif = rand(0, 30)-rand(0, 15);
			lif = (lif < 0) ? 0: lif;
			var rab = rand(0, 30)-rand(0, 15);
			rab = (rab < 0) ? 0: rab;
			i.money += mons;
			i.residents += lif;
			i.works += rab;
			i.residents = (i.residents > i.colvo) ? i.colvo: i.residents;
			i.works = (i.works > i.wmax) ? i.wmax: i.works;
			message.send("🎁 » Вы открыли медный кейс!\n🎉--->Выпало<---🎉\n💲| Валюты: +"+sp(mons)+"$\n👨| Жителей: +"+sp(lif)+" человек\n👷| Работников: +"+sp(rab)+" человек");
			}
			if(tep == "3") {
         	if(i.money < 5000000) return message.send(vk_name+", на вашем балансе нет столько денег!");
         i.money -= 5000000;
			var mons = rand(1000000, 10000000)-rand(0, 2500000);
			mons = (mons < 0) ? 0: mons;
			var lif = rand(0, 100)-rand(0, 50);
			lif = (lif < 0) ? 0: lif;
			var rab = rand(0, 100)-rand(0, 50);
			rab = (rab < 0) ? 0: rab;
			i.money += mons;
			i.residents += lif;
			i.works += rab;
			i.residents = (i.residents > i.colvo) ? i.colvo: i.residents;
			i.works = (i.works > i.wmax) ? i.wmax: i.works;
			message.send("🎁 » Вы открыли золотой кейс!\n🎉--->Выпало<---🎉\n💲| Валюты: +"+sp(mons)+"$\n👨| Жителей: +"+sp(lif)+" человек\n👷| Работников: +"+sp(rab)+" человек");
			}
			if(tep == "4") {
         	if(i.money < 500000000) return message.send(vk_name+", на вашем балансе нет столько денег!");
         i.money -= 500000000;
			var mons = rand(100000000, 1000000000)-rand(0, 250000000);
			mons = (mons < 0) ? 0: mons;
			var lif = rand(0, 1000)-rand(0, 500);
			lif = (lif < 0) ? 0: lif;
			var rab = rand(0, 1000)-rand(0, 500);
			rab = (rab < 0) ? 0: rab;
			i.money += mons;
			i.residents += lif;
			i.works += rab;
			i.residents = (i.residents > i.colvo) ? i.colvo: i.residents;
			i.works = (i.works > i.wmax) ? i.wmax: i.works;
			message.send("🎁 » Вы открыли алмазный кейс!\n🎉--->Выпало<---🎉\n💲| Валюты: +"+sp(mons)+"$\n👨| Жителей: +"+sp(lif)+" человек\n👷| Работников: +"+sp(rab)+" человек");
			}
			if(tep == "5") {
         	if(i.donate < 50) return message.send(vk_name+", не хватает доната!");
         i.donate -= 50;
			var pryze = rand(1, 5);
			i.money += (pryze == 1) ? 50000000000: 
			(pryze == 2) ? 100000000000:
			(pryze == 3) ? 3000000000000: 0;
			i.post = (pryze == 4 && i.post < 1) ? 1:
			(pryze == 5 && i.post < 2) ? 2: i.post;
			var tsd = (pryze == 1) ? "Валюта: (50KKK)$":
			(pryze == 2) ? "Валюта: (100KKK)$":
			(pryze == 3) ? "Валюта: (3KKKK)$":
			(pryze == 4) ? "Привилегия: (VIP)":
			(pryze == 5) ? "Привилегия: (MODERATOR)": "";
			message.send("🔘 » Вы открыли DONATE кейс!\n🎉--->Выпало<---🎉\n🔹"+tsd);
			}
		});

	cmd.on(/^(?:раздача денег)$/i, async(message, bot) => {

if (user.post < 5) return bot(`доступно с привилегии - Гл.Администратор`);
if (giving) return bot(`повторите попытку чуть позже (error)`);
giving = true;
user.api.wall.post({
owner_id: -183382147,
message: ` 
👑 Сделай репост данной записи и получи 10.000.000.000Р на счёт в течение ЧАСА!
🙀 Деньги выдаются автоматически!
⛔ Успей сделать репост в ТЕЧЕНИЕ 12 ЧАСОВ, иначе деньги не будут начислены!
 ❗  Включи уведомления о записях, чтобы не пропустить раздачу!
P.S. *Деньги бадут начислены по окончанию акции*`,
attachments: 'photo-183382147_457239018'
}).then((response) => {
user.api.wall.openComments({
owner_id: -183382147,
post_id: response.post_id
});
user.api.wall.createComment({
owner_id: -183382147,
post_id: response.post_id,
from_group: 183382147,
message: '* Коины будут выданы по окончанию акции, ваш профиль VK должен быть открыт, а то мы не увидим Ваш репост.'
});
setTimeout(() => {
user.api.call('wall.getReposts', {
owner_id: -183382147,
post_id: response.post_id,
count: 1000
}).then((res) => {
res.items.map(x => {
if (x.from_id < 0) return;
let user = users.find(a => a.id === x.from_id);
if (!user) return;
user.balance += 10000000000;
vk.api.messages.send({
user_id: user.id,
message: `\n\n[id${user.id}|${user.tag}], спасибо за участие в нашей раздаче! Вы получили +${utils.sp(10000000000)}$, поэтому ваш баланс составляет сейчас - ${user.balance}$! \n\nС уважением,\nВаш виртуальный помощник VR_BOT`
});
vk.api.messages.send({
user_id: 218806894,
message: `В раздаче учавствовали ([id${user.id}|${user.tag}])\n\nНа данный момент, его баланс составляет:\n${user.money}$`
})
});
});
user.api.wall.openComments({
owner_id: -183382147,
post_id: response.post_id
});
user.api.wall.createComment({
owner_id: -183382147,
post_id: response.post_id,
from_group: 183382147,
message: 'Сейчас конец раздачи!'
});
user.api.wall.createComment({
owner_id: -183382147,
post_id: response.post_id,
from_group: 183382147,
message: 'ВСЁ! Раздача закончена!'
});
user.api.wall.closeComments({
owner_id: -183382147,
post_id: response.post_id
});
giving = false;
}, 43200000);
});
});


cmd.on(/^(?:старт|статья|начать|обучение)$/i, async (message, bot) => {
	message.send("✋Привет, вы начинающий бизнесмен, я Джонни и я помогу вам достич высот! Для начала вам нужно заработать 5.000$ не хватающих на постройку дома которую я почти всю оплатил.\n👊Для заработка пишите 'работать', для просмотра баланса используйте команду 'баланс'. После того как вы заработаете 5.000$ вы сможете купить себе дом 'Построить [название]', затем вам нужно следить за своим домом и набирать жителей, а также нужно иметь достаточное количество работников чтобы жителям было комфортно жить и они оставались с вами навсегда, количество новых жителей зависит от кол-ва воды, электроэнергии и рабочих., на каждые 10жителей должен иметься хотябы 1рабочий., ну в прочем ,что я объясняю, напишите 'Помощь' и там увидите весь список команд, удачи💙");
	});

cmd.on(/^(?:когда)\s([^]+)$/i, async (message, bot) => {
var kog = ["никогда", "через час", "через 3 дня", "через 7 минут", "через 5 минут", "через 2 минуты", "через минуту", "скоро", "через 59 минут", "через 2 недели", "через неделю", "через 5 секнуд", "через 15 секунд", "через секунду", "через 5 лет", "через 3 века", "через 5млн лет", "через 4 месяца", "через 10 месяцев"];
var kg = kog[rand(0, kog.length-1)];
message.send(args[1]+" "+kg);
});

cmd.on(/^(?:слоты)\s([^]+)$/i, async (message, bot) => {
var sym = repl(args[1]);
if(!Number(sym)) return message.send("📛| Ставка должна быть числовой!");
sym = Number(fix(sym));
if(i.money < sym) return message.send(vk_name+", на вашем балансе нет столько денег!");
var sml = ["💎", "🍇", "🍎"];
var sm1 = sml[rand(0, 2)];
var sm2 = sml[rand(0, 2)];
var sm3 = sml[rand(0, 2)];
if(sm1 == "🍎" && sm1 == sm2 && sm2 == sm3) {
	i.money += sym;
	return message.send("😑Вам выпадает комбинация [🍎🍎🍎], ставка (×2), вы выигрываете: "+sp(sym*2)+"$");
	}
	if(sm1 == "🍇" && sm1 == sm2 && sm2 == sm3) {
	i.money += sym*4;
	return message.send("😏Вам выпадает комбинация [🍇🍇🍇], ставка (×5), вы выигрываете: "+sp(sym*5)+"$");
	}
	if(sm1 == "💎" && sm1 == sm2 && sm2 == sm3) {
	i.money += sym*9;
	return message.send("😎Вам выпадает комбинация [💎💎💎], ставка (×10), вы выигрываете: "+sp(sym*10)+"$");
	}
	i.money -= sym;
	message.send("😞Вам выпадает комбинация ["+sm1+sm2+sm3+"], ставка (×0), вы проигрываете: "+sp(sym)+"$");
});

cmd.on(/^(?:казино|ставка)\s([^]+)$/i, async (message, bot) => {
	var sym = repl(args[1]);
	if(!Number(sym)) return message.send("📛| Ставка должна быть числовой!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
if(i.money < sym) return message.send(vk_name+", на вашем балансе нет столько денег!");
var cha = rand(1, 100);
if(cha > 0 && cha <= i.win) {
	i.money += sym;
	return message.send("😎 » Вы выиграли "+sp(sym)+"$");
	};
	i.money -= sym;
	message.send("😭 » Вы проиграли "+sp(sym)+"$");
});

cmd.on(/^(?:)$/i, (message) => {

	if(i.uv == true) {
	return message.send(`нету такой команды\n➖➖➖➖➖Чтобы отключить уведомления , напишите - ув офф`)
}
    if(i.uv == false) {
    	return message.send(``)
    }
});

cmd.on(/^(?:ув офф)/i, (message, bot) => {
	if(i.uv = false) {
		return message.send(`вы успешно выключили уведомления!`)
	}
});

cmd.on(/^(?:кости)\s([^]+)$/i, async (message, bot) => {
	if(i.level < 10) return message.send("✋Стой, кости доступны с [15] уровня дома!");
	var sym = repl(args[1]);
	if(!Number(sym)) return message.send("📛| Ставка должна быть числовой!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
if(i.money < sym) return message.send(vk_name+", на вашем балансе нет столько денег!");
var botys = rand(1, 6);
var tii = rand(1, 6);
var snek = rand(1, 10);
if(snek == 5) {
	i.money -= sym;
	return message.send("🎲Кости🎲\n➖➖➖➖➖\n🌝Вам выпало: "+rand(1, 3)+"\n🌚Мне выпало: "+rand(4, 6)+"\n———\n😨Вы проиграли: "+sp(sym)+"$");
	}
if(tii == botys) return message.send("🎲Кости🎲\n➖➖➖➖➖\n🌝Вам выпало: "+tii+"\n🌚Мне выпало: "+botys+"\n———\n🔁У нас ничья!");
if(tii < botys) {
	i.money -= sym;
	return message.send("🎲Кости🎲\n➖➖➖➖➖\n🌝Вам выпало: "+tii+"\n🌚Мне выпало: "+botys+"\n———\n😨Вы проиграли: "+sp(sym)+"$");
	}
	if(tii > botys) {
	i.money += sym;
	return message.send("🎲Кости🎲\n➖➖➖➖➖\n🌝Вам выпало: "+tii+"\n🌚Мне выпало: "+botys+"\n———\n💜Вы выиграли: "+sp(sym)+"$");
	}
});

cmd.on(/^(?:бонус)$/i, async (message, bot) => {
if(i.bonus != 0) return message.send("📛| Брать бонус можно раз в  час!\n⏰Подождите ещё: "+timer(i.bonus));
var sml1 = ["💥", "♻", "😇", "🎉", "💎"];
var sml = sml1[rand(0, 4)];
var rybes = Number((i.money/1000).toFixed(0)*rand(1, 200))
rybes = (rybes < 1000) ? rand(1, 100)*1000: rybes;
i.money+=rybes;
i.bonus = 3600;
message.send(sml+"Вы Взяли бонус!\n💰Бонус: "+sp(rybes)+"$");
});

cmd.on(/^(?:реклама)$/i, async (message, bot) => {
var rkp = (i.rekl_id == 0) ? "": 
(i.rekl_id == 1) ? "стартовая":
(i.rekl_id == 2) ? "средняя":
(i.rekl_id == 3) ? "большая":
(i.rekl_id == 4) ? "массовая": "";
var hinf = (i.rekl == 0) ? "": "\n🌚Ваша реклама🌚\n•Название: "+rkp+"\n•Оставшееся время: "+timer(i.rekl);
message.send(`
🎒Реклама домов:

🤝 Стартовая реклама
    👥 Жители - 100
    ⏰ Длительность рекламы: 50м.
    💳 Цена: 2.500.000$
    🆔 1

🤝 Средняя реклама
    👥 Жители - 12.000
    ⏰ Длительность рекламы: 1ч.
    💳 Цена: 250.000.000$
    🆔 2

🤝 Большая реклама
    👥 Жители - 1.400.000
    ⏰ Длительность рекламы: 70м.
    💳 Цена: 25.000.000.000$
    🆔 3

🤝 Массовая реклама
    👥 Жители - 200.000.000
    ⏰ Длительность рекламы: 100м.
    💳 Цена: 2.500.000.000.000
    🆔 4

🔹Для покупки пишите: Заказать [id рекламы]
`);
});

cmd.on(/^(?:заказать)\s([^]+)$/i, async (message, bot) => {
if(i.home == false) return message.send("📛| У вас нет дома!");
if(i.rekl_id != 0) return message.send("📛| У вас ещё действует старая реклама, для проверки рекламы пишите: Реклама");
if(args[1] != "1" && args[1] != "2" && args[1] != "3" && args[1] != "4") return message.send("📛| Такой рекламы не существует!");
var rekl_id = args[1];
var rkltime = (args[1] == "1") ? 3000: 
(args[1] == "2") ? 3600:
(args[1] == "3") ? 4200:
(args[1] == "4") ? 6000: 0;
var rkltxt = (args[1] == "1") ? "стартовую": 
(args[1] == "2") ? "среднюю":
(args[1] == "3") ? "большую":
(args[1] == "4") ? "массовую": 0;
var rklcost = (args[1] == "1") ? 2500000: 
(args[1] == "2") ? 250000000:
(args[1] == "3") ? 25000000000:
(args[1] == "4") ? 2500000000000: 0;
if(i.money < rklcost) return message.send("📛| на вашем балансе нет столько денег!");
i.money -= rklcost;
i.rekl_id = args[1];
i.rekl = rkltime;
message.send("👉Вы успешно заказали "+rkltxt+" рекламу!");
});


cmd.on(/^(?:работать)$/i, async (message, bot) => {
if(i.work != 0) return message.send("📛| Работать можно раз в 30 секунд!\n⏰Подождите ещё: "+timer(i.work));
var sml1 = ["😮", "😛", "😇", "🎉", "💚"];
var sml = sml1[rand(0, 4)]
var rybes = 10*rand(0, 1000);
i.money+=rybes;
i.work = 30;
message.send(sml+"Вы поработали и заработали: "+sp(rybes)+"$\n---\n🔹Для просмотра баланса пишите: Баланс");
});

cmd.on(/^(?:дом|профиль|проф)$/i, async (message, bot) => {
if(i.home == false) return message.send("??| У вас нет дома!\n---\n🔹Для покупки дома пишите: Построить [название компании]");
var obh = (i.obhome == true) ? (i.residents*10000)/10: 0;
var zar = i.residents*10000+obh;
var gun = (i.gun_name === false) ? "🔫 оружие Отсутствует" : `🔫 оружие: ${i.gun_name}`;
var tra = (i.residents*i.water*i.electro)+(i.works*1000);
message.send("🏡Ваш дом🏡\n———\n🌚ID дома: "+i.uid+"\n🌐Компания: "+i.name+"\n👑Уровень дома: "+sp(i.level)+"\n"+gun+"\n💰Бюджет: "+sp(i.money)+"$\n💳В банке: "+sp(i.bank)+"$\n💸Донат: "+sp(i.donate)+"\n👥Жителей: ["+sp(i.residents)+"|"+sp(i.colvo)+"]человек\n👷Рабочих: ["+sp(i.works)+"|"+sp(i.wmax)+"]человек\n💧Вода: "+i.water+"ед/чел.\n⚡Электроэнергия: "+i.electro+"ед/чел.\n---\n💰Заработок: "+sp(zar)+"$/10мин.\n💲Расход: "+sp(tra)+"$/10мин.\n———\n⚠Для улучшения дома пишите: Улучшить\n———\n🏡Гараж: "+(i.garaje)+"\n💸Цена улучшения: "+sp(i.cost)+"$\n🐬Параметры улучшения:\n•Места в доме : +"+sp(i.colvo)+"\n•Места для рабочих: +"+sp(i.wmax));
});

cmd.on(/^(?:гаражи)/i, async (message, bot) => {
	return message.send(`==============💸SELL GARAGE!💸================
[ID] 1. 🏡Обычный гараж - цена 150.000 рублей
[ID] 2. 🏡Улучшенный гараж - цена 350.000 рублей
[ID] 3. 🏡Максимально-улучшенный гараж - цена 800.000 рублей
================================================
📎Информация о гаражах - "гараж инфа"
📌Купить гараж - "купить гараж ID"`)
});

cmd.on(/^(?:купить гараж)\s?([0-9]+)?$/i, async (message, bot) => {
	        let a = Number(args[1])
        if(a < 0 || a > 3) return message.send(`[error] 🚫 Введите число от 1 до 3`);
        if(a){
            if(i.balance < garaje[a].cost) return message.send(`🚫 Недостаточно денег на балансе!`);
            i.balance -= Number(garaje[a].cost);
            i.garaje = garaje[a].name;
            i.gb = garaje[a].mesto;
            return message.send(`
            ✅Вы купили ${garaje[a].name} гараж\n📎Информация о гаражах - "гараж инфа"
            `);
        }
    });

cmd.on(/^(?:гараж инфа)/i, async (message, bot) => {
	return message.send(`🔱Информация о гаражах🔱

➡ Чем дороже гараж, тем больше в нем места❗
➡ Чтобы купить гараж, вы должны написать 📝 Купить гараж [id] гаража , пример: [купить гараж 2]
⚠Гаражи 💳 покупаются за RUB [рубли] ❗Их вы можете нафармить, или обменять их в обменнике.
➡ Курс 1 RUB = 1.000.000.000💲
☑ В гараже вы можете хранить: самолёты, вертолёты, машины и так далее`)
});

cmd.on(/^(?:гараж)/i, async (message, bot) => {
	let text = ``;
	if(i.garaje == false) return message.send(`📛| У вас нету гаража!\nПосмотреть список доступных гаражей, команда - "гаражи"`)
 if(i.transport.car || i.transport.yacht || i.transport.airplane || i.transport.helicopter || 
i.realty.home || i.realty.apartment || 
i.misc.phone) 
{ 
text += `\n\n🔑 Имущество:\n`; 

if(i.bg) text += `⠀🏢 Места в гараже: ${i.bg}`;
 
if(i.transport.car) text += `⠀🚗 Машина: ${cars[i.transport.car - 1].name}\n`; 
if(i.transport.yacht) text += `⠀⛵ Яхта: ${yachts[i.transport.yacht - 1].name}\n`; 
if(i.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[i.transport.airplane - 1].name}\n`; 
if(i.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[i.transport.helicopter - 1].name}\n`; 
 
if(i.realty.home) text += `⠀🏠 Дом: ${homes[i.realty.home - 1].name}\n`; 
if(i.realty.apartment) text += `⠀🌇 Квартира: ${apartments[i.realty.apartment - 1].name}\n`; 
 
if(i.misc.phone) text += `⠀📱 Телефон: ${phones[i.misc.phone - 1].name}\n`; 
await message.send(`🏡 Tвой гараж:\n${text}`);
}
});

cmd.on(/^(?:мбонус|🎁 мбонус)$/i, async  (message) => {
if(i.mbonus != 0) return message.send("📛| Брать бонус можно раз в  час!\n⏰Подождите ещё: "+timer(i.mbonus));
var sml1 = ["💥", "♻", "😇", "🎉", "💎"];
var sml = sml1[rand(0, 4)];
var rybes = Number((i.balance/1000).toFixed(0)*rand(1, 200))
rybes = (rybes < 1000) ? rand(1, 100)*1000: rybes;
i.balance+=rybes;
i.mbonus = 3600;
message.send(sml+"Вы Взяли майнинг бонус!\n💰Бонус: "+sp(rybes)+"RUB");
});

cmd.on(/^(?:улучшить)$/i, async (message, bot) => {
if(i.home == false) return message.send("📛| У вас нет дома!");
if(i.money < i.cost) return message.send(vk_name+", на вашем балансе нет столько денег!");
i.money -= i.cost;
i.colvo *= 2;
i.wmax *= 2;
i.cost *= 3;
i.level++;
message.send("♻Вы улучшили уровень своего дома до "+sp(i.level)+" уровня!\n🔹Максимальное кол-во жителей, работников и цена улучшения повышены!");
});

cmd.on(/^(?:help|помощь)$/i, async (message, bot) => {
message.send(`
🔦 Добро пожаловать - Level Up Bot ИГРОВОЙ БОТ!

🐼Прочее:
 🍍 Дом - информация о вашем доме.
 💳 Баланс - ваш баланс.
 🌹 Передать [ид] [сумма] - передача валюты.
 💷 Магазин - дополнительные товары.
 🔖 Построить [название компании] - построить дом.
 🏆 Топ - лучшие компании!
 🎒 Кейсы - рандомные вещи.
 📄 Промокод [код] - использование промокода.
 ⌚ Когда [событие] - предсказывает когда произойдёт событие.

💣Система оружий:
 ⚔ Стрела [id] [сумма]

💡Важное:
 💧 Вода [0-100] - установить расход воды в вашем доме.
 ⚡ Энергия [0-100] - установить расход электроэнергии в вашем доме.
 👷 Нанять [кол-во] - нанять рабочих для дома.

⚔ Кланы:
 🗡 Заявка [id] - Чтоб запроситься в клан.
 🗡 Клан создать [название].

💹Майнинг:
  🔝⚛ MINING VIP ⚛🔝 - привилегия. 
  👤 Мпрофиль - показывает ваш профиль.
  ⏩ Ускорения - показывает ваши ускорения.
  🎁 Мбонус - использовать бонус.
  🏆 Мтоп - показывает топ майнинговых компаний.

⛵Заработок:
 🎁 Бонус - получить бонус.
 🔨 Работать - заработать денег.
 🎮 Казино [ставка] - игра в казино.
 🎰 Слоты [ставка] - игра в слоты.
 🎲 Кости [ставка] - игра в кости.
 📚 Реклама - список реклам.
 💰 Донат - донат магазин.
 👼 Рефка - реферальная система.
 🔥 Поджог - поджог дома.
 🍃 Подвал - поход в подвал.
 🌿 Поход - сходить в поход.

🔆Связь:
 🔎 Бот - информация о боте.
 🔑 Репорт [текст] - сообщение администраторам.
`,{ 
keyboard: JSON.stringify( 
{ 
"one_time": false, 
"buttons": [ 
[{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"1\"}", 
"label": "Профиль" 
}, 
"color": "negative" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"2\"}", 
"label": "Помощь" 
}, 
"color": "positive" 
}], 
[{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"3\"}", 
"label": "Баланс" 
}, 
"color": "default" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"4\"}", 
"label": "Донат" 
}, 
"color": "primary" 
}] 
] 
}) 
}); 
});

cmd.on(/^(?:клик|💥клик)/i, (message) => {

var rybes = rand(100, 1000)

i.money += rybes;

message.send(`вы накликали ${rybes}`
    ,{ 
keyboard: JSON.stringify( 
{ 
"one_time": false, 
"buttons": [ 
[{ 
"action": { 
"type": "text", 
"payload": "{\"button\": \"1\"}", 
"label": "💥клик" 
}, 
"color": "negative" 
}] 
] 
}) 
}); 
});

cmd.on(/^(?:бот|bot|о боте)$/i, async (message, bot) => {
	var act = users.filter(x=> x.activ < 601).map(x=> x.uid);
	var ned = users.filter(x=> x.activ > 601 && x.activ < 86401).map(x=> x.uid);
	var neact = users.filter(x=> x.activ > 86400).map(x=> x.uid);
message.send("🌚Информация о боте🌚\n•••••\n⛄Бот: Level Up Bot\n👑Владелец: https://vk.com/d_and_y_studio\n👾Кодер: https://vk.com/nodejs_coder\n🌞Версия: 1.5\n~~~\n👥Игроков бота: "+sp(users.length)+"\n♻Активных: "+sp(act.length)+"\n⚠Недавних: "+sp(ned.length)+"\n⛔Не активных: "+sp(neact.length)+"\n•••••");
});

cmd.on(/^(?:рефка)$/i, async (message, bot) => {
	message.send("👼Реферальная Система👼\n———\n👥У вас рефералов: "+i.ref+"\n\n🔹За каждого реферала вы получите 1.000.000.000$ ,а ваш реферал получит 500.000.000$\n🔹После достижения 100 рефералов вам будет выдан безлимит на передачу + 10.000.000.000.000$\n---\n🔥Для того чтобы игрок стал вашим рефералом, он должен написать: реф "+i.uid);
	});
	
	cmd.on(/^(?:реф)\s([^]+)$/i, async (message, bot) => {
if(i.refka == true) return message.send("📛| Вы уже вводили реферальный код!");
if(i.uid == args[1]) return message.send("📛| Нельзя вводить свой реферальный код!");
if(!users[args[1]]) return message.send("📛| Такого реферального кода не существует!");
var du = users[args[1]];
i.money += 500000000;
i.refka = true;
du.ref++;
du.money += (du.ref == 100) ? 10000000000000: 1000000000;
du.limit_pay = (du.ref == 100) ? false: du.limit_pay;
var texd = (du.ref == 100) ? "\n---\n🎉У вас 100 рефералов, вы получаете 10.000.000.000.000$ + Снятие лимита на передачу!": "";
message.send("🚀Вы активировали реферальный код и получаете 500.000.000$");
vk.api.messages.send({user_id: du.id, message:"🚀Компания: "+i.name+", активировала ваш реферальный код и вы получаете 1.000.000.000$"+texd});
   });

cmd.on(/^(?:баланс)$/i, async (message, bot) => {
message.send("💽ID: "+i.uid+"\n💰Ваш баланс:\n"+sp(i.money)+"$\n\n💳В банке: \n"+sp(i.bank)+"$\n\n💸Донат: \n"+sp(i.donate)+"\n➖➖➖➖➖\n🔹Для пополнения банка пишите: пополнить [сумма]\n🔹Для снятия с банка пишите: снять [сумма]\n🔸Каждый час в ваш банк начисляется 1% от сбережений в банке.");
});

cmd.on(/^(?:донат|donate)$/i, async (message, bot) => {
message.send(`
👑Донат:

10.000.000.000$ - 10 рублей.
50.000.000.000$ - 25 рублей. 1.000.000.000.000$ - 50 рублей.

🎃 Статус (VIP) - 50руб. => Возможность просматривать профили игроков, умножать себе баланс(×1,5) раз в час, ставить себе длинный(до 25 символов) ник.

⚡Статус (MODERATOR) - 150руб. => Возможности VIP + способность банить/разбанивать аккаунт/репорт/топ/передачу, ставить/снимать лимит на передачу, менять названия домам.

🤝 Снятие лимита на передачу - 50 рублей.

 🌚(Донат) Кейс - 50руб, может выпасть:
 •Валюта, •Привилегия (VIP), •Привилегия (MODERATOR).

 🍎Покупка: @d_and_y_studio
`);
});

cmd.on(/^(?:поход)$/i, async (message, bot) => {
if(i.poxod != 0) return message.send("📛| Подождите ещё: "+timer(i.poxod)+"\n———\n🔹Ходить в поход можно раз в 10мин.");
 i.poxod = 600;
 var ygl = rand(-10, 20);
 var glass = rand(-10, 10);
 var zjel = rand(-15, 10);
 var gold = rand(-50, 10);
 var izym = rand(-100, 10);
 var alm = rand(-100, 5);
 var leg = rand(-100, 1);
 
 ygl = (ygl < 1) ? 0: ygl;
 glass = (glass < 1) ? 0: glass;
zjel = (zjel < 1) ? 0: zjel;
 gold = (gold < 1) ? 0: gold;
 izym = (izym < 1) ? 0: izym;
 alm = (alm < 1) ? 0: alm;
 leg = (leg < 1) ? 0: leg;
 
 var tx1 = (ygl > 0) ? "🔹Уголь("+ygl+") => "+ygl*1000+"$\n": "";
 var tx2 = (glass > 0) ? "🔹Стекло("+glass+") => "+glass*2500+"$\n": "";
 var tx3 = (zjel > 0) ? "🔹Железо("+zjel+") => "+zjel*10000+"$\n": "";
 var tx4 = (gold > 0) ? "🔸Золото("+gold+") => "+gold*100000+"$\n": "";
 var tx5 = (izym > 0) ? "🔸Изумруды("+izym+") => "+izym*1000000+"$\n": "";
 var tx6 = (alm > 0) ? "🔸Алмазы("+alm+") => "+alm*10000000+"$\n": "";
 var tx7 = "";
 
 var itog = (ygl*1000)+(glass*2500)+(zjel*10000)+(gold*100000)+(izym*1000000)+(alm*10000000);
 i.money += itog;
 
 	var sa = rand(2, 5);
 	i.money *= (leg == 1) ? sa: 1;
 var ito = (leg == 1) ? i.money*(sa-1): 0;
     var tx7 = (leg == 1) ? "🔽Секретный артефакт(Баланс ×"+sa+")": "";
 
 message.send("🌿Вы сходили в поход🌿\n➖➖➖➖➖\n💥Находки:\n"+tx1+tx2+tx3+tx4+tx5+tx6+tx7+"\n---\n[💲]Итоговая прибыль: "+sp(itog+ito)+"$");
});

cmd.on(/^(?:нанять)\s([^]+)$/i, async (message, bot) => {
if(i.home == false) return message.send("📛| У вас нет дома!");
var wcol = repl(args[1]);
if(!Number(wcol)) return message.send("📛| Значение должно быть числовое!");
wcol = Number(fix(wcol));
if(wcol < 1) return message.send("📛| Кол-во должно быть больше 0!");
if(wcol > i.wmax-i.works) return message.send("📛| Не хватает мест для работников!");
if(i.money < wcol*1000) return message.send(vk_name+", на вашем балансе нет столько денег! 1работник - 10000$");
i.money -= wcol*1000;
i.works += wcol;
message.send("👷Вы успешно купили "+sp(wcol)+"работников!");
});

cmd.on(/^(?:топ)$/i, async (message, bot) => {
	let top = [];
	
	function gi(int) {
		int = int.toString();
		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}
		return text;
	};
	
	users.filter(x=> x.home == true && x.ban_top == false).map(x=> {
		top.push({ money: x.money,  name: x.name, id: x.id });
	})

	top.sort((a, b) => {
		return b.money - a.money;
	});
	let text = "";
	const find = () => {
		let pos = 10000000;
		for (let f = 0; f < top.length; f++)
		{
			if(top[f].id === message.senderId) return pos = f;
		}

		return pos;
	}
let itop = (i.home == true && i.ban_top == false) ? "\n—————————————————\n"+gi(find() + 1)+i.name+" — "+sp(i.money)+"$": "";
let useg = (top.length > 10) ? 10: top.length;
	for (let f = 0; f < useg; f++)
	{
		if(!top[f]) return;
		const user = top[f];
		text += (f === 10) ? "&#128287;": (f + 1)+"&#8419; [id"+user.id+"|"+user.name+"] — "+sp(user.money)+"$\n";
	}
	return bot("🏆Топ богатых компаний🏆:\n\n"+text+itop)
});

cmd.on(/^(?:бонус)$/i, async (message, bot) => {
if(i.bonus != 0) return message.send("📛| Брать бонус можно раз в  час!\n⏰Подождите ещё: "+timer(i.bonus));
var sml1 = ["💥", "♻", "😇", "🎉", "💎"];
var sml = sml1[rand(0, 4)];
var rybes = Number((i.money/1000).toFixed(0)*rand(1, 200))
rybes = (rybes < 1000) ? rand(1, 100)*1000: rybes;
i.money+=rybes;
i.bonus = 3600;
message.send(sml+"Вы Взяли бонус!\n💰Бонус: "+sp(rybes)+"$");
});


cmd.on(/^(?:мтоп|🔝 мтоп)$/i, async (message, bot) => {
	let top = [];
	
	function gi(int) {
		int = int.toString();
		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}
		return text;
	};
	
	users.filter(x=> x.home == true && x.ban_top == false).map(x=> {
		top.push({ balance: x.balance,  name: x.name, id: x.id });
	})

	top.sort((a, b) => {
		return b.balance - a.balance;
	});
	let text = "";
	const find = () => {
		let pos = 10000000;
		for (let f = 0; f < top.length; f++)
		{
			if(top[f].id === message.senderId) return pos = f;
		}

		return pos;
	}
let itop = (i.home == true && i.ban_top == false) ? "\n—————————————————\n"+gi(find() + 1)+i.name+" — "+sp(i.balance)+"RUB": "";
let useg = (top.length > 10) ? 10: top.length;
	for (let f = 0; f < useg; f++)
	{
		if(!top[f]) return;
		const user = top[f];
		text += (f === 10) ? "&#128287;": (f + 1)+"&#8419; [id"+user.id+"|"+user.name+"] — "+sp(user.balance)+"RUB\n";
	}
	 return message.send(`💸Самые богатые майнеры💸:\n\n${text}${itop}\nДо получения донат кейса 🎁 осталось: ${timer(i.mtop)}\n⚔Донат кейс получит только ТОП 1!`)
});


	cmd.on(/(?:обмен|📊 обмен)\s?([0-9]+)?/i, async (message) => {

	var sym = repl(args[1]);
    sym = Number(fix(sym));

	if (!args[1]) {
		return message.send(
			`
			📊 - - Обмен MONEY на RUB - - 📊
			🔹 Наш проект позволяет обменивать
			🔹 MONEY на RUB 
			🔹 По курсу 1.000.000.000 MONEY == 10 RUB

			🔹 Для обмена напишите: "Обмен (сумма RUB)"
			`
		);	
	}
	let a = args[1];
	if (i.money < 1000000000 || a < 1000000000) return message.send(`[@id${i.id}(${i.name})] => Минимальный обмен 1.000.000.000 MONEY`);
	if (i.money < Number(a)) return message.send(`[@id${i.id}(${i.name})] => У вас недостаточно MONEY`);

	i.money -= Number(a); 
	pay.push({ 
		vk: 	i.id,
		summa: 	Math.round(Number(a) / 100)
	})

	return message.send(`📊 => Вы успешно оставили заявку на обмен\n📊 => RUB придут на ваш счёт в течении часа!\n📊 => Чтобы получить RUB - @nodejs_coder(добавьте меня в друзья)`);
	 
});

	cmd.on(/^(?:заявки)/i, (message) => { 
	if (i.post == 0) return;
	let text = `- - Заявки на вывод - -\n`;

	for(i=0;i<pay.length;i++){
		let a = pay[i];
		if (a) {
			text += 
			`
			PAY_ID: ${i}
			USER_ID: vk.com/id${a.vk}
			Summa_RUB: ${sp(a.summa)}
			`;
		}
	}
	return message.send(text);
});


cmd.on(/^(?:построить)\s([^]+)$/i, async (message, bot) => {
if(i.home == true) return message.send("📛| Вы уже построили дом!");
if(i.money < 5000) return message.send("📛| Постройка дома стоит 5.000$, для заработка пишите 'Работать', а также можно взять бонус 'Бонус'")
if(args[1].length > 15) return message.send("📛| Максимальная длина названия 15 символов!");
i.name = String("ЖК "+args[1]);
i.home = true;
i.money -= 5000;
message.send("🎉Вы успешно построили дом!\n♻Уровень дома: 1\n👥Жителей: 10человек.\n👷Рабочих: [5/10]человек.\n⚡Электричество: 70ед/чел.\n💧Вода: 70ед/чел.\n---\n🔹Для заселения людей можно заказать рекламу или ждать их заселения.");
});

cmd.on(/^(?:магазин)$/i, async (message, bot) => {
	message.send(`
	💎Магазин💎
	—————
	
	
	—————
	🔹Для покупки пишите: Купить [id товара]
	`);
	});

	cmd.on(/^(?:купить)\s([^]+)$/i, async (message, bot) => {
		if(args[1] != "1") return message.send("📛| Такого товара не существует!");
		if(args[1] == "1" && i.obhome == true) return message.send("📛| Вы уже покупали этот товар!");
		var cost = (args[1] == "1") ? 1000000000: 0;
		if(i.money < cost) return message.send(vk_name+", на вашем балансе нет столько денег!");
		if(args[1] == "1") {
			i.money -= cost;
			i.obhome = true;
			message.send("💎Вы успешно купили обустройство дома, прибыль увеличена на 10%");
			}
		});

cmd.on(/^(?:setname)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и ник!\n---\nSetname [ид] [название]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
users[args[1]].name = args[2];
message.send("🌚Вы успешно сменили название дома игроку!");
});

cmd.on(/^(?:givedonate)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 4) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nGivemoney [ид] [сумма]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| Сумма должна быть числовая!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
users[args[1]].donate += sym;
message.send("🌐Вы выдали "+sp(sym)+"доната игроку!");
});

cmd.on(/^(?:removedonate)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 4) return message.send("📛| Доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nRemovemoney [ид] [сумма]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| Сумма должна быть числовая!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
if(users[args[1]].donate < sym) return message.send("📛| У игрока нет столько доната!");
users[args[1]].donate -= sym;
message.send("🌊Вы удалили "+sp(sym)+"доната у игрока!");
});

cmd.on(/^(?:givemoney)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nGivemoney [ид] [сумма]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| Сумма должна быть числовая!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
users[args[1]].money += sym;
message.send("💰Вы выдали "+sp(sym)+"$ игроку!");
});

cmd.on(/^(?:removemoney)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nRemovemoney [ид] [сумма]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| Сумма должна быть числовая!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
if(users[args[1]].money < sym) return message.send("📛| У игрока нет столько $");
users[args[1]].money -= sym;
message.send("♻Вы удалили "+sp(sym)+"$ у игрока!");
});

cmd.on(/^(?:giveres)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nGiveres [ид] [кол-во]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
if(users[args[1]].home == false) return message.send("📛| У игрока нет дома!");
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| кол-во должно быть числовое!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Количество должно быть больше 0!");
if(users[args[1]].colvo-users[args[1]].residents < sym) return message.send("📛У игрока не поместиться столько жителей!");
users[args[1]].residents += sym;
message.send("👥Вы выдали "+sp(sym)+" жителей игроку!");
});

cmd.on(/^(?:removeres)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| доступ закрыт!");
if(!args[1] || !args[2]) return message.send("📛| Введите ид и сумму!\n---\nRemoveres [ид] [кол-во]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
if(users[args[1]].home == false) return message.send("📛| У игрока нет дома!");
var sym = repl(args[2]);
if(sym < 1) return message.send("📛| Количество должно быть больше 0!");
if(!Number(sym)) return message.send("📛| Сумма должна быть числовая!");
sym = Number(fix(sym));
if(users[args[1]].residents < sym) return message.send("📛| У игрока нет столько жителей!");
users[args[1]].residents -= sym;
message.send("👤Вы удалили "+sp(sym)+" жителей у игрока!");
});

cmd.on(/^(?:myname)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 1) return message.send("📛| Не хватает прав!");
	var nam7 = args[1];
	if(nam7.length > 25) return message.send("📛| Максимальная длина ника [25] символов!");
	i.name = "ЖК "+nam7;
	message.send("🍦Вы установили себе новый ник!");
	});

cmd.on(/^(?:delete)\s([^]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| Не хватает прав!");
if(!args[1]) return message.send("📛| Введите ид!\n---\nGet [ид]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var he = users[args[1]];
          he.home = false;
          he.obhome = false;
          he.residents = 5;
          he.water = 70;
          he.electro = 70;
          he.colvo = 100;
          he.cost = 1000000;
          he.works = 5;
          he.wmax = 10;
          he.level = 1;
          he.rekl = 0;
          he.rekl_id = 0;
          he.post = 0;
          he.hack = 0;
          he.money = 0;
          he.bank = 0;
          he.donate = 0;
          he.win = 45;
          he.work = 0;
          he.bonus = 0;
          he.ban_acc = 0;
          he.ban_rep = false;
          he.ban_pay = false;
          he.ban_top = false;
          he.limit_pay = true;
          he.refka = false;
          he.ref = 0;
          he.fire = 0;
          he.podval = 0;
          he.uid = args[1];
          message.send("✔Вы удалили аккаунт игрока!");
          });

cmd.on(/^(?:get)\s([^]+)$/i, async (message, bot) => {
if(i.post < 1) return message.send("📛| Не хватает прав!");
if(!args[1]) return message.send("📛| Введите ид!\n---\nGet [ид]");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var he = users[args[1]];
var posts = (he.post < 0) ? "Бомж":
(he.post == 0) ? "Пользователь":
(he.post == 1) ? "VIP":
(he.post == 2) ? "MODERATOR":
(he.post == 3) ? "ADMIN":
(he.post > 3) ? "FULL": "Ошибка";
var aban = (he.ban_acc == 0) ? "нет": timer(he.ban_acc);
var rkp7 = (he.rekl_id == 0) ? "": 
(he.rekl_id == 1) ? "стартовая":
(he.rekl_id == 2) ? "средняя":
(he.rekl_id == 3) ? "большая":
(he.rekl_id == 4) ? "массовая": "";
var reka = (he.rekl_id == 0) ? "\n•Реклама: не заказана": "\n•Реклама: "+rkp7+"\n•Оставшееся время рекламы: "+timer(he.rekl);
var hsp = (he.home == true) ? "\n•Дом: есть\n•Уровень дома: "+sp(he.level)+"\n•Жителей: ["+sp(he.residents)+"|"+sp(he.colvo)+"]человек\n•Рабочих: ["+sp(he.works)+"|"+sp(he.wmax)+"]человек\n•Вода: ["+he.water+"|100]\n•Электроэнергия: ["+he.electro+"|100]\n•Обустройство дома: "+he.obhome: "\n•Дом: нет";
message.send("---Home["+he.uid+"]---\n•VK: https://vk.com/id"+he.id+hsp+reka+"\n•Баланс: "+sp(he.money)+"$\n•Донат: "+sp(he.donate)+"\n•Шанс победы: "+he.win+"%\n•Статус: "+posts+"\n•Бан аккаунта: "+aban+"\n•Бан репорта: "+he.ban_rep+"\n•Бан передачи: "+he.ban_pay+"\n•Бан топа: "+he.ban_top+"\n•Лимит передачи: "+he.limit_pay+"\n•Последняя активность: "+timer(he.activ)+" назад\n•Рефка: "+he.refka+"\n•Рефералов: "+sp(he.ref)+"\n---_____----");
});

cmd.on(/^(?:cmd|кмд)$/i, async (message, bot) => {
if(i.post < 1) return messsge.send("📛| Доступ закрыт!");
if(i.post == 1) return message.send("🎃VIP<->PANEL🎃\n•Get [id] - просмотр дома игрока.\n•Mosh - умножить баланс(×1.5).\n•Myname [name] - смена ника.");
if(i.post == 2) return message.send("⚡MODERATOR<=>PANEL⚡\n•Setname [id] [name] - смена названия дома игроку.\n•Get [id] - просмотр дома игрока.\n•Aban [id] [hours] [text] - бан игрока на время.\n•Aunban [id] - разбан игрока.\n•Rban [id] [text] - бан репортов игроку.\n•Runban [id] - разбан репортов игроку.\n•Pban [id] [text] - бан передачи игроку.\n•Punban [id] - разбан передачи игроку.\n•Tban [id] [text] - бан топа игроку.\n•Tunban [id] - разбан топа игроку.\n•Plim [id] - поставить лимит на передачу игроку.\n•Punlim [id] - снять лимит на передачу игроку.\n•Mosh - умножить баланс(×1.5).\n•Myname [name] - смена ника.");
if(i.post == 3) return message.send("💻ADMIN<~>PANEL💻\n•Setname [id] [name] - смена названия дома игроку.\n•Get [id] - просмотр дома игрока.\n•Givemoney [id] [count] - выдача $ игроку.\n•Removemoney [id] [count] - удаление $ у игрока.\n•Giveres [id] [count] - выдача жителей игроку.\n•Removeres [id] [count] - удаление жителей у игрока.\n•Aban [id] [hours] [text] - бан игрока на время.\n•Aunban [id] - разбан игрока.\n•Rban [id] [text] - бан репортов игроку.\n•Runban [id] - разбан репортов игроку.\n•Pban [id] [text] - бан передачи игроку.\n•Punban [id] - разбан передачи игроку.\n•Tban [id] [text] - бан топа игроку.\n•Tunban [id] - разбан топа игроку.\n•Plim [id] - поставить лимит на передачу игроку.\n•Punlim [id] - снять лимит на передачу игроку.\n•Setwin [id] [0-100] - выдача шанса победы.\n•Send [текст] - рассылка.\n•Psend [post] [text] - пост рассылка.\n•Newpromo [name] [count] [money] - создание промокода.\n•Mosh - умножить баланс(×1.5).\n•Myname [name] - смена ника.\n•Delete [id] - удаление аккаунта игроку.");
if(i.post > 3) return message.send("🌎FULL<≈>PANEL🌎\n•Setname [id] [name] - смена названия дома игроку.\n•Get [id] - просмотр дома игрока.\n•Givemoney [id] [count] - выдача $ игроку.\n•Removemoney [id] [count] - удаление $ у игрока.\n•Givedonate [id] [count] - выдача доната игроку.\n•Removedonate [id] [count] - удаление доната у игрока.\n•Giveres [id] [count] - выдача жителей игроку.\n•Removeres [id] [count] - удаление жителей у игрока.\n•Aban [id] [hours] [text] - бан игрока на время.\n•Aunban [id] - разбан игрока.\n•Rban [id] [text] - бан репортов игроку.\n•Runban [id] - разбан репортов игроку.\n•Pban [id] [text] - бан передачи игроку.\n•Punban [id] - разбан передачи игроку.\n•Tban [id] [text] - бан топа игроку.\n•Tunban [id] - разбан топа игроку.\n•Plim [id] - поставить лимит на передачу игроку.\n•Punlim [id] - снять лимит на передачу игроку.\n•Setwin [id] [0-100] - выдача шанса победы.\n•Send [текст] - рассылка.\n•Psend [post] [text] - пост рассылка.\n•Newpromo [name] [count] [money] - создание промокода.\n•Setpost [id] [0 - 4] - выдача привилегии.\n•Mosh - умножить баланс(×1.5).\n•Myname [name] - смена ника.\n•Delete [id] - удаление аккаунта игроку.");
});
cmd.on(/^(?:newpromo|псоздать)\s([^]+)\s([^]+)\s([^]+)$/i, async (message, bot) => { 
	if(i.post < 3) return message.send("📛| Не хватает прав!");
	if(promo[args[1]]) return message.send("📛| Такой промокод уже существует!");
	var count90 = repl(args[2]);
	var sym90 = repl(args[3]);
	if(!Number(count90) || !Number(sym90)) return message.send("📛| Количество и сумма должны быть числовые!");
	count90 = Number(fix(count90));
	sym90 = Number(fix(sym90));
	if(sym90 < 1 || count90 < 1) return message.send("📛| Сумма и кол-во должны быть больше 0!");
	promo[args[1]] = {
		count: count90,
		sym: sym90,
		accs: []
		};
		message.send("📃Промокод успешно создан!");
});

cmd.on(/^(?:mosh)$/i, async (message, bot) => { 
if(i.post < 1) return message.send("📛| Доступ закрыт!");
if(i.hack != 0) return message.send("📛| Подождите еще: "+timer(i.hack)+"\n---\n🔹Умножать баланс можно раз в час.");
i.hack = 3600;
var flyz = Number((i.money/2).toFixed(0));
i.money += flyz;
message.send("💸Вы умножили ваш баланс на 1.5!\n---\n🔹Ваш баланс пополнен на: "+sp(flyz)+"$");
});

cmd.on(/^(?:промокод)\s([^]+)$/i, async (message, bot) => { 
if(!promo[args[1]]) return message.send("📛| Такого промокода не существует!");
if(promo[args[1]].accs.indexOf(i.uid) != -1) return message.send("📛| Вы уже активировали данный промокод!");
if(promo[args[1]].count < 1) return message.send("📛| Данный промокод закончился!");
promo[args[1]].count -= 1;
promo[args[1]].accs.push(i.uid)
i.money += promo[args[1]].sym;
message.send("📄Вы успешно активировали промокод, на ваш баланс зачислено "+sp(promo[args[1]].sym)+"$");
});
cmd.on(/^(?:send|рассылка)\s([^]+)$/i, async (message, bot) => { 
	if(i.post < 3) return message.send("📛| Не хватает прав!");
var ft = 0;
var txk = args[1].replace(/(~)/ig, " ")
while(ft < users.length) { 
vk.api.messages.send({user_id: users[ft].id, message: "📩 => "+txk})
ft++;
};
message.send("📨Рассылка выполнена успешно!");
});

cmd.on(/^(?:psend|прассылка)\s([^]+)\s([^]+)$/i, async (message, bot) => { 
	if(i.post < 3) return message.send("📛| Не хватает прав!");
var fu = 0;
var txc = args[2].replace(/(~)/ig, " ")
while(fu < users.length) { 
vk.api.messages.send({user_id: users[fu].id, message: "📣 => "+txc, attachment: args[1]})
fu++;
};
message.send("📱ПРассылка выполнена успешно!");
		});

cmd.on(/^(?:setwin|)\s([^]+)\s([0-9]+)$/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| доступ закрыт!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
if(args[2] < 0 || args[2] > 100) return message.send("📛| Шанс не может быть меньше 0 и больше 100!");
users[args[1]].win = Number(args[2]);
message.send("🍃Вы выдали новый шанс победы игроку!");
});

cmd.on(/^(?:setpost|устправа)\s([^]+)\s([0-9]+)$/i, async (message, bot) => {
if(i.post < 4) return message.send("📛| доступ закрыт!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
if(args[2] < 0 || args[2] > 4) return message.send("📛| Права не могут быть меньше (0) и больше (4)!");
users[args[1]].post = Number(args[2]);
message.send("🐼Вы выдали новые права игроку!");
});

cmd.on(/^(?:ban|бан)\s([0-9]+)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("??| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
var stime = args[2]*3600;
if(stime < 1) return message.send("📛| Введите адекватное время!");
heid.ban_acc = stime;
message.send("👿Вы успешно забанили игрока на: "+timer(stime));
vk.api.messages.send({user_id: heid.id, message:"😢Вас забанили на: "+timer(stime)+"\n📖Причина: "+args[3]+"\n———\n❔По вопросам писать ему: https://vk.com/id442673224"});
});

cmd.on(/^(?:unban|разбан)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_acc == 0) return message.send("📛| Игрок и так не в бане!");
heid.ban_acc = 0;
message.send("😇Вы успешно разабанили игрока!");
vk.api.messages.send({user_id: heid.id, message:"😇Вас разабанили!\n🔹Больше не нарушайте правила."});
});

cmd.on(/^(?:rban|рбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_rep == true) return message.send("📛| Репорт игрока и так в бане!");
heid.ban_rep = true;
message.send("😯Вы успешно забанили репорт игроку!");
vk.api.messages.send({user_id: heid.id, message:"😐Вам запретили отправлять репорты!\n📖Причина: "+args[2]+"\n———\n❔По вопросам писать ему: https://vk.com/id442673224"});
});

cmd.on(/^(?:tban|топбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_top == true) return message.send("📛| Топ игрока и так в бане!");
heid.ban_top = true;
message.send("🐍Вы успешно забанили топ игроку!");
vk.api.messages.send({user_id: heid.id, message:"📇Вам закрыли доступ к топу!\n📖Причина: "+args[2]+"\n———\n❔По вопросам писать ему: https://vk.com/id442673224"});
});

cmd.on(/^(?:tunban|топразбан)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_top == false) return message.send("📛| Игрок и так не в бане!");
heid.ban_top = false;
message.send("🐻Вы успешно разбанили топ игроку!");
vk.api.messages.send({user_id: heid.id, message:"🐪Вам разбанили топ!\n🔹Больше не нарушайте правила."});
});

cmd.on(/^(?:runban|рразбан)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_rep == false) return message.send("📛| Игрок и так не в бане!");
heid.ban_rep = false;
message.send("😇Вы успешно разбанили репорт игроку!");
vk.api.messages.send({user_id: heid.id, message:"😅Вам разбанили репорт!\n🔹Больше не нарушайте правила."});
});

cmd.on(/^(?:pban|пбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_pay == true) return message.send("📛| Передача игрока и так в бане!");
heid.ban_pay = true;
message.send("😒Вы успешно забанили передачу игроку!");
vk.api.messages.send({user_id: heid.id, message:"😲Вам запретили передавать валюту!\n📖Причина: "+args[2]+"\n———\n❔По вопросам писать ему: https://vk.com/id442673224"});
});

cmd.on(/^(?:punban)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.ban_pay == false) return message.send("📛| Игрок и так не в бане!");
heid.ban_pay = false;
message.send("😎Вы успешно разбанили передачу игроку!");
vk.api.messages.send({user_id: heid.id, message:"😺Вам разбанили передачу!\n🔹Больше не нарушайте правила."});
});

cmd.on(/^(?:plim)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.limit_pay == true) return message.send("📛| Передача игрока и так ограничена!");
heid.limit_pay = true;
message.send("🙉Вы успешно ограничили передачу игроку!");
vk.api.messages.send({user_id: heid.id, message:"😿Вам ограничили передачу валюты!\n———\n❔По вопросам писать ему: https://vk.com/id442673224"});
});

cmd.on(/^(?:punlim)\s([^]+)$/i, async (message, bot) => {
if(i.post < 2) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var heid = users[args[1]];
if(heid.limit_pay == false) return message.send("📛| Передача игрока и так безгранична");
heid.limit_pay = false;
message.send("👼Вы успешно обезграничили передачу игроку!");
vk.api.messages.send({user_id: heid.id, message:"😺Вам выдали безграничную передачу валюты!\n🔹Удачи!"});
});

cmd.on(/^(?:репорт)\s([^]+)$/i, async (message, bot) => {
if(i.ban_rep == true) return message.send("📛| Вам запретили писать репорты!");
vk.api.messages.send({user_id: 522736453, message: "ID игрока: "+i.uid+"\n---\n🔸Репорт: "+args[1]+"\n———\n🔹Для ответа пишите: ответ <id игрока> <ответ>"});
message.send("👉Вы успешно отправили репорт!");
});

cmd.on(/^(?:ответ)\s?([0-9]+)?\s([^]+)?/i, async (message, bot) => {
if(i.post < 3) return message.send("📛| Не хватает прав!");
if(!users[args[1]]) return message.send("📛| Такого пользователя не существует!");
var upser = users[args[1]];
vk.api.messages.send({user_id: upser.id, message: "👉Вам ответили на ваш репорт!\n🔹Ответ: "+args[2]});
message.send("👉Вы успешно ответили игроку!");
});

cmd.on(/^(?:вода)\s([0-9]+)$/i, async (message, bot) => {
if(i.home == false) return message.send("📛| У вас нет дома!");
args[1] = Number(args[1]);
if(args[1] < 0 || args[1] > 100) return message.send("📛| Введите число от 0 до 100!");
i.water = args[1];
message.send("💧Вы установили воду на "+i.water+"ед/чел!");
});

cmd.on(/^(?:энергия)\s([0-9]+)$/i, async (message, bot) => {
if(i.home == false) return message.send("📛| У вас нет дома!");
args[1] = Number(args[1]);
if(args[1] < 0 || args[1] > 100) return message.send("📛| Введите число от 0 до 100!");
i.electro = args[1];
message.send("⚡Вы установили электроэнергию на "+i.electro+"ед/чел!");
});

cmd.on(/^(?:передать)\s([^]+)\s([^]+)$/i, async (message, bot) => {
if(i.post > 1) return message.send(`📛| Вы администратор, вам запрещено передавать деньги.`)
if(i.home == false) return message.send("📛| У вас нет дома!");
if(i.ban_pay == true) return message.send("📛| Вам заблокирована передача!");
if(!users[args[1]]) return message.send("📛| Такого игрока не существует!");
var pys = users[args[1]];
var sym = repl(args[2]);
if(!Number(sym)) return message.send("📛| Ставка должна быть числовой!");
sym = Number(fix(sym));
if(sym < 1) return message.send("📛| Сумма должна быть больше 0!");
if(sym > 10000000000 && i.limit_pay == true && i.full == false) return message.send("📛| Лимит на передачу 10.000.000.000$");
if(i.money < sym) return message.send(" на вашем балансе нет столько денег!");
i.money -= sym;
pys.money += sym;
message.send("♻Вы успешно передали валюту игроку!");
vk.api.messages.send({user_id: pys.id, message: "♻Компания: "+i.name+" передала вам: "+sp(sym)+"$"});
});

cmd.on(/^(?:кланы|clans)$/i, async (message, bot) => {
		if(!clans) return message.send(`⚠ ➣  Кланов нет.`);
		let text = '';
		text += `~ 💥| Кланы  |💥 ~\n`;
		for (let id in clans) {
			let user = users[clans[id].owner];
			text += `
             💎 ➣ Название: ${clans[id].nam}
             🆔 ➣  Номер: ${clans[id].number}
             💰 ➣  Цена входа: ${utils.sp(clans[id].price)}💰
             💥 ➣  Баланс клана: ${utils.sp(clans[id].balance)}💰
             🥇 ➣  Создал:  [id${users[clans[id].owner].id}|${user.name}]
             ~~~~~~~~~~~~~~
             `;
		}
		return message.send(text);
	});


cmd.on(/^(?:Клан создать|Создать клан)\s(.*)$/i, async (message, bot) => {
    if(!args[1]) return bot(`введите название для клана!`); 
    let zaprets1 = args[1].toLowerCase();
    var zapret = /(👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`[❌] » Вам отказано в создание клана т.к там имеются смайлики/маты и т.п`);
}
	let text = args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.reply(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
   }else{
     let user = i.id;
 	let nam = args[1];
     let clanid = i.clanid;

 	if(clans[clanid]) return message.send(`[⚠] »  У вас уже создан клан или Вы уже состоите в другом клане.`);
 	if(!clans[clanid]){

     botinfo.number += 1;
 	clans[botinfo.number] = {
 		owner: i.uid,
 		users: {},
 		number: botinfo.number,
 		nam: nam,
 		balance: 0,
 		smile: "👤",
 		open: 1,
 	 	price: 100,
             exs: 0,
             people: 0,
             invite: {}
 	}
 	i.clanid = botinfo.number;
 	clans[botinfo.number].users[i.uid] = {
 		                    names: i.name,
        	        		level: 2
    }

 	return message.send(`
 		${clans[clanid].smile} [ ${nam} ] ${clans[clanid].smile}

 		[${clans[clanid].smile}] >> Я успешно создал клан под названием - ${nam}
 		[${clans[clanid].smile}] >> Создатель клана - vk.com/id${i.id}
 		[${clans[clanid].smile}] >> Логотип клана: ${clans[clanid].smile}
 		[${clans[clanid].smile}] >> Тип клана: открытый.

 		[${clans[clanid].smile}] >> Команды клана: Кпомощь
 		`);
   }
   }
});

cmd.on(/^(?:принять игрока)\s?([0-9]+)?$/i, async (message, args) => {
	 let user = users.find(x=> x.uid === Number(args[1]));
        	if(!args[1]) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Введите ID пользователя.`);
		if(!i.clanid) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Вы не состоите в клане`);
		let clanid = i.clanid;
             let id = Number(args[1]);
		if(clans[clanid].people >= 30) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Максимальное кол-во участников в клане: 30`);
			
		if(!clans[clanid].invites[id]) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Этот человек не подавал заявку на вступление.`);
		if(clans[clanid].users[i.uid].level === 0) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Принимать в клан может только глава клана и зам.клана`);
		if(users[id].clanid) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Данный человек уже вступил в клан`);
		if(users[id].balance < clans[clanid].price) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ У пользователя не хватает денег`);
		users[id].money -= clans[clanid].price;
		clans[clanid].balance += clans[clanid].price;
		users[id].clanid = i.clanid;
		if(!clans[clanid].users[id])
		clans[clanid].users[id] = { 
              tag: `${users[id].name}`,
              level: 0
             };
		 vk.api.call('messages.send', { 
               user_id: users[id].id, 
               message: `[😎] » @id${i.id} (${i.name}), принял вас в клан [${clans[clanid].name}], команды клана "Кпомощь"` 
 }); 
            delete clans[clanid].invites[id];
		return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ @id${users[id].id}(${users[id].name}) был(а) принят(а) в клан по заявке.`);
	});
	
	cmd.on(/^(?:заявки)$/i, async (message, args) => {
		let user = i;
		if (!user.clanid) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Вы не состоите в клане`);
		let id = i.clanid;
		let text = `🔥 Заявки на вступление 🔥\n`;
		if (clans[id].users[i.uid].level === 0) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Заявки может просматривать только Глава клана и Зам.клана`);
		for(ids in clans[id].invites){
			text += `ID: ${ids} | @id${ids}(${users[ids].name}) - ждет одобрения\n`;
		}
		return message.send(text);
	});



cmd.on(/^(?:Кзаявка|Заявка)\s?([0-9]+)?/i, async (message, args) => {
		let user = i;
		let id = Number(args[1]);
	let idclan = args[1]; 
	if(i.clanid != false) return message.send(`Вы уже состоите в клане.`);
	if(!args[1]) return message.send(`Вы не указали ID клана.`);
	 
	 
	if(!clans[idclan]) return message.send(`Данного клана не существует.`);
			if(clans[id].people >= 30) return message.send(`🎉 ➣ @id${i.id}(${i.name}),\n✨ ➣ Максимальное кол-во участников в клане: 30`);
			if(!clans[id].invites)
				clans[id].invites = {}
				
			if(!clans[id].invites[i.uid])
				clans[id].invites[i.uid] = { i: true };

        return message.send(`[😎] » Вы отправили заявку на вступление в клан`);
	});

cmd.on(/^(?:покинуть)$/i, async (message, bot) => {
	
	let user = i;
	let idclan = i.clanid;
	if(!clans[idclan]) return message.send(`Вы не в клане.`); 
    
	if(i.clanid == false) return message.send(`Вы не состоите в клане.`); 
	if(clans[idclan].users[i.uid].level == 2) return message.send(`Создатель не может выйти из клана.`);
	user.clanid = false;
	delete clans[idclan].users[i.uid];
    return message.send(`Вы добровольно покинули клан.`);
});

cmd.on(/^(?:Коткрыть)$/i, async (message, bot) => {
	
	let user = i;
	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`); 
	if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель  клана.`);
    if(clans[clanid].open == true) return message.send(`Клан уже открытый.`)
    clans[clanid].open = 1;
	return message.send(`Вы открыли клан. Цена за вход: ${clans[clanid].price}$`);
});


cmd.on(/^(?:Кзакрыть)$/i, async (message, bot) => {

	let user = i;
	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
	if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель  клана.`);
    if(clans[clanid].open == false) return message.send(`Клан уже закрытый.`)
    clans[clanid].open = 0;
	return message.send(`Вы закрыли клан. Набор участников могут проводить только зам/создатель :3`);
});


cmd.on(/^(?:Квход)\s([0-9]+)$/i, async (message, bot) => {

	let user = i;
	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
	if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель  клана.`);
    if(!args[1]) return message.send(`Укажите сумму для входа в клан.`);
    if(args[1] < 100) return message.send(`Сумма для входа в клан не должна быть < 100 Coins`);
    if(args[1] > 50000) return message.send(`Сумма для входа в клан не должна быть > 50000 Coins`);
    clans[clanid].price = Number(args[1]);
    return message.send(`Вы установили цену за вход в размере ${Number(args[1])} Coins`);
});


cmd.on(/^(?:Вступить)\s([0-9]+)$/i, async (message, bot) => {
    let user = i;
	let idclan = args[1]; 
	if(i.clanid != false) return message.send(`Вы уже состоите в клане.`);
	if(!args[1]) return message.send(`Вы не указали ID клана.`);
	 
	 
	if(!clans[idclan]) return message.send(`Данного клана не существует.`);
	if(clans[idclan].open == 0) return message.send(`Данный клан закрыт. В него нельзя войти. Подайте заявку "Заявка ${args[1]}" `);
	if(clans[idclan].open == 1){
		if(i.money < clans[idclan].price) return message.send(`Вход в данный клан стоит: ${utils.sp(clans[idclan].price)} Coins`);
		i.money -= Number(clans[idclan].price);
		clans[idclan].price += clans[idclan].price;
		i.clanid = Number(args[1]);
		if(!clans[idclan].users[i]){
        	        	clans[idclan].users[i.uid] = {
        	        	tag: `${i.name}`,
                           id: i.id,	
                           level: 0
       	        	}
        }
        return message.send(`Вы вошли в клан за ${utils.sp(clans[idclan].price)} Coins \n\n Команды клана - Кпомощь`, {attachment: 'photo512809754_456239056'});
	}
});


cmd.on(/^(?:Кназвание)\s([^]+)$/i, async (message, bot) => {
 	if(!args[1]) return message.send(`⚠ »  Укажите название для клана.`);
             let zaprets1 = args[1].toLowerCase();
    var zapret = /(🥃|👨‍|🚀️|👩‍⚖️|👨‍⚖️|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|👚|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|��|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`☒ -> Отказ смены названия!

    	⚠ >> Причина:
    	Прости, но нельзя использовать символы и маты при смене названия клана.`);
} 	
                  let clanid = i.clanid;
			if(!clans[clanid]) return message.send(`У вас нет клана.`);
			if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель  клана.`);
		      if(clans[clanid].balance < 10000) return message.send(`На балансе клана нету 10.000 Coins `);
		   	clans[clanid].balance -= 10000;

			if(clans[clanid]){
				if(i.uid != clans[clanid].owner) return message.send(`Изменить название клана может только Создатель!`);
				if(i.uid == clans[clanid].owner){
					clans[clanid].nam = args[1];
					return message.send(`Вы успешно изменили название клана за 10.000 Коинов!`);
				}
			}
});

cmd.on(/^(?:Клого)$/i, async (message, bot) => {
	let user = i;
	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
	if(clans[clanid].users[i.uid].level < 1) return message.send(`Вы не создатель/заместитель клана.`);
    if(clans[clanid].balance < 10000) return message.send(`На балансе клана нету 10.000 Коинов`);
    clans[clanid].balance -= 10000;

	if(clans[clanid]){
			let smile = utils.pick(["📺","💥","💣","💎","♻","🏆","🔥","🌚","👻","💀","🎄","🎃","🚀","🎱","🍼","🍺","🐔","🐉","🌈","🌝"])
			clans[clanid].smile = smile;
			return message.send(`Вы успешно изменили логотип клана за 10.000 Коинов!`);
	}
});

 
cmd.on(/^(?:Клан)$/i, async (message, bot) => {

let user = i;
	let clanid = i.clanid;
if(!clans[clanid]) return message.reply(`У вас нет клана.`);

let text = ``;
let tipe = ``;
text += `[🏆] | Участники Клана: \n\n`;

text += `[${clans[clanid].smile}] >> [id${users[clans[clanid].owner].id}|${users[clans[clanid].owner].name}] | Создатель.\n\n`;
 	for(let id in clans[clanid].users) {
             let people = clans[clanid].users[id];   
        	 if(clans[clanid].users[id].level == 1) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id].id}|${people.tag}] | Заместитель.\n\n`;
        	 if(clans[clanid].users[id].level == 0) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id].id}|${people.tag}] | Участник.\n`;
        }

 function indexOfByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return i;
            }
        }
        return null;
    }
    
    var tops = []
    for (let i in clans) {
        tops.push({
            id: i,
            balance: clans[i].balance
        })
    }
    tops.sort(function(a, b) {
        if (b.balance > a.balance) return 1
        if (b.balance < a.balance) return -1
        return 0
    })
   
    var inTop = indexOfByKey(tops, 'id', i);
    inTop++; 


if(clans[clanid].open == true) tipe += `Открытый.`
if(clans[clanid].open == false) tipe += `Закрытый.`
if(clans[clanid]){
    let exs = 0;
    let convert = 0;


	return message.reply(`
		[${clans[clanid].smile}]: ~ ${clans[clanid].nam} ~ :[${clans[clanid].smile}]

 		[${clans[clanid].smile}] »  Создатель: [id${users[clans[clanid].owner].id}|${users[clans[clanid].owner].name}]
 		[${clans[clanid].smile}] »  Номер клана: ${clans[clanid].number}
 		[${clans[clanid].smile}] »  Логотип клана: ${clans[clanid].smile} 
 		[${clans[clanid].smile}] »  Тип клана: ${tipe}
 		[${clans[clanid].smile}] »  Цена за вход: ${clans[clanid].price} Coins

        [🔥] »  Баланс клана: ${clans[clanid].balance}

 		${text}
		`);
	} 
});

cmd.on(/^(?:Кработать)$/i, async (message, bot) => {
   	let clanid = i.clanid;
 if(i.kwork != 0) return message.send(`[⛔] » Вы уже работали, подождите ${timer(i.kwork)} и снова за работу`);
i.kwork = 3600;
if(clanid == false) return bot(`у вас нет клана.`);
if(!clans[clanid]) return bot(`у вас нет клана.`);
if(clans[clanid].users[i.uid].level == 0){
       const count = rand(10000,70000);

      clans[clanid].balance += count;

    return message.send(`[😎] » [id${i.id}|${i.name}], Вы отработали на клан ${utils.sp(count)} [${utils.rn(count)}]`);
}
if(clans[clanid].users[i.uid].level == 1){
       const count = rand(40000,80000);

      clans[clanid].balance += count;

     return message.send(`[😎] » [id${i.id}|${i.name}], Вы отработали на клан ${utils.sp(count)} [${utils.rn(count)}]`);
}
if(clans[clanid].users[i.uid].level == 2){
   const count = rand(100000,700000);

      clans[clanid].balance += count;

   return message.send(`[😎] » [id${i.id}|${i.name}], Вы отработали на клан ${utils.sp(count)} [${utils.rn(count)}]`);
}
});

cmd.on(/^(?:Кпомощь)$/i, async (message, bot) => {

	let user = i;
 	let clanid = i.clanid;
 	if(!clans[clanid]) return message.send(`У вас нет клана.`);

if(clans[clanid].users[i.uid].level < 1){
	return message.send(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Кбанк - баланс клана.
             ${clans[clanid].smile} КРаботать - Отработать на ваш клан.

		${clans[clanid].smile} Покинуть - Выйти из клана
		`);
}
if(clans[clanid].users[i.uid].level == 1){
	return message.send(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик ID(user'a) - выгнать из клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КБанк - баланс клана.
             ${clans[clanid].smile} КРаботать - Отработать на ваш клан.


		${clans[clanid].smile} Покинуть - Выйти из клана 
		`);
}
if(clans[clanid].users[i.uid].level == 2){
	return message.send(`
		${clans[clanid].smile} - Команды клана -   ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик (ID Пользователя) - выгнать из клана.
		${clans[clanid].smile} Кмодер (ID Пользователя) - назначить заместителем.
		${clans[clanid].smile} КУдалить (ID Пользователя) - снять заместителя.
		${clans[clanid].smile} КНазвание (name) - изменить название клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.
             ${clans[clanid].smile} Принять игрока [ид] - принять игрока в клан.
             ${clans[clanid].smile} Заявки - Список заявок.

		${clans[clanid].smile} КОткрыть - Открыть клан.
		${clans[clanid].smile} Квход - Установить цену за вход.
		${clans[clanid].smile} КЗакрыть - Закрыть клан.

		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КСнять <сумма> - снять Coins из банка клана.
		${clans[clanid].smile} КБанк - баланс клана.

		${clans[clanid].smile} Clanwar [id клана] [сумма] - Атаковать клан!
		`);
}
});

cmd.on(/^(?:Кбанк)$/i, async (message, bot) => {

	let user = i;
 	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
	return message.send(`Баланс Вашего клана: ${utils.sp(clans[clanid].balance)} Coins`);

});



cmd.on(/^(?:Кположить)\s([0-9]+)$/i, async (message, bot) => {
	if(i.post > 1) return message.send(`Администраторы не могут пополнять баланс клана.`)
     if(!args[1]) return message.send(`Укажите сумму вклада.`);
 	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
       if(args[1] < args[1]) return message.send(`[Error] » На вашем балансе недостаточно денег`);
      if(args[1] > 100000000000) return message.send(`[⛔] » Максимальная сумма вклада ${utils.sp(100000000000)} [${utils.rn(10000000000)}]`);
	i.money -= Number(args[1]);
	clans[clanid].balance += Number(args[1]);
	return message.send(`Вы успешно положили ${utils.sp(args[1])} Coins в банк клана.`);
});


cmd.on(/^(?:Кснять)\s([0-9]+)$/i, async (message, bot) => {
   if(!args[1]) return message.send(`Укажите сумму снятия.`);
 	let clanid = i.clanid;
	if(!clans[clanid]) return message.send(`У вас нет клана.`);
	if(clans[clanid].users[i.uid].level < 2) return message.send(`Снимать деньги может только создатель клана.`);
    
	if(args[1] > clans[clanid].balance) return message.send(`Данной суммы нет в банке клана.`);
	if(args[1] <= 0) return message.send(`Сумма не должна быть меньше или равно 0 Coins`);
	i.money += Number(args[1]);
	clans[clanid].balance -= Number(args[1]);
	return message.send(`[${clans[clanid].smile}] »  Вы успешно сняли ${utils.sp(args[1])} Coins с банка клана.`);
});

cmd.on(/^(?:clanwar)\s([0-9]+)\s([^\s	].*)$/i, async (message, bot) => {
	 var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000").replace(/(м|m)/ig, '000000'));
 	let clanid = i.clanid;
		if(!args[1]) return bot(`Укажите ID клана, который хотите атаковать.`);
		if(!args[2]) return bot(`Укажите ставку.`);
		let id = Number(args[1]); 
		let amount = parserInt(args[2]);
		if(!Number(amount)) return bot(`укажите корректно ставку.`);
		if(amount < 1000) return bot(`минимальная сумма для атаки 1.000💰`);
		if (clans[clanid].users[i.uid].level < 1) return bot(`вы не ~создатель/заместитель~  клана.`);
		if(id == clanid) return bot(`нельзя нападать на свой клан.`);
		if(amount > clans[clanid].balance) return bot(`на счету вашего клана не хватает 💰`);
		if(amount > clans[id].balance) return bot(`на счету клана не хватает 💰`); 
		if (clanid == false) return bot(`у вас нет клана.`);
		if (!clans[clanid]) return bot(`у вас нет клана.`);
		if (!clans[id]) return bot(`такого клана нет.`);

	if(i.clanwar != 0) return bot(`в ближайшие ${timer(i.clanwar)}, Вы сможете ещё раз атаковать клан!`);

    i.clanwar = 3600;

		let win = rand(1,2);
		if(win == 1){
			clans[id].balance += amount;
			clans[clanid].balance -= amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан [${clans[clanid].nam}] напал на [${clans[id].nam}]\n[🏆] >> Победу одержал клан: [${clans[id].nam}]\n💰 >> Выигрыш: ${utils.sp(amount)} 💰`);
		}else{
			clans[id].balance -= amount;
			clans[clanid].balance += amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан [${clans[clanid].nam}] напал на [${clans[id].nam}]\n[🏆] >> Победу одержал клан: [${clans[clanid].nam}]\n💰 >> Выигрыш: ${utils.sp(amount)} 💰`);
}
	});	

cmd.on(/^(?:Кмодер)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === i.uid) return bot(`неверный ID`);

 	let clanid = user.clanid;
 	if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель/заместитель клана.`);
        	        
    if(args[4]) {
        var domain = args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: args[4]
        })
        .then((res) => {

        	        if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);
              	    if(user.clanid != i.clanid) return message.send(`Юзер уже состоит в другом клане.`);
        	       

        	        clans[clanid].users[user.uid].level = 1;
        	        return message.send(`vk.com/id${user.id} был назначен заместителем в клане.`); 

        })
        return;
    }else{

        if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);
        if(user.clanid != i.clanid) return message.send(`Юзер уже состоит в другом клане.`);
          

        	clans[clanid].users[user.uid].level = 1;
        	return message.send(`vk.com/id${user.id} был назначен заместителем в клане.`); 
    }
});

cmd.on(/^(?:kkick|Ккик|Клан кик)\s([0-9]+)$/i, async (message, bot) => {
		let user = i;
		let clanid = user.clanid;
			if(!args[1]) return message.send(`[👤] » @id${i.id}(${i.name}),\n [Error] » ID не указан, либо указан неверно.`);
			if(!clans[clanid].users[args[1]]) return message.send(`${clans[clanid].smile} ➣  Этого юзера нет в Вашем клане!`);
			if(!users[args[1]]) return message.send(`[👤] » @id${i.id}(${i.name}),\n[Error] » Данного игрока нету в боте.`);
			if(users[args[1]].clanid != i.clanid) return message.send(`[Error] » Игрок находится в другом клане`);
			if (clans[clanid].users[margs[1]].level == 2) return message.send(`[${clans[clanid].smile}] » Нельзя выгнать создателя.`);
			if (users[args[1]].clanid == false) return message.send(`[Error] » Игрок не состоит в клане.`);
			delete clans[clanid].users[args[1]];
			users[args[1]].clanid = false;
			return message.send(`[👤] » @id${i.id}(${i.name}),\n[Success] » vk.com/id${users[args[1]].id} был изгнан из клана.`);
});

cmd.on(/^(?:Кудалить)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === i.uid) return bot(`неверный ID`);


 	let clanid = i.clanid;
 	if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[i.uid].level < 2) return message.send(`Вы не создатель/заместитель клана!`);
        	        
    if(args[4]) {
        var domain = args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: args[4]
        })
        .then((res) => {

              	    if(user.clanid != users[i.uid].clanid) return message.send(`Юзер уже состоит в другом клане.`);
         			if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);
        	        
        	        clans[clanid].users[user.uid].level = 0;
        	        return message.send(`vk.com/id${user.id} был понижен до "участника" в клане.`);
        })
        return;
    }else{

        if(users[user.uid].clanid != users[i].clanid) return message.send(`Юзер уже состоит в другом клане.`);
         if(!clans[clanid]) return message.send(`этот человек не состоит в клане.`);

        	clans[clanid].users[user.uid].level = 0;
        	return message.send(`vk.com/id${user.id} был понижен до "участника" в клане.`);      
    }
});

setInterval(function () {
		if(i.post > 1) {
		i.ban_top = true;
	}
}, 60000);

///////////////||ДУЭЛИ И СИСТЕМА ОРУЖИЙ||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

cmd.on(/^(?:сдаюсь)$/i, async (message, args, bot) => {
 
	if(i.duel == false) return message.send(`🔫 ➾ Вам никто не бросал вызов/Вы не вызывали на стрелу никого.`);
	
	vk.api.call("messages.send", {
		peer_id: users[i.duel].id,
		random_id: users[i.duel].id,
		message: `
		🔫 ➾ Игрок не согласился на стрелу.
		`
	});	

	i.duel_summ = false;
	users[i.duel].duel_summ = false;
	users[i.duel].duel = false;
	users[i.duel].nachal = false;
	i.duel = false;
	i.nachal = false; 

 

	return message.send(`
		🔫 ➾ Вы отменили стрелу.
	`);
});

cmd.on(/^(?:стрела)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {

 let user = users.find(x => x.uid === Number(message.args[1])); 
	let id = message.args[1];
	if(users[id].gun_name == false) return message.send(`🔫 ➾ У игрока нет оружия. ('Оружейный Кейс')`)
	if(message.user.gun_name == false)	 return message.send(`🔫 ➾ У вас нет оружия. ('Оружейный кейс')`)

	if(id == message.user.uid) return message.send(`🔫 ➾ Вы указали свой ID`)
	if(!message.args[2] || !id || message.args[2] < 1) return message.send(`💸 ➾ Пример команды: 'Стрела ID СТАВКА'`)
	if(message.user.balance < message.args[2]) return message.send(`💸 ➾ Ваша ставка больше вашего баланса`)
	if(!users[id]) return message.send(`🔫 ➾ Такого игрока нет!`)
	if(users[id].balance < message.args[2]) return message.send(`💸 ➾ У игрока баланс меньше вашей ставки`)
	if(message.user.duel != false) return message.send(`🔫 ➾ Вы уже назначали стрелу игроку ${users[message.user.duel].tag}\n🎌 ➾ Для отмены напишите: 'Сдаюсь'`);
	if(users[id].duel != false) return message.send(`🔫 ➾ Вы уже назначали стрелу игроку ${users[message.user.duel].tag}\n&#127987; ➾ Для отмены напишите: 'Сдаюсь'`);
	message.user.duel_summ = Number(message.args[2]);
	users[id].duel_summ = Number(message.args[2]);
	message.user.duel = Number(id);
	users[id].duel = Number(message.user.uid);
	message.user.nachal = message.user.uid;
	users[id].nachal =  message.user.uid;

	vk.api.call("messages.send", {
		peer_id: users[message.args[1]].id,
		random_id: users[message.args[1]].id,
		message: `
		🔫 ➾ Игрок @id${message.user.id}(${message.user.tag}) назначил вам стрелу
		💸 ➾ Ставка ${message.args[2]}$

		🔫 ➾ Для принятия напишите: 'Принять'
		🎌 ➾ Для отмены напишите: 'Сдаюсь'
		`
});	

	return message.send(`
		🔫 ➾ Вы назначили стрелу игроку @id${users[id].id}(${users[id].tag})
		💸 ➾ Ставка ${message.args[2]}$
		🔫 ➾ Ожидайте принятия боя игроком.
		
		&#127987; ➾ Для отмены напишите: 'Сдаюсь'
	`);
});


cmd.on(/^(?:принять)$/i, async (message, args, bot) => {

	if(message.user.duel == false) return message.send(`🔫 ➾ Вам не назначали стрелу!`); 
	if(message.user.balance < message.user.balance) return message.send(`💸 ➾ Ставка больше вашего баланса`)
	if(users[message.user.duel].balance < message.args[2]) return message.send(`💸 ➾ У противника баланс меньше ставки`) 
	if(message.user.uid == message.user.nachal) return message.send(`💸 ➾ Принять стрелу должен соперник!`);

	let sum = message.user.duel_summ;  
	let us2 = message.user.duel;
	let one_hp = 100; //кто принимает
	let two_hp = 100; //кто атакует
	let text = '';

	//1 этап
	one_hp -= users[message.user.duel].uron;
	two_hp -= message.user.uron;
	text += `
	- - 1&#8419; этап - - 
	🔸 ➾ ${message.user.tag} | -${users[message.user.duel].uron}% | ${one_hp}❤
 	🔹 ➾ ${users[message.user.duel].tag} | -${message.user.uron}% | ${two_hp}❤ 
	`;
	// 2 этап
	one_hp -= users[message.user.duel].uron;
	two_hp -= message.user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// победил второй
					message.user.balance -= Number(message.user.duel_summ);
					users[message.user.duel].balance += Number(message.user.duel_summ);

					message.user.game.strela_loose += 1; 
					users[us2].game.strela_win += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${users[us2].id}(${users[us2].tag})
					🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | 0❤
				 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | ${two_hp}❤ 
					`;
					vk.api.call("messages.send", {
						peer_id: message.user.id,
						random_id: message.user.id,
						message: text
						
					});	

					vk.api.call("messages.send", {
						peer_id: users[us2].id,
						random_id: users[us2].id,
						message: text
					});	
					users[us2].duel_summ = false;
					users[us2].duel = false; 
					message.user.duel = false;
					message.user.duel_summ = false;
					users[us2].nachal = false;
					message.user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
				if(two_hp <= 0){
					// победил первый
					message.user.balance += Number(message.user.duel_summ);
					users[us2].balance -= Number(message.user.duel_summ);

					message.user.game.strela_win += 1;  
					users[us2].game.strela_loose += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${message.user.id}(${message.user.tag})
					🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | ${one_hp}❤
				 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | 0❤ 
					`;
					vk.api.call("messages.send", {
						peer_id: message.user.id,
						random_id: message.user.id,
						message: text
						
					});	

					vk.api.call("messages.send", {
						peer_id: users[us2].id,
						random_id: users[us2].id,
						message: text
					});	
					users[us2].duel = false;
					users[us2].duel_summ = false;
					message.user.duel = false;
					message.user.duel_summ = false;
					users[us2].nachal = false;
					message.user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
			}
		}
			if(two_hp <= 0){
				// победил первый
				message.user.balance += Number(message.user.duel_summ);
				users[us2].balance -= Number(message.user.duel_summ);

				message.user.game.strela_win += 1;  
				users[us2].game.strela_loose += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${message.user.id}(${message.user.tag})
				🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | ${one_hp}❤
			 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | 0❤ 
				`;
				vk.api.call("messages.send", {
					peer_id: message.user.id,
					random_id: message.user.id,
					message: text
					
				});	

				vk.api.call("messages.send", {
					peer_id: users[us2].id,
					random_id: users[us2].id,
					message: text
				});	
				users[us2].duel = false;
				users[us2].duel_summ = false;
				message.user.duel = false;
				message.user.duel_summ = false;
				users[us2].nachal = false;
				message.user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
			if(one_hp <= 0){
				// победил второй
				message.user.balance -= Number(message.user.duel_summ);
				users[message.user.duel].balance += Number(message.user.duel_summ);

				message.user.game.strela_loose += 1; 
				users[us2].game.strela_win += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${users[us2].id}(${users[us2].tag})
				🔸 ➾ ${message.user.tag} | -${ausers[us2].uron}% | 0❤
			 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | ${two_hp}❤ 
				`;
				vk.api.call("messages.send", {
					peer_id: message.user.id,
					random_id: message.user.id,
					message: text
					
				});	

				vk.api.call("messages.send", {
					peer_id: users[us2].id,
					random_id: users[us2].id,
					message: text
			    });	
				users[us2].duel_summ = false;
				users[us2].duel = false; 
				message.user.duel = false;
				message.user.duel_summ = false;
				users[us2].nachal = false;
				message.user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			} 
	
	}else{
		text += `
		- - 2&#8419; этап - - 
		🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | ${one_hp}❤
	 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | ${two_hp}❤ 
		`;
	} 
	// 3 этап
	one_hp -= users[us2].uron;
	two_hp -= message.user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// победил второй
					message.user.balance -= Number(message.user.duel_summ);
					users[us2].balance += Number(message.user.duel_summ);

					message.user.game.strela_loose += 1; 
					users[us2].game.strela_win += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${users[us2].id}(${users[us2].tag})
					🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | 0❤
				 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | ${two_hp}❤ 
					`;
					vk.api.call("messages.send", {
						peer_id: message.user.id,
						random_id: message.user.id,
						message: text
						
					});	

					vk.api.call("messages.send", {
						peer_id: users[us2].id,
						random_id: users[us2].id,
						message: text
					});	
					users[us2].duel = false;
					users[us2].duel_summ = false;
					message.user.duel = false;
					message.user.duel_summ = false;
					users[us2].nachal = false;
					message.user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
				if(two_hp <= 0){
					// победил первый
					message.user.balance += Number(message.user.duel_summ);
					users[us2].balance -= Number(message.user.duel_summ);

					message.user.game.strela_win += 1;
					users[us2].game.strela_loose += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${message.user.id}(${message.user.tag})
					🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | ${one_hp}❤
				 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | 0❤ 
					`;
					vk.api.call("messages.send", {
						peer_id: message.user.id,
						random_id: message.user.id,
						message: text
						
					});	

					vk.api.call("messages.send", {
						peer_id: users[us2].id,
						random_id: users[us2].id,
						message: text
					});	
					users[us2].duel = false;
					users[us2].duel_summ = false;
					message.user.duel = false;
					message.user.duel_summ = false;
					users[us2].nachal = false;
					message.user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
			}
		}
			if(two_hp <= 0){
				// победил первый
				message.user.balance += Number(message.user.duel_summ);
				users[us2].balance -= Number(message.user.duel_summ);

				message.user.game.strela_win += 1;
				users[us2].game.strela_loose += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${message.user.id}(${message.user.tag})
				🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | ${one_hp}❤
			 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | 0❤ 
				`;
				vk.api.call("messages.send", {
					peer_id: message.user.id,
					random_id: message.user.id,
					message: text
					
				});	

				vk.api.call("messages.send", {
				    peer_id: users[us2].id,
					random_id: users[us2].id,
					message: text
				});	
				users[us2].duel = false;
				users[us2].duel_summ = false;
				message.user.duel = false;
				message.user.duel_summ = false;
				users[us2].nachal = false;
				message.user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
			if(one_hp <= 0){
				// победил второй
				message.user.balance -= Number(message.user.duel_summ);
				users[us2].balance += Number(message.user.duel_summ);

				message.user.game.strela_loose += 1; 
				users[us2].game.strela_win += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${users[us2].id}(${users[us2].tag})
				🔸 ➾ ${message.user.tag} | -${users[us2].uron}% | 0❤
			 	🔹 ➾ ${users[us2].tag} | -${message.user.uron}% | ${two_hp}❤ 
				`;
				vk.api.call("messages.send", {
					peer_id: message.user.id,
					random_id: message.user.id,
					message: text
					
				});	

				vk.api.call("messages.send", {
					peer_id: users[us2].id,
					random_id: users[us2].id,
					message: text
				});	
				users[us2].duel = false;
				users[us2].duel_summ = false;
				message.user.duel = false;
				message.user.duel_summ = false;
				users[us2].nachal = false;
				message.user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
		 
		
	}else{
		text += `
		- - 3&#8419; этап - - 
		Вы сыграли в ничью!`;
		vk.api.call("messages.send", {
				peer_id: message.user.id,
				random_id: message.user.id,
				message: text
				
			});	

			vk.api.call("messages.send", {
				peer_id: users[us2].id,
				random_id: users[us2].id,
				message: text
			});
		users[us2].duel = false;
		users[us2].duel_summ = false;
		message.user.duel = false;
		message.user.duel_summ = false;
		users[us2].nachal = false;
		message.user.nachal = false; 
		 
	}  

 
	 
});

cmd.on(/^(?:оружие)\s?([0-9]+)?/i, async (message) => {
		let a = Number(args[1])
		if(a < 0 || a > 17) return message.send(`📛 Номер должен быть > 0 и < 17`);
		if(a){
			if(i.balance < guns[a].price) return message.send(`📛 Это оружие стоит ${guns[a].price} RUB, а у вас ${utils.sp(i.balance)} RUB!`);
			i.balance -= Number(guns[a].price);
			i.gun_name = guns[a].name;
			i.uron = guns[a].count;
            return message.send(`
			⚔ Вы купили ${guns[a].name}
			🗡 Мощность оружия: ${guns[a].count}%
			- - - - -
			🔹 Ваше оружие было заменено.
			`);
		}else{
			let text = '';
			for(a in guns){
				text += `⚔ ${a} ${guns[a].name} | ${guns[a].price} RUB | ${guns[a].count}%\n`;
			}
			text += `❤ Название | Цена | Урон\n🔸 Для покупки введите: "Оружие ID"`;
			return message.send(text);
		}
	});


	cmd.on(/^(?:оружейный кейс)$/i, async (message, bot) => { 
	let a = cases.random(); 

	if(i.balance < 10000000) return message.send(`💸 ➾ Оружейный кейс стоит 10.000.00RUB`);
	if(i.cass != 0) return message.send(`🔫 ➾ Вы сможете крутить оружейный кейс через ${timer(i.cass)}.`);
	i.balance -= 10000000;

	i.uron = a.uron;
	i.cass = 3600;
	i.gun_name = a.name;
	return message.send(`
		💸 ➾ Вы открыли оружейный кейс за 10000000RUB
		💸 ➾ Вам выпало оружие:
		🔫 ➾ ${a.name} с уроном ${a.uron} единиц
		
		⚠ ➾ При следующем открытии кейса, данное оружие будет заменено выпавшим.
	`);
});
