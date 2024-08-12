import header from '../../03-organisms/header/header.twig';
import headerData from '../../03-organisms/header/header.yml';
import hero from '../../03-organisms/hero/hero.twig';
import heroData from '../../03-organisms/hero/hero.yml';
import speakers from '../../03-organisms/speakers/speakers.twig';
import speakersData from '../../03-organisms/speakers/speakers.yml';
import schedule from '../../03-organisms/schedule/schedule.twig';
import scheduleData from '../../03-organisms/schedule/schedule.yml';
import venue from '../../03-organisms/venue/venue.twig';
import venueData from '../../03-organisms/venue/venue.yml';
import hotels from '../../03-organisms/hotels/hotels.twig';
import hotelsData from '../../03-organisms/hotels/hotels.yml';
import gallery from '../../03-organisms/gallery/gallery.twig';
import galleryData from '../../03-organisms/gallery/gallery.yml';
// import galleryDatas from '../../03-organisms/gallery/gallery.stories';
import sponsors from '../../03-organisms/sponsors/sponsors.twig';
import sponsorsData from '../../03-organisms/sponsors/sponsors.yml';
import tickets from '../../03-organisms/tickets/tickets.twig';
import ticketsData from '../../03-organisms/tickets/tickets.yml';
import contact from '../../03-organisms/contact/contact.twig';
import contactData from '../../03-organisms/contact/contact.yml';

export const Main = () => `
    <div class ="main-template">
        ${header(headerData)}
        ${hero(heroData)}
        ${speakers(speakersData)}
        ${schedule(scheduleData)}
        ${venue(venueData)}
        ${hotels(hotelsData)}
        ${gallery(galleryData)}
        ${sponsors(sponsorsData)}
        ${tickets(ticketsData)}
        ${contact(contactData)}
    </div>
`;

export default { title: 'Templates/EventWebsite' };
