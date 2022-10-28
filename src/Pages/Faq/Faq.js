import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='mt-3'>
    
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How long we deliver your first blog post? </Accordion.Header>
            <Accordion.Body>
            It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the main challenges of?</Accordion.Header>
            <Accordion.Body>
            Common issues in.... Poor quality of data.... Non-representative training data. ... Overfitting and Underfitting. ... Monitoring and maintenance. ... Getting bad recommendations. ... Lack of skilled resources. ... Customer Segmentation.
             
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is the future?
            </Accordion.Header>
            <Accordion.Body>
            From predicting the spread of the COVID-19 virus to supporting cutting-edge cancer research, C & C++ can disrupt and transform every single segment of society.
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What is the limitations?
            </Accordion.Header>
            <Accordion.Body>
            Image result Poor transfer learning ability, reusability of modules, and integration. Systems are opaque, making them very hard to debug. Performance cannot be audited or guaranteed at the 'long tail' They encode correlation, not causation or ontological relationships.
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
         </div>
    );
};

export default Faq;