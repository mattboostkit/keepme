// This script updates team members in Sanity
// Run with: sanity exec scripts/update-team-members.js --with-user-token

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Configure the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // Set this environment variable or replace with your token
  useCdn: false,
  apiVersion: '2023-05-03',
});

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

async function updateTeamMembers() {
  try {
    console.log('Starting team members update...');

    // First, delete all existing team members
    const existingMembers = await client.fetch('*[_type == "teamMember"]._id');
    console.log(`Found ${existingMembers.length} existing team members to delete`);
    
    if (existingMembers.length > 0) {
      const transaction = client.transaction();
      
      existingMembers.forEach(id => {
        transaction.delete(id);
      });
      
      await transaction.commit();
      console.log('Deleted all existing team members');
    }

    // Read the generic profile image
    const imagePath = path.join(process.cwd(), '..', 'src', 'assets', 'images', 'generic-profile.svg');
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Create new team members
    for (const member of teamMembers) {
      console.log(`Creating team member: ${member.name}`);
      
      // Upload the generic image
      const imageAsset = await client.assets.upload('image', imageBuffer, {
        filename: 'generic-profile.svg',
        contentType: 'image/svg+xml'
      });
      
      // Create the team member document
      await client.create({
        _type: 'teamMember',
        name: member.name,
        title: member.title,
        linkedinUrl: member.linkedinUrl,
        displayOrder: member.displayOrder,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id
          }
        }
      });
    }
    
    console.log('Successfully created all team members');
  } catch (error) {
    console.error('Error updating team members:', error);
  }
}

// Run the update function
updateTeamMembers();
