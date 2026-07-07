// ------------------------------------------------------------------
// Shared member data used by members.html (grid) and member.html (detail page).
// Edit this file to update names, bios, or add real photos/social links.
//
// PHOTOS: put 3 images per member in assets/members/<id>/1.jpg, 2.jpg, 3.jpg
// (or fewer — missing files just fall back to a placeholder automatically).
//
// SOCIALS: replace the "#" placeholders with real profile URLs once you
// have them. Leave as "#" for any you don't want to link yet.
// ------------------------------------------------------------------

const MEMBERS = [
  {
    id: 'nayeon',
    name: 'Nayeon',
    role: 'Leader / Vocal',
    initial: 'N',
    birthday: 'September 22',
    position: 'Leader, Main Vocalist',
    summary: 'Bright, energetic, and quick-witted — the one who keeps the group grounded and laughing.',
    bio: 'Replace this with a full write-up: debut story, vocal style, notable stages, and anything else you want fans to read on the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'jeongyeon',
    name: 'Jeongyeon',
    role: 'Vocal',
    initial: 'J',
    birthday: 'November 1',
    position: 'Vocalist',
    summary: 'Known for a powerful, distinctive voice and a dry sense of humor.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'momo',
    name: 'Momo',
    role: 'Main Dancer',
    initial: 'M',
    birthday: 'November 9',
    position: 'Main Dancer, Vocalist',
    summary: 'The group\'s powerhouse dancer, known for precision and stage presence.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'sana',
    name: 'Sana',
    role: 'Vocal',
    initial: 'S',
    birthday: 'December 29',
    position: 'Vocalist',
    summary: 'Warm and cheerful, with a soft vocal tone fans instantly recognize.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'jihyo',
    name: 'Jihyo',
    role: 'Center / Vocal',
    initial: 'J',
    birthday: 'February 1',
    position: 'Center, Main Vocalist',
    summary: 'The group\'s center and main vocalist, known for steady leadership and vocal control.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'mina',
    name: 'Mina',
    role: 'Dancer',
    initial: 'M',
    birthday: 'March 24',
    position: 'Lead Dancer, Vocalist',
    summary: 'Graceful and precise, with a background in ballet that shows in every performance.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'dahyun',
    name: 'Dahyun',
    role: 'Rapper',
    initial: 'D',
    birthday: 'May 28',
    position: 'Lead Rapper, Vocalist',
    summary: 'Playful and quick on her feet, both on stage and in variety segments.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'chaeyoung',
    name: 'Chaeyoung',
    role: 'Rapper',
    initial: 'C',
    birthday: 'April 23',
    position: 'Main Rapper, Vocalist',
    summary: 'Known for a distinctive rap tone and a creative, artistic streak outside music too.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  },
  {
    id: 'tzuyu',
    name: 'Tzuyu',
    role: 'Maknae / Visual',
    initial: 'T',
    birthday: 'June 14',
    position: 'Maknae, Vocalist',
    summary: 'The youngest member, known for striking stage presence and steady vocals.',
    bio: 'Replace this with a full write-up for the detail page.',
    socials: { instagram: '#', twitter: '#', tiktok: '#' }
  }
];

// Builds the list of photo paths for a member (assumes up to 4 numbered files)
function getMemberPhotos(id){
  return [1, 2, 3, 4].map(n => `assets/members/${id}/${n}.jpg`);
}
