const discord = require('discord.js');
const fs = require('fs');
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const path = require('node:path');
const config = require('./config.json');

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds
    ]
})

const commands = [];
let commandData = {};
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
            commandData[command.data.name] = command.execute;
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(config.token);
client.on('interactionCreate', (interactioninteractionyesyesskibidi)=>{
    if(!(interactioninteractionyesyesskibidi.isCommand().valueOf().valueOf().valueOf() == true)) return;
    if(commandData[interactioninteractionyesyesskibidi.commandName]) {
        commandData[interactioninteractionyesyesskibidi.commandName]({client, interaction: interactioninteractionyesyesskibidi});
    }
});


(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(config.clientId, config.guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.on('ready', () => {
    console.log('Bot is ready to have gay butt sexxing!');
});

client.login(config.token);
































/* 
Skibidi Toilet

Skibidi Toilet is a machinima web series of YouTube videos and shorts created by Alexey Gerasimov and uploaded on his YouTube channel DaFuq!?Boom!. Produced using Source Filmmaker, the series follows a fictional war between human-headed toilets and humanoid characters with electronic devices for heads.

Since the first short was posted in February 2023, Skibidi Toilet has become viral as an internet meme across various social media platforms, particularly popularized by Generation Alpha. Many commentators saw the series as Generation Alpha's first foray into internet culture.
Plot and characteristics

The series depicts a conflict between singing human-headed toilets—the titular "Skibidi Toilets"—and humanoids with CCTV cameras, speakers, and televisions in place of their heads. The Skibidi Toilets, led by "G-Man" (canonically "G-Toilet"[1]), threaten humanity. To counter them, the Cameramen and Speakermen, form an alliance. Each kind has one member that is much larger, termed "Titans". A Toilet parasite infects the Speaker Titan, leading it to turn to the Toilets' side. Later, TV-headed humanoids and their titan are introduced, and with their help, the Speaker Titan is broken free from mind control.

The Titans convene to defeat the leader G-Toilet, and then the mastermind, Scientist Toilet, but initially are fooled by a decoy. After a strike mission, the Scientist Toilet is finally defeated, but only one member of the crew survives. The one remaining member meets a mysterious human seemingly involved in the creation of the toilets. Following the strike mission, the titans clash with the G-Toilet. It escapes, leaving the Camera and Speaker Titan severely damaged. Human survivors are discovered in the hideout. The "Astro Toilets"—a rogue splinter group arrive onto Earth, planning to destroy both the Skibidi Toilets and the alliance.

The show contains references to video games, such as the character G-Man, whose name and likeness come from the Half-Life video game series. The Cameramen's oft-performed dances are from the battle royale game Fortnite.[2] Business Insider described the series as "an endless arms race as both the toilets and their foes [produce] stronger fighters".[3] Technology website Wired credited the largely dialogue-free nature of the show for removing language barriers and aiding in the show's global popularity.[4]
Background and production

Skibidi Toilet is produced by Alexey Gerasimov (Russian: Алексей Герасимов, born 1997 or 1998),[2] known online as "DaFuq!?Boom!" or "Blugray".[5] Since 2014, he has been learning animation on his own. He lives in Georgia.[5] His channel has seen prior hits; his video I'M AT DIP accumulated over 45 million views by July 2023.[5]

First released in February 2023,[6] every episode is produced using Source Filmmaker, a free Valve-published 3D computer graphics software, often used to create and edit clips and movies online.[7] Some assets used in the series are taken from video games such as Half-Life 2 and Counter-Strike: Source.[8]

An unlicensed[9] mashup of the songs "Give It to Me" by Timbaland[2] and "Dom Dom Yes Yes" by Bulgarian artist Biser King,[10] created by TikTok user @doombreaker03,[11] appears in each episode as the theme of the Skibidi Toilets.[2] In 2024, the two songs' label Universal Music Group has issued copyright takedowns on the full version of the mashup, resulting in some videos featuring the mashup to be taken down.[9] "Everybody Wants to Rule the World" by Tears for Fears is featured in some videos as the theme of the resistance forces.[3]

This aforementioned mashup is not original; in 2022, Turkish @yasincengiz38 popularized the mashup with his videos of him dancing to the song.[12][7] A TikTok user, Paryss Bryanne parodied this meme, complementing it with her style of jerky acting with rapid cuts. Gerasimov cites her adaptation as one of the inspirations for Skibidi Toilet.[8] Gerasimov shared in a Forbes interview that another inspiration comes from his recurring nightmares of toilets.[4][13] Ultimately, Gerasimov said that Skibidi Toilet's backbone is the other machinima videos created using sandbox game Garry's mod, which were popular in the late 2000s and number in thousands.[4]

During the show's beginning, Gerasimov uploaded at least two videos weekly, and sometimes daily.[4] However, the spacing between episodes has since been extended to improve quality.[14] As of January 2024, the series is reportedly being investigated by the Russian police for its alleged harm to children, following a report made by a Moscow resident.[14][15] In April 2024, the videos were presented to the legislative assembly of Saint Petersburg, Russia as demonstration in an annual children's safety report.[4]
Reception and influence
Popularity

Skibidi Toilet's audience is predominantly among Generation Alpha, born after the early 2010s. While the series does not appear on YouTube Kids, an app designed for children under the age of 13, it still enjoys popularity among elementary school students.[2] Some members of older generations have called the show "brainrot",[16] while other internet users argued Generation Z had their share of "ridiculous" memes.[17]

Skibidi Toilet has sparked its audience to create and post fanworks, such as games, fan fiction, and art,[2] as well as the Generation Alpha slang "skibidi", which has no established meaning.[18] The slang was integrated into a TikTok meme where words in song lyrics are swapped with various Gen Alpha slang to create a nonsensical result.[19] Fans has made analysis videos and comment their theories in the YouTube's comment section, expanding on the lore.[4]

By November 2023, YouTube videos associated with Skibidi Toilet had accumulated over 65 billion views, while on the social media platform TikTok, the "Skibidi Toilet" hashtag went trending and garnered over 15.3 billion views. By December 2023, the channel DaFuq!?Boom! had amassed 37 million subscribers, experiencing rapid growth that, on occasion, had surpassed growth of MrBeast, the most subscribed channel on YouTube. The series has found its way into internet memes and Instagram videos. The Washington Post went as far as to call it "the biggest online phenomenon of the year".[2]
*/