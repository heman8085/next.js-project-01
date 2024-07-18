// pages/aboutus/index.js
import Link from "next/link";
import teamDetails from "../team"

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {teamDetails.map((member) => (
          <li key={member.id}>
            <Link href={`/aboutUs/${member.id}`}>
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
