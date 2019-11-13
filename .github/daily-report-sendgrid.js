#! /usr/bin/env node

const fs = require('fs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const htmlReport = fs.readFileSync('./report.html', 'utf8');

const msg = {
to: 'aws-robotics-foundations-oncall@amazon.com',
from: 'test@example.com',
subject: '[ACTION NEEDED] Oncall Task: please ping open PRs without activity for a day or more',
html: htmlReport,
};

sgMail
.send(msg)
.then(() => console.log('Mail sent successfully'))
.catch(error => console.error(error.toString()));
