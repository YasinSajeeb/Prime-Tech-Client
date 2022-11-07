import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>How long the course would take?</strong></Accordion.Header>
        <Accordion.Body>
          It will take less than 6 months to complete totally the course.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>What are the payment procedures?</strong></Accordion.Header>
        <Accordion.Body>
          You can pay through bKash, Nagad or Rocket payments.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Is there any certificate after completing the course?</strong></Accordion.Header>
        <Accordion.Body>
          Yes, we will grant you a certificate after finishing the course.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Faq;