declare module 'portfolioData' {
 
  interface PortfolioData {
    header: {
      title: string;
      content: string;
    };
    about: {
      title: string;
      content: string;
    };
    projects: {
      title: string;
      content: string;
    };
    skills: {
      category: string;
      skills: string[];
    }[];
    contact: {
      title: string;
      content: string;
    };
  }

  const portfolioData: PortfolioData;
  export default portfolioData;
}