'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var child_process = require('child_process');

var ROOT = __dirname;
var MANIFEST_PATH = path.join(ROOT, 'manifest.json');

var SKIP = ['manifest.json', '.gitignore', 'update-manifest.js'];

var NO_OVERWRITE = ['config.json'];

var stdout = child_process.execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' });
var tracked = stdout.trim().split('\n').filter(function (f) { return f && SKIP.indexOf(f) === -1; });
tracked.sort();

var files = {};
tracked.forEach(function (relPath) {
    var absPath = path.join(ROOT, relPath);
    var buf = fs.readFileSync(absPath);
    var hash = crypto.createHash('sha256').update(buf).digest('hex');
    var key = relPath.replace(/\\/g, '/');

    if (NO_OVERWRITE.indexOf(key) !== -1) {
        files[key] = { overwrite: false, hash: hash };
    } else {
        files[key] = hash;
    }
});

var manifest = JSON.stringify({ files: files }, null, 4) + '\n';
fs.writeFileSync(MANIFEST_PATH, manifest, 'utf8');

console.log('manifest.json updated (' + Object.keys(files).length + ' files)');
