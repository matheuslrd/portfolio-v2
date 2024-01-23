type Props = {
  icon: React.ReactNode;
  text: string;
};

function SkillCard({ icon, text }: Props) {
  return (
    <div className="Skill-Card">
      {icon}
      <p className="Text-Skill">{text}</p>
    </div>
  );
}

export default SkillCard;
