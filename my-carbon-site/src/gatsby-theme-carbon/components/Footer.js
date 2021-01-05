import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    Please got through the documentation.
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        Information
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Organization' },
    { href: 'https://ibm.com/design', linkText: 'Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM design' },
  ],
  secondCol: [
    { href: 'https://ibm.com', linkText: 'About' },
    { href: 'https://ibm.com', linkText: 'Contact' },
    { href: 'https://ibm.com', linkText: 'Technical Support' },
    { href: 'https://ibm.com', linkText: 'Email' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
