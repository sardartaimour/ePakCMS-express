exports.bootstrap = _ => {
    global.config = {

        base_url: process.env.BASE_URL,
        api_url: process.env.API_URL,

        default_timezone: process.env.DEFAULT_TIMEZONE,
        maxTokenAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        tokenSecret: process.env.TOKEN_SECRET,
        sms_from: process.env.SMS_FROM,
        
        debugger: {
            // paths to exclude from logging
            exclude: [
            
            ],
        }
    };
}