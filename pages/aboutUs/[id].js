// pages/aboutus/[id].js
import { useRouter } from "next/router";
import teamDetails from "../team"

function TeamMember() {
  const router = useRouter();
  const { id } = router.query;
  const member = teamDetails.find((m) => m.id === parseInt(id));

  if (!member) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamMember;
