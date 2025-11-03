import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Loylo.club has transformed how I shop locally. I love earning points at my favorite café and redeeming them at the gym nearby. It's so convenient having one app for everything!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "As a small business owner, Loylo.club has been a game-changer. The shared customer base has brought in new customers I never would have reached, and the setup was incredibly easy.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "I've tried so many loyalty programs, but Loylo.club is the first one that actually works everywhere. No more juggling multiple apps or cards. It's exactly what I needed.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "As a small business owner, Loylo.club has been a game-changer. The shared customer base has brought in new customers I never would have reached, and the setup was incredibly easy.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Loylo.club has transformed how I shop locally. I love earning points at my favorite café and redeeming them at the gym nearby. It's so convenient having one app for everything!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Be the first to know when we launch'];
