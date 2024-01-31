import { ProcessedResume } from "../schema/resume";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Header from "./Header";
import Languages from "./Languages";
import Skills from "./Skills";

interface Page0Props {
  basics: ProcessedResume["basics"];
  skills: ProcessedResume["skills"];
  languages: ProcessedResume["languages"];
  current: ProcessedResume["current"];
}

const Page0 = ({ basics, skills, current, languages }: Page0Props) => {
  return (
    <>
      <Header name={basics.name} role={basics.label} summary={basics.summary} />
      <div className="flex flex-col gap-8 sm:flex-row">
        <aside className="w-full sm:w-1/5">
          <AboutMe
            address={basics.location.address}
            email={basics.email}
            phone={basics.phone}
            postalCode={basics.location.postalCode}
            city={basics.location.city}
            country={basics.location.countryCode}
            profiles={basics.profiles}
            website={basics.website}
          />
          <Skills skills={skills} />
          <Languages languages={languages} />
        </aside>
        <div className="w-full sm:w-4/5">
          <Experience work={current} />
        </div>
      </div>
    </>
  );
};

export default Page0;
