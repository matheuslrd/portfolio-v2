import ServiceCard from '@components/ServiceCard';
import StyledServices from './styles';
import {
  Laptop,
  DeviceMobileCamera,
  Ruler,
  PersonArmsSpread,
} from '@phosphor-icons/react';

function Services() {
  return (
    <StyledServices>
      <section id="Services-Page">
        <h1 className="Services-Title" data-aos="zoom-in" data-aos-delay="50">
          Serviços
        </h1>
        <div className="Services-Container-Center">
          <ServiceCard
            icon={<Laptop size={28} weight="bold" />}
            title="Criação de WebSite"
            description="Desenvolvimento de sites, sistemas web, blogs e lojas online."
          />
          <ServiceCard
            icon={<DeviceMobileCamera size={28} weight="bold" />}
            title="Sites Responsivos"
            description={`Criação de sites responsivos para melhor
             visualização há todas resoluções.`}
          />
          <ServiceCard
            icon={<Ruler size={28} weight="bold" />}
            title="UI/UX Design"
            description={`Design de layouts para se adequar ao seu negócio
             e ser fiel ao desenvolvimento.`}
          />
          <ServiceCard
            icon={<PersonArmsSpread size={28} weight="bold" />}
            title="Códigos Semânticos"
            description={`Estratégia ao seu negócio, fazendo que 
            seu site apareça cada vez mais nas pesquisas e mais acessível.`}
          />
        </div>
        <div>
          <div id="Skills" />
        </div>
      </section>
    </StyledServices>
  );
}

export default Services;
