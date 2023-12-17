"use client";

import { ProcessedResume } from "../resume";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Skills from "../components/Skills";

interface Page0Props {
  basics: ProcessedResume["basics"];
  skills: ProcessedResume["skills"];
  current: ProcessedResume["current"];
}

const Page0 = ({ basics, skills, current }: Page0Props) => {
  return (
    <>
      <Header name={basics.name} role={basics.label} summary={basics.summary} />
      <div className="flex flex-col gap-16 sm:flex-row">
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
        </aside>
        <div className="w-full sm:w-4/5">
          <Experience work={current} />
        </div>
      </div>
    </>
  );
};

export default Page0;
