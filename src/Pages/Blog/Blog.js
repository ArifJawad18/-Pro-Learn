import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='mt-3'>
  
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>what is `cors`? </Accordion.Header>
        <Accordion.Body>
        CORS is a mechanism which aims to allow requests made on behalf of you and at the same time block some requests made by rogue JS and is triggered whenever you are making an HTTP request to: a different domain (eg. site at example.com calls api.com) a different sub domain (eg. site at example.com calls api.example.com) a different port (eg. site at example.com calls example.com:3001) a different protocol (eg. site at https://example.com calls http://example.com) This mechanism prevents attackers that plant scripts on various websites (eg. in ads displayed via Google Ads) to make an AJAX call to www.yourbank.com and in case you were logged in making a transaction using *your* credentials.
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?
        </Accordion.Header>
        <Accordion.Body>
        PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?
        </Accordion.Header>
        <Accordion.Body>
        Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     </div>
    
    );
};

export default Blog;