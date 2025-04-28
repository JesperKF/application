"use client";
import Accordion from "./Accordion";

const Boxthree = () => {
  return (
    <div className="w-full border-b border-white">
      <Accordion title="ABOUT">
        <p className="text-lg font-light">
          Mit navn er Jesper, jeg er 26 år og studerer til multimediedesigner på
          KEA, hvor jeg i øjeblikket går på 3. semester. Jeg har valgt at
          specialisere mig i Frontendudvikling, da jeg brænder for at skabe
          brugervenlige og æstetiske digitale løsninger. Samtidig har jeg en god
          forståelse for grafisk design og contentproduktion, hvilket gør mig i
          stand til at tænke helhedsorienteret, når det kommer til digitale
          brugeroplevelser. <br></br>Jeg er særligt optaget af, hvordan design
          og kode spiller sammen – både når det gælder det visuelle udtryk og
          den tekniske funktionalitet. Jeg elsker at nørde med detaljer, finde
          kreative løsninger og følge med i nye teknologier og trends inden for
          webudvikling og digitalt design. Det motiverer mig at blive udfordret
          og lære nyt, og jeg trives i miljøer hvor man eksperimenterer og
          udvikler sig gennem praksis og samarbejde.
        </p>
      </Accordion>
    </div>
  );
};

export default Boxthree;
