var TelegramBot = require('..');

// replace the value below with the Telegram token you receive from @BotFather
var token = 'ENTER_BOT_TOKEN_HERE';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

var reply = {
	"1v1":"fite me m8",
	"ati":"hey, automoderator here, watch out, you mentioned ati. ati was consumed by eternal glory amd so you should correct your post to glorious amd.",
	"good automod":"ayy, danks m88",
	"bad automod":"u fukin wot m8, i'll rek you on wii party",
	"shit automod":"What the fuck did you just fucking say about me, you НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ? I’ll have you know I graduated top of my class in the good shit go౦ԁ sHit academy, and I’ve been involved in numerous secret raids on Baaddd ShIT, and I have over 300 confirmed (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ). I am trained in goOd sHit warfare and I’m the top shiter in the entire US armed mMMMMᎷМ. You are nothing to me but just another Baaa AaAadDddD Sh1t. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, thats what im talking about right there right there . You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of go౦ԁ sHit across the USA and your IP is being traced right there right there, so if i do ƽaү so my self i say so, you better prepare for the storm, НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, I could be right there right there and I can kill you in over seven hundred ways, and that’s just with my bare (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ). Not only am I extensively trained in mMMMMᎷМ combat, but I have access to the entire arsenal of the United States Good shit Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little BAAaAaAaAd shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking shit. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ.",
	"ayy":"lmao",
	"lmao":"m88",
	"m88":"m89",
	"m89":"m90",
	"nvidia is good":"Hey man what the hell. i don't want to have to deal with this shit.",
	"amd is shit":"What the fuck did you just fucking say about me, you geforce 256? I’ll have you know I graduated top of my class at Radeon University, and I’ve been involved in numerous secret deals with game developers, and I have over 9000 confirmed GFLOPS. I am trained in async warfare and I’m the top engineer in the entire Radeon family. You are nothing to me but just another peasant. I will compute you the fuck out with double precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of developers across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your rig. Your PC is fucking dead, kid. I can be anywhere, anytime, and I can out-bench you in over nine thousand games, and that’s just with my Mach 64. Not only am I extensively trained in GPUOpen, but I have access to the entire SDK of the Vulkan API and I will use it to its full extent to gimp your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit on your GTX 1080 and all over you and you will drown in it. You’re fucking toast, kiddo.",
	"<--":"👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do Saү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳIᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMmМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ 👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit"
};

var photoReply = {
	"gtx 480":'data/gtx480.jpg',
	"gtx 1080ti":'data/gtx1080ti.jpg',
	"gtx 1080 ti":'data/gtx1080ti.jpg',
	"gtx 1080":'data/gtx1080.jpg',
	"titan xp":'data/titanxp.jpg',
	"cancer":'data/cancer.png'
}

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
	/*
	console.log("message received")
	var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
	var ret = AyyMD(msg);
  
	for (var i = 0; i < ret.length; i++) {
		bot.sendMessage(chatId, ret[i],{reply_to_message_id:msg.message_id});
	}
	*/
	AyyMD(msg);
});

function AyyMD(msg){
	var msgtext = msg.text;
	//ret = [];
	
	//Text Reply
	for(var searchtext in reply) {
		if(msgtext && (msgtext.toLowerCase().search(searchtext) != -1)){
		console.log("\tmatch - "+searchtext)
			var rep = reply[searchtext];
			//ret.push(rep);
			bot.sendMessage(msg.chat.id, rep,{reply_to_message_id:msg.message_id});
		}
	}
	
	//Photo Reply
	for(var searchtext in photoReply) {
		if(msgtext && (msgtext.toLowerCase().search(searchtext) != -1)){
		console.log("\tmatch - "+searchtext)
			var rep = photoReply[searchtext];
			bot.sendPhoto(msg.chat.id, rep,{reply_to_message_id:msg.message_id});
			break;
		}
	}
	//return ret;
}