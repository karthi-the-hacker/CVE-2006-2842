#!/usr/bin/env node
/**
 * CVE-2006-2842
 * CVE-2006-2842 is a powerful scanner for bug bounty hunters and penetration testers to discover vulnerabilities in their web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 

const lineReader = require('line-reader');
const scan = require('../includes/scan');

class reader {
    constructor(listfile,savepath) {
         lineReader.eachLine(listfile, (line, last) => {
            new scan.scanner(line,savepath);
        });
    }
}
module.exports = {
    fileread: reader
}