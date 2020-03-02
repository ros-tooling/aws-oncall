#! /usr/bin/env node

const fs = require('fs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const htmlReport = fs.readFileSync('./weekly-report.html', 'utf8');

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const msg = {
to: 'ros-contribution-report@googlegroups.com',
from: 'test@example.com',
subject: `Open Source Weekly Contribution Report ${yyyy}-${mm}-${dd}`,
html: htmlReport,
};

sgMail
.send(msg)
.then(() => console.log('Mail sent successfully'))
.catch(error => console.error(error.toString()));
