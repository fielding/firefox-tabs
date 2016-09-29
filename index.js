'use strict';
const fs = require('fs');
const os = require('os');
const ini = require('ini');
const osHomedir = require('os-homedir');
const pify = require('pify');

const fsP = pify(fs);
const file = getFirefoxProfilePath() + '/sessionstore-backups/recovery.js';

function getFirefoxProfilePath() {
  let ffConfDir;

  if (process.platform === 'win32') {
    ffConfDir = process.env.APPDATA + '/Mozilla/Firefox/';
  } else {
    ffConfDir = process.platform === 'darwin' ? osHomedir() + '/Library/Application Support/Firefox/' : osHomedir() + '/.mozilla/firefox/';
  }

  const profilePath = ini.parse(fs.readFileSync(ffConfDir + 'profiles.ini', 'utf-8')).Profile0.Path;
  return ffConfDir + profilePath;
}

const parse = buf => {
  const session = JSON.parse(buf);
  const tabs = [];

  session.windows.forEach(window => {
    window.tabs.forEach(tab => {
      const tabObject = tab.entries.pop();
      tabs.push({title: tabObject.title, url: tabObject.url});
    });
  });

  return {
    deviceName: os.hostname(),
    modified: new Date(session.session.lastUpdate),
    tabCount: tabs.length,
    tabs
  };
};

module.exports = () => fsP.readFile(file)
  .then(parse)
  .catch(err => {
    throw err;
  });

module.exports.sync = () => {
  return parse(fs.readFileSync(file), 'utf8');
};
