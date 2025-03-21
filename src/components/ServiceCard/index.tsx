import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="Service" data-aos="zoom-in" data-aos-delay="50">
      <section className="Icon-Service">{icon}</section>
      <h3 className="Title-Service">{title}</h3>
      <p className="Text-Service">{description}</p>
    </div>
  );
}

export default ServiceCard;
