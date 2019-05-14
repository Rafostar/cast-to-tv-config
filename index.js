#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const homedir = require('os').homedir();
const confDir = `${homedir}/.local/share/gnome-shell/extensions/cast-to-tv@rafostar.github.com/config`;

var devices = [];
var id = 0;

var myInterface = readline.createInterface({
	input: process.stdin, output: process.stdout
});

function askQuestion(text)
{
	return new Promise(resolve =>
	{
		myInterface.question(text, (answer) => resolve(answer));
	});
}

function saveConfig()
{
	var exist = fs.existsSync(confDir);

	try {
		if(!exist) fs.mkdirSync(confDir);
		fs.writeFileSync(confDir + '/devices.json', JSON.stringify(devices, null, 1));
		console.log('Config saved');
	}
	catch(err) {
		console.log(`Error while saving config: ${err.message}`);
	}

	myInterface.close();
}

async function configure()
{
	var name = 'device' + id;
	var fn = await askQuestion('Chromecast name: ');
	var ip = await askQuestion('Chromecast IP: ');

	devices[id] = { name: name, friendlyName: fn, ip: ip };
	id++;

	var answer = await askQuestion('Add another device? [y/N]: ');
	answer = answer.toLowerCase();

	if(answer == 'y' || answer == 'yes') configure();
	else saveConfig();
}

configure();
