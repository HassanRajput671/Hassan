const { cmd } = require('../command');

cmd({
    pattern: "scammer",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply 
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const steps = [
            '💻 *𝐒𝐂𝐀𝐌𝐌𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆...* 💻',
            
            'https://api.whatsapp.com/send?phone=923202231275&text=hi_scammer_you_are_a__big_bc_💋🥵_saly_scammer_tery_scam_ky_prof_bi_hain_hamary_pass💋🥵🫦',
            'https://api.whatsapp.com/send?phone=447715929714&text=hi_scammer_you_are_a__big_bc_💋🥵_saly_scammer_tery_scam_ky_prof_bi_hain_hamary_pass💋🥵🫦',
            
            'https://api.whatsapp.com/send?phone=923092342318&text=hi_scammer_you_are_a__big_bc_💋🥵_saly_scammer_tery_scam_ky_prof_bi_hain_hamary_pass💋🥵🫦'                                            ,
            'https://api.whatsapp.com/send?phone=923094230218&text=hi_scammer_you_are_a__big_bc_💋🥵_saly_scammer_tery_scam_ky_prof_bi_hain_hamary_pass💋🥵🫦'                                   ,
            'https://api.whatsapp.com/send?phone=923304093758&text=hi_scammer_you_are_a__big_bc_💋🥵_saly_scammer_tery_scam_ky_prof_bi_hain_hamary_pass💋🥵🫦'                               ,
            
            '> *𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃-𝐒𝐂𝐀𝐌𝐌𝐀𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍-𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄 ☣*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
