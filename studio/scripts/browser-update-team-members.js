// This is a simplified version of the team members update script
// that can be run directly in the browser console of Sanity Studio

// Team members data
const teamMembers = [
  {
    name: 'Kevin Anderson',
    title: 'Managing Director',
    linkedinUrl: 'https://www.linkedin.com/in/kevin-anderson-2605565/',
    displayOrder: 1
  },
  {
    name: 'Steve Anderson',
    title: 'Commercial Director',
    linkedinUrl: 'https://www.linkedin.com/in/steve-anderson-6756a113/',
    displayOrder: 2
  },
  {
    name: 'Jodie Amos',
    title: 'Operations Director',
    linkedinUrl: 'https://www.linkedin.com/in/jodie-amos-055076118/',
    displayOrder: 3
  },
  {
    name: 'Neil Jerzak',
    title: 'Director',
    linkedinUrl: 'https://www.linkedin.com/in/neil-jerzak-61198646/',
    displayOrder: 4
  },
  {
    name: 'Danielle Ferguson',
    title: 'Graphic Designer',
    linkedinUrl: 'https://www.linkedin.com/in/danielle-ferguson-72a6613b/',
    displayOrder: 5
  },
  {
    name: 'Geri Danby',
    title: 'Finance Manager',
    linkedinUrl: 'https://www.linkedin.com/in/gergana-danby-12519927/',
    displayOrder: 6
  },
  {
    name: 'Lucia Christinis',
    title: 'Senior Account Manager',
    linkedinUrl: 'https://www.linkedin.com/in/lucia-wordsworth/',
    displayOrder: 7
  },
  {
    name: 'Vesna Martin',
    title: 'Operations Manager',
    linkedinUrl: 'https://www.linkedin.com/in/vesna-martin-850b2b19b/',
    displayOrder: 8
  },
  {
    name: 'Benn Coombes',
    title: 'Graphic Designer',
    linkedinUrl: 'https://www.linkedin.com/in/benn-coombes-52a11819/',
    displayOrder: 9
  },
  {
    name: 'Millie Anderson',
    title: 'Account Manager',
    linkedinUrl: 'https://www.linkedin.com/in/millie-anderson-397912148/',
    displayOrder: 10
  },
  {
    name: 'Poppy White',
    title: 'Junior Account Manager',
    linkedinUrl: 'https://www.linkedin.com/in/poppy-mae-white-b84567273/',
    displayOrder: 11
  },
  {
    name: 'Sharon Scott',
    title: 'Accounts Assistant',
    linkedinUrl: '', // No LinkedIn
    displayOrder: 12
  },
  {
    name: 'Levi Perrin',
    title: 'Operations Administrator',
    linkedinUrl: 'https://www.linkedin.com/in/levi-perrin-a695532a9/',
    displayOrder: 13
  }
];

// Instructions for using this script:
console.log(`
INSTRUCTIONS FOR UPDATING TEAM MEMBERS:

1. In Sanity Studio, first delete all existing team members:
   - Go to "Team Members" in the left sidebar
   - Select each team member and click the "Delete" button
   - Confirm deletion for each

2. Create new team members:
   - For each team member in the list, click "Create new" in Team Members
   - Fill in the details as shown in the list
   - Upload a generic profile image (you'll replace these individually later)
   - Set the display order as specified
   - Click "Publish" to save

3. After creating all team members, you can replace the generic images with actual photos
   by editing each team member individually.

Team Members to create:
${teamMembers.map(member => `
- Name: ${member.name}
  Title: ${member.title}
  LinkedIn: ${member.linkedinUrl || 'None'}
  Display Order: ${member.displayOrder}
`).join('')}
`);
