# Team Members Update Guide

This guide will walk you through updating the team members in Sanity with the new information provided.

## Option 1: Manual Update (Recommended)

### Step 1: Open Sanity Studio
1. Make sure Sanity Studio is running (http://localhost:3333)
2. Log in if necessary

### Step 2: Delete Existing Team Members
1. In the left sidebar, click on "Team Members"
2. For each existing team member:
   - Click on the team member to open it
   - Click the "Delete" button in the bottom right
   - Confirm deletion

### Step 3: Create New Team Members
For each team member in the list below, follow these steps:
1. Click "Create new" in the Team Members section
2. Fill in the following fields:
   - Full Name
   - Job Title
   - LinkedIn URL (if available)
   - Display Order (to control the order they appear on the site)
3. Upload the generic profile image from `src/assets/images/generic-profile.svg`
   - You can replace these with actual photos later
4. Click "Publish" to save the team member

### Team Members to Create

1. **Kevin Anderson**
   - Job Title: Managing Director
   - LinkedIn URL: https://www.linkedin.com/in/kevin-anderson-2605565/
   - Display Order: 1

2. **Steve Anderson**
   - Job Title: Commercial Director
   - LinkedIn URL: https://www.linkedin.com/in/steve-anderson-6756a113/
   - Display Order: 2

3. **Jodie Amos**
   - Job Title: Operations Director
   - LinkedIn URL: https://www.linkedin.com/in/jodie-amos-055076118/
   - Display Order: 3

4. **Neil Jerzak**
   - Job Title: Director
   - LinkedIn URL: https://www.linkedin.com/in/neil-jerzak-61198646/
   - Display Order: 4

5. **Danielle Ferguson**
   - Job Title: Graphic Designer
   - LinkedIn URL: https://www.linkedin.com/in/danielle-ferguson-72a6613b/
   - Display Order: 5

6. **Geri Danby**
   - Job Title: Finance Manager
   - LinkedIn URL: https://www.linkedin.com/in/gergana-danby-12519927/
   - Display Order: 6

7. **Lucia Christinis**
   - Job Title: Senior Account Manager
   - LinkedIn URL: https://www.linkedin.com/in/lucia-wordsworth/
   - Display Order: 7

8. **Vesna Martin**
   - Job Title: Operations Manager
   - LinkedIn URL: https://www.linkedin.com/in/vesna-martin-850b2b19b/
   - Display Order: 8

9. **Benn Coombes**
   - Job Title: Graphic Designer
   - LinkedIn URL: https://www.linkedin.com/in/benn-coombes-52a11819/
   - Display Order: 9

10. **Millie Anderson**
    - Job Title: Account Manager
    - LinkedIn URL: https://www.linkedin.com/in/millie-anderson-397912148/
    - Display Order: 10

11. **Poppy White**
    - Job Title: Junior Account Manager
    - LinkedIn URL: https://www.linkedin.com/in/poppy-mae-white-b84567273/
    - Display Order: 11

12. **Sharon Scott**
    - Job Title: Accounts Assistant
    - LinkedIn URL: (None)
    - Display Order: 12

13. **Levi Perrin**
    - Job Title: Operations Administrator
    - LinkedIn URL: https://www.linkedin.com/in/levi-perrin-a695532a9/
    - Display Order: 13

## Option 2: Automated Update (For Developers)

If you prefer to automate this process, you can use the provided script:

1. Open a terminal and navigate to the studio directory:
   ```bash
   cd studio
   ```

2. Set your Sanity token as an environment variable:
   ```bash
   # On Windows
   set SANITY_TOKEN=your_token_here
   
   # On macOS/Linux
   export SANITY_TOKEN=your_token_here
   ```

3. Run the update script:
   ```bash
   sanity exec scripts/update-team-members.js --with-user-token
   ```

4. The script will:
   - Delete all existing team members
   - Create new team members with the provided information
   - Use a generic profile image for all team members

5. After the script completes, you can replace the generic images with actual photos by editing each team member individually in Sanity Studio.

## Verifying the Changes

After updating the team members, you can verify the changes by:

1. Viewing the Team Members section in Sanity Studio
2. Checking the About page on your website to see the updated team members
3. Ensuring the LinkedIn links work correctly when clicked

## Replacing Profile Images

To replace the generic profile images with actual photos:

1. In Sanity Studio, click on a team member to edit
2. Click on the image field to upload a new image
3. Select the appropriate photo for that team member
4. Click "Publish" to save the changes
5. Repeat for each team member
