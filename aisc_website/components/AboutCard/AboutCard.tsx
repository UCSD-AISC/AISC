import Image from "next/image";

type member = {
  name: string;
  photo: string;
  roles: string[];
  currentTeam: string;
};

const AboutCard = (member: member) => {
  return (
    <div className="bg-neutral-primary-soft flex flex-col justify-center min-w-50 max-w-sm min-h-93 p-6 border border-default rounded-2xl shadow-xs animate-fade-in-soft hover:-translate-y-3 transition-all duration-200">
      <div className="relative w-full h-44 mb-6  bg-white shadow-sm rounded-2xl">
        <Image
          src={member.photo !== "" ? `/member_photos/${member.photo}` : "/member_photos/blank-profile-picture.webp"}
          alt={member.name}
          fill
          className="object-contain"
        />
      </div>
      <h5 className="mb-3 text-xl font-semibold tracking-tight text-heading leading-6 flex justify-center items-center text-indigo-400 dark:text-indigo-300">{member.name}</h5>
      <p className="text-sm dark:text-gray-300">
        {(member.currentTeam === "Education" || member.currentTeam === "Technology" ? member.roles.toSorted((a, b) => {
          if (member.currentTeam === "Education") {
            return b === "Education Fellow" ? 1 : -1;
          }
          else {
            return b === "Software Developer" ? 1 : -1;
          }
        }) : member.roles).join(", ")}
      </p>
    </div>
  );
}

export default AboutCard;