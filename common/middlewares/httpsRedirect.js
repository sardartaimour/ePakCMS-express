module.exports = (req, res, next) => {
    if (req.originalUrl.indexOf("ping") > -1 || req.hostname.indexOf("localhost") > -1) { //make sure to change the default health check URL on your ELB
        return next();
    } else {
        // ELB will receive the https traffic, 
        //   terminate SSL, 
        //   add the X-Forwarded-Proto header to the req 
        //   and setting this header to 'https'
        //   and then forward the traffic to your node app.
        // In this case your Sails app is running on an EC2 instance behind an AWS ELB
        // and an amazon cert was added to the ELB
        if ((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
            return res.redirect("https://" + req.get('Host') + req.url);
        } else
            return next();
    }
}