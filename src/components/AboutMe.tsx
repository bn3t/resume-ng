"use client";

import { BookUser, Globe, Linkedin, Mail, Smartphone, Twitter } from "lucide-react";
import { Resume } from "../resume";
import Title from "./Title";

interface AboutMeProps {
  address: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
  country: string;
  profiles: Resume["basics"]["profiles"];
  website: string;
}

const AboutMe = ({ address, email, phone, postalCode, country, profiles, city, website }: AboutMeProps) => {
  const websiteWithoutProtocol = website.replace(/.*?:\/\//g, "");
  return (
    <>
      <Title title="About Me" />

      <ul className="grid grid-cols-2 justify-start space-y-4 sm:grid-cols-1">
        <li className="flex flex-row space-x-4 text-sm">
          <BookUser className="h-6 w-6 sm:h-4 sm:w-4" />
          <div>
            {address}
            <br />
            {postalCode} {city}
            <br />
            {country}
          </div>
        </li>
        <li className="flex flex-row items-center space-x-4 text-sm">
          <Mail className="h-6 w-6 sm:h-4 sm:w-4" />
          <div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </li>
        <li className="flex flex-row items-center space-x-4 text-sm">
          <Smartphone className="h-6 w-6 sm:h-4 sm:w-4" />
          <div>{phone}</div>
        </li>
        <li className="flex flex-row items-center space-x-4 text-sm">
          <Globe className="h-6 w-6 sm:h-4 sm:w-4" />
          <div>
            <a href={website}>{websiteWithoutProtocol}</a>
          </div>
        </li>
        {profiles.map((profile) => (
          <li key={profile.network} className="flex flex-row items-center space-x-4 text-sm">
            {profile.network === "linkedin" && <Linkedin className="h-6 w-6 sm:h-4 sm:w-4" />}
            {profile.network === "twitter" && <Twitter className="h-6 w-6 sm:h-4 sm:w-4" />}
            <a href={profile.url}>{profile.username}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutMe;
