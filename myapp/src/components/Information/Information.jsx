import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Information() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header variant="success">Rozsuwać</Accordion.Header>
          <Accordion.Body>
            <h5>
              Zapraszamy do komfortowego apartamentu na piątym piętrze,
              zlokalizowanego w sercu miasta ul. Juroviecka.{" "}
            </h5>{" "}
            <br />
            Jest to przestronne, słoneczne i klimatyzowane mieszkanie. Oddanę do
            użytku w 2021 roku.
            <br />
            <br />
            Mieszkanie składa się z reprezentacyjnego holu, przestronnego salonu
            z marmurowym kominkiem, oddzielnej kuchni oraz trzech sypialni, w
            tym jednej z łazienką z wanną. Druga łazienka z prysznicem jest
            dostępna z holu. Z okien i tarasu rozciąga się malowniczy widok na
            centrum miasta. Wysokość mieszkania na tym piętrze wynosi 3,0 m.
            Kuchnia w aneksie - zabudowana oraz wyposażona w sprzęt AGD. Obiekt
            z ochroną.
            <br />
            <br />
            Lokalizacja apartamentu - umożliwia łatwy dostęp do komunikacji
            miejskiej. W okolicy znajdują się liczne sklepy, restauracje,
            kawiarnie oraz tereny rekreacyjne i sportowe. <br />
            <br />
            Cena apartamentu wynosi 750,000 PLN (7645 PLN/m2), a dodatkowo
            40,000 PLN za miejsce parkingowe, co daje łączną sumę 790,000 PLN.{" "}
            <br />
            <br />
            <h5>Oferta dostępna pod numerem</h5>
            575 376 296 <br />
            Viktar Kalosha
            <br />
            <br />
            Oferujemy dogodne warunki kredytowe przy zakupie nieruchomości i
            pomagamy w załatwieniu formalności związanych z uzyskaniem kredytu
            hipotecznego. SERDECZNE ZAPRASZAMY !!!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Information;
