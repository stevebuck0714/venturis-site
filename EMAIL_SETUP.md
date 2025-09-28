# Email Setup Instructions

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Venturis
SMTP_HOST=mail.venturisfinancial.com
SMTP_PORT=587
SMTP_USER=steve.buck@venturisfinancial.com
SMTP_PASS=Tucson0801$
ADMIN_EMAIL=steve.buck@venturisfinancial.com
```

## Business Email Setup (Recommended)

For business email addresses like `steve.buck@venturisfinancial.com`:

1. **Find your SMTP settings** from your email provider or hosting company
2. **Common business email SMTP hosts**:
   - Office 365/Outlook: `smtp-mail.outlook.com`
   - Google Workspace: `smtp.gmail.com`
   - Custom hosting: `mail.yourcompany.com`
3. **Use your regular email password** (no app password needed for most business emails)

## Alternative Email Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

### Business Email Hosting
```env
SMTP_HOST=mail.venturisfinancial.com
SMTP_PORT=587
SMTP_USER=steve.buck@venturisfinancial.com
SMTP_PASS=your-password
```

## For Production Deployment

### Vercel
Add environment variables in your Vercel dashboard:
1. Go to your project settings
2. Environment Variables tab
3. Add each variable with the production values

### Netlify
Add environment variables in Netlify:
1. Site settings > Environment variables
2. Add each variable

### Other Hosting Providers
Most hosting providers have environment variable configuration in their dashboard.

## Testing Locally

1. Create `.env.local` with your email credentials
2. Restart your development server (`npm run dev`)
3. Submit the form - you should receive both admin notification and user confirmation emails

## Security Notes

- Never commit `.env.local` to your repository
- Use app passwords instead of regular passwords when possible
- Consider using dedicated email services (SendGrid, Mailgun) for production
- Implement rate limiting to prevent spam (consider adding CAPTCHA for production)

## Troubleshooting

- **Connection refused**: Check SMTP host and port settings with your email provider
- **Authentication failed**: Verify username and password
- **Emails in spam**: Set up SPF/DKIM records for your domain
- **Business email issues**: Contact your IT administrator or hosting provider for SMTP settings
