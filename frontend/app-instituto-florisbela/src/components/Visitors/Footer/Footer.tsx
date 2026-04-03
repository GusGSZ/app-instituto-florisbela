import SchoolColumn from "./SchoolColumn";
import LinksColumn from "./LinksColumn";
import ContactColumn from "./ContactColumn";
import OpeningHoursColumn from "./OpeningHoursColumn";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-12 bg-white px-4 pb-10 pt-20">
        <SchoolColumn />

        <LinksColumn />

        <ContactColumn />

        <OpeningHoursColumn />

        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
