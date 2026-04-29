export async function GET() {
    const content = `# The Techie Guys
  
  > Professional business email setup, Google Workspace, Microsoft 365,
  > SPF/DKIM/DMARC configuration, and email migration for UK small businesses.
  > Fixed prices. 24-48 hour turnaround.
  
  ## Services
  - Business email setup (Google Workspace, Microsoft 365) — from £99
  - SPF, DKIM and DMARC configuration — from £79
  - Email migration from old host or IMAP — from £149
  - Deliverability rescue, emails going to spam — from £149
  - Domain management and DNS configuration
  - Monthly email infrastructure monitoring — from £49/month
  
  ## Packages
  - Starter: £99 one-time, email setup for 1-3 users with SPF/DKIM/DMARC
  - Professional: £199 one-time, up to 10 users, migration included
  - Business: £349 one-time, up to 30 users, full setup plus 90 days support
  
  ## Target Audience
  UK small businesses, solo traders, and growing teams who need
  professional email infrastructure without technical complexity.
  
  ## Contact
  - Website: https://thetechieguys.com
  - Email: hello@thetechieguys.com
  - Response time: within 2 hours`;
  
    return new Response(content, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }