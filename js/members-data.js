const MAX_MEMBER_PHOTOS = 10;

const MEMBERS = [
  {
    id: 'nayeon',
    name: 'Nayeon',
    role: 'Lead Vocalist',
    initial: 'N',
    birthday: 'September 22, 1995',
    position: 'Lead Vocalist, Lead Dancer, Center, Face of the Group',
    summary: 'The eldest member of TWICE, known for her bright personality, stable vocals, and charismatic stage presence.',
    bio: 'Nayeon debuted with TWICE in 2015 after finishing first in the survival show Sixteen. She is recognized as the group’s center and one of its strongest performers. In 2022, she became the first TWICE member to debut as a solo artist with the mini album IM NAYEON, followed by NA in 2024.',
    socials: {
      instagram: 'https://www.instagram.com/nayeonyny/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'jeongyeon',
    name: 'Jeongyeon',
    role: 'Lead Vocalist',
    initial: 'J',
    birthday: 'November 1, 1996',
    position: 'Lead Vocalist',
    summary: 'Known for her rich vocal tone, caring personality, and dependable presence within the group.',
    bio: 'Jeongyeon trained under JYP Entertainment for several years before debuting with TWICE. She is admired for her powerful vocals and sincerity, and is affectionately known as one of the most caring members.',
    socials: {
      instagram: 'https://www.instagram.com/jy_piece/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'momo',
    name: 'Momo',
    role: 'Main Dancer',
    initial: 'M',
    birthday: 'November 9, 1996',
    position: 'Main Dancer, Sub Vocalist, Sub Rapper',
    summary: 'Widely regarded as one of K-pop’s best dancers, famous for her incredible precision and performance skills.',
    bio: 'Originally from Kyoto, Japan, Momo joined TWICE after competing on Sixteen. Although she was initially eliminated, she was brought back by JYP Park due to her exceptional dancing ability.',
    socials: {
      instagram: 'https://www.instagram.com/momo/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'sana',
    name: 'Sana',
    role: 'Sub Vocalist',
    initial: 'S',
    birthday: 'December 29, 1996',
    position: 'Sub Vocalist',
    summary: 'Known for her cheerful personality, charming expressions, and sweet vocals.',
    bio: 'Sana is from Osaka, Japan. She became one of TWICE’s most recognizable members thanks to her charming personality, memorable performances, and viral moments like "Shy Shy Shy."',
    socials: {
      instagram: 'https://www.instagram.com/m.by__sana/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'jihyo',
    name: 'Jihyo',
    role: 'Leader',
    initial: 'J',
    birthday: 'February 1, 1997',
    position: 'Leader, Main Vocalist',
    summary: 'TWICE’s leader and powerhouse vocalist, respected for her leadership and exceptional live performances.',
    bio: 'Jihyo trained for over ten years before debuting with TWICE. She is recognized as one of the strongest vocalists of her generation and released her solo debut album ZONE in 2023.',
    socials: {
      instagram: 'https://www.instagram.com/_zyozyo/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'mina',
    name: 'Mina',
    role: 'Main Dancer',
    initial: 'M',
    birthday: 'March 24, 1997',
    position: 'Main Dancer, Sub Vocalist',
    summary: 'Elegant and graceful, Mina is admired for her refined dancing style and calm personality.',
    bio: 'Born in Texas and raised in Japan, Mina trained in ballet for over a decade before joining JYP Entertainment. Her graceful performances have become one of TWICE’s defining strengths.',
    socials: {
      instagram: 'https://www.instagram.com/mina_sr_my/',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'dahyun',
    name: 'Dahyun',
    role: 'Lead Rapper',
    initial: 'D',
    birthday: 'May 28, 1998',
    position: 'Lead Rapper, Sub Vocalist',
    summary: 'Known for her bright personality, quick wit, and entertaining variety show appearances.',
    bio: 'Dahyun gained attention before debut through her famous "eagle dance." She has become one of TWICE’s most recognizable entertainers while contributing as both a rapper and vocalist.',
    socials: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'chaeyoung',
    name: 'Chaeyoung',
    role: 'Main Rapper',
    initial: 'C',
    birthday: 'April 23, 1999',
    position: 'Main Rapper, Sub Vocalist',
    summary: 'A talented rapper with a creative personality who enjoys drawing, songwriting, and fashion.',
    bio: 'Chaeyoung is known for her unique artistic style and has participated in writing lyrics for numerous TWICE songs. She is also recognized for her individuality and creativity.',
    socials: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    }
  },

  {
    id: 'tzuyu',
    name: 'Tzuyu',
    role: 'Lead Dancer',
    initial: 'T',
    birthday: 'June 14, 1999',
    position: 'Lead Dancer, Sub Vocalist, Visual, Maknae',
    summary: 'The youngest member of TWICE, admired for her visuals, graceful performances, and steady improvement.',
    bio: 'Originally from Tainan, Taiwan, Tzuyu debuted with TWICE at just 16 years old. She is widely recognized for her visuals and has steadily grown into a confident performer and vocalist.',
    socials: {
      instagram: 'https://www.instagram.com/thinkaboutzu/',
      twitter: '#',
      tiktok: '#'
    }
  }
];

/**
 * Checks whether a single image URL actually loads.
 * Resolves the path on success, resolves null on failure — never rejects,
 * so Promise.all() below can't short-circuit on a missing file.
 */
function checkImageExists(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => resolve(null);
    img.src = path;
  });
}

/**
 * Returns a Promise resolving to only the photo paths that actually exist
 * for a given member, checking up to MAX_MEMBER_PHOTOS (10) files.
 * Order is preserved (1.jpg, 2.jpg, ... in sequence), gaps are skipped.
 */
async function getMemberPhotos(id) {
  const candidates = Array.from(
    { length: MAX_MEMBER_PHOTOS },
    (_, i) => `assets/members/${id}/${i + 1}.jpg`
  );

  const results = await Promise.all(candidates.map(checkImageExists));
  return results.filter(Boolean);
}
