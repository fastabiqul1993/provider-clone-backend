const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const oauth2 = google.auth.OAuth2;
require("dotenv/config");

const oauth2Client = new oauth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

module.exports = {
  response: (res, result, status, error) => {
    let print = {};

    print.status = status || 200;
    print.response = result;
    print.error = error;

    return res.status(print.status).json(print);
  },
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  },
  getDiscount: (price, discount) => {
    const priceDiscount = (price * discount) / 100;
    const afterDiscount = price - priceDiscount;
    return afterDiscount;
  },
  sendMail: (name, email_user, otp) => {
    let smptTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    let mailOptions = {
      from: `${process.env.EMAIL_ADDRESS}`,
      to: `${email_user}`,
      subject: "Thank you for signup!",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]--><meta http-equiv="Content-type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="format-detection" content="date=no"><meta name="format-detection" content="address=no"><meta name="format-detection" content="telephone=no"><meta name="x-apple-disable-message-reformatting"><!--[if !mso]><!--><!--<![endif]--><title>Email Template</title><!--[if gte mso 9]>
      <style type="text/css" media="all">
        sup { font-size: 100% !important; }
      </style>
      <![endif]--></head><body class="body" style="-webkit-text-size-adjust:none;background:#2e57ae;display:block!important;margin:0!important;min-width:100%!important;padding:0!important;width:100%!important"><style type="text/css" media="screen">@media only screen and (max-device-width:480px){.mobile-shell{width:100%!important;min-width:100%!important}.m-center{text-align:center!important}.text-footer,.text-header,.text3{text-align:center!important}.center{margin:0 auto!important}.td{width:100%!important;min-width:100%!important}.m-br-15{height:15px!important}.p30-15{padding:30px 15px!important}.p30-15-0{padding:30px 15px 0 15px!important}.p40{padding-bottom:30px!important}.box,.footer,.p15{padding:15px!important}.h2-white{font-size:40px!important;line-height:44px!important;text-align:center!important}.h2{font-size:42px!important;line-height:50px!important}.m-hide,.m-td{display:none!important;width:0!important;height:0!important;font-size:0!important;line-height:0!important;min-height:0!important}.m-block{display:block!important}.container{padding:0!important}.separator{padding-top:30px!important}.fluid-img img{width:100%!important;max-width:100%!important;height:auto!important}.column,.column-bottom,.column-dir,.column-dir-bottom,.column-dir-top,.column-empty,.column-empty2,.column-top{float:left!important;width:100%!important;display:block!important}.column-empty{padding-bottom:10px!important}.column-empty2{padding-bottom:30px!important}.content-spacing{width:15px!important}}</style><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#2e57ae"><tbody><tr><td align="center" valign="top" class="container" style="padding:50px 10px"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="center"><table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"><tbody><tr><td class="td" bgcolor="#ffffff" style="width:650px;min-width:650px;font-size:0;line-height:0;padding:0;margin:0;font-weight:400"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"><tbody><tr><td class="p30-15-0" style="padding:40px 30px 0 30px"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><th class="column" style="font-size:0;line-height:0;padding:0;margin:0;font-weight:400"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="img m-center" style="font-size:0;line-height:0;text-align:left"><img src="https://i.ibb.co/R32nNBs/logo-axis.png" width="75" height="auto" border="0" alt="" style="-ms-interpolation-mode:bicubic"></td></tr></tbody></table></th><th class="column-empty" width="1" style="font-size:0;line-height:0;padding:0;margin:0;font-weight:400"></th><th class="column" width="120" style="font-size:0;line-height:0;padding:0;margin:0;font-weight:400"></th></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="separator" style="padding-top:40px;border-bottom:4px solid #000;font-size:0;line-height:0">&amp;nbsp;</td></tr></tbody></table></td></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"><tbody><tr><td class="p30-15" style="padding:70px 30px 70px 30px"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="h2 center pb10" style="color:#000;font-family:Ubuntu,Arial,sans-serif;font-size:50px;line-height:60px;text-align:center;padding-bottom:10px">Selamat Datang<br><strong>${name}</strong></td></tr><tr><td class="h5 center blue pb30" style="font-family:Ubuntu,Arial,sans-serif;font-size:20px;line-height:26px;text-align:center;color:#2e57ae;padding-bottom:30px">– Nikmati paket murah meriah dari om Jin!</td></tr>
      <tr><td class="h4 center pb10" style="color:#000;font-family:Ubuntu,Arial,sans-serif;font-size:50px;line-height:60px;text-align:center;padding-bottom:10px">OTP: ${otp}</td></tr><tr><td class="fluid-img pb40" style="font-size:0;line-height:0;text-align:left;padding-bottom:40px"><img src="https://i.ibb.co/x2yShzX/axis.jpg" width="590" height="300" border="0" alt="" style="-ms-interpolation-mode:bicubic"></td></tr></tbody></table></td></tr><tr><td class="fluid-img img-center pb70" style="font-size:0;line-height:0;text-align:center"><img src="images/separator.jpg" width="590" height="1" border="0" alt="" style="-ms-interpolation-mode:bicubic"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>`
    };

    smptTransport.sendMail(mailOptions, function(err, result) {
      err ? console.log(err) : console.log("email sent!");
      smptTransport.close();
    });
  }
};
