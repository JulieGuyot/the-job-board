import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className={props.className}>
      <Job
        className={"carreau-rouge"}
        title={"Full Time Sales Associate - Syndey Boutique"}
        city={"Sydney"}
        country={"Australie"}
        contractType={"CDI"}
      />
      <Job
        className={"carreau-vert"}
        title={"Agent de Sécurité - Pantin"}
        city={"Pantin"}
        country={"France"}
        contractType={"CDI"}
      />
      <Job
        className={"carreau-jaune"}
        title={"Responsable d'Atelier (H/F)"}
        city={"Paris"}
        country={"France"}
        contractType={"CDD"}
      />
      <Job
        className={"carreau-bleu"}
        title={"Chef de Projets"}
        city={"Paris"}
        country={"France"}
        contractType={"CDD"}
      />

      <Job
        className={"carreau-saumon"}
        title={"Développeur React.js"}
        city={"Paris"}
        country={"France"}
        contractType={"CDI"}
      />

      <Job
        className={"carreau-rouge"}
        title={"Sales Associate Stockholm"}
        city={"Stockholm"}
        country={"Suède"}
        contractType={"CDI"}
      />
      <Job
        className={"carreau-vert"}
        title={"Vendeur/se - Crans Montana"}
        city={"Crans-Montana"}
        country={"Suisse"}
        contractType={"CDI"}
      />
      <Job
        className={"carreau-jaune"}
        title={"CRM & Data Quality Analyst"}
        city={"New-York"}
        country={"USA"}
        contractType={"CDI"}
      />
      <Job
        className={"carreau-bleu"}
        title={"Infirmier (H/F)"}
        city={"Pantin"}
        country={"France"}
        contractType={"CDI"}
      />
    </div>
  );
};

export default Jobs;
