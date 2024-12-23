import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { ContentWrapper, MiddleBlockSection } from "./styles";
import { Container } from "../Block/styles";
import "./ProjectDomain.scss";

interface MiddleBlockProps {
  title: string;
}

const ProjectDomain = ({ title }: MiddleBlockProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabContent = [
    {
      title: "LITERATURE SURVEY",
      content: `With the advancement of technology almost all institutions are moving into the digital space due to in speed, efficiency 
                and cost effectiveness and the water board is no deferent. We in collaboration of Research and Development Centre, 
                Meewatura aim assist this transition while utilizing newer and enhanced technologies with the use of the data gathered 
                from the Mahaweli river. The waterboard currently possesses a great amount of data while also having the relevant 
                sensors to gather them. But there’s currently no way to process or visualize the ever-growing set of data gathered 
                through their sensors. In summary even though there’s the means to gather the data there’s no way of efficiently no 
                way to utilize the data. 
                In order to tackle this, we aim to provide a dashboard that updates in real time while also providing sensor integration 
                system. And in order to provide the relevant functionalities, studies related to the current sensors that are being utilized 
                and what functionalities and features they provide while also considering how will these sensors integrate within the 
                application that is being created would be the focus. Furthermore, studies regarding relevant architectures such as the 
                publisher subscriber architecture would also fall in to one of the main focus areas since that would be a main pillar of 
                the research. 
                Currently the water board has no software or platform to visualize the data and handling the sensors through a user 
                interface. Currently they gather all the data through excel sheet and manually process them and there’s no way to handle 
                the sensors through an interface because there is no unified interface to handle them. Considering all these factors the 
                water board requested a unified dashboard handling these functionalities since that may help them process information 
                in a more efficient manner and this may also benefit them since it would require less human interaction since most of 
                these will be automated and available through just a click of a button. 
                In regards for a similar solution, a study done by the Institute for Geoinformatics, University of Munster presents an 
                article named “semantically enabled sensor plug & play for the sensor web” [1] which discusses about the Sensor Plug 
                & Play infrastructure for the sensor web, with minimal human interaction. While quite similar the technology being 
                used and the sensors that are being would be quite different. While gaining the knowledge that is available through the 
                mentioned article, the aim would be to create a more improved and refined version that would effectively handle the 
                sensors provided by the water board.`,
    },
    {
      title: "RESEARCH PROBLEM",
      content: `When considering the research problem, the issue is currently within the water board there’s no dedicated system to 
                showcase and visualize all the data that is being gathered through the sensors. Furthermore, the lack of plug n play 
                sensor detection and integration systems available that are configured for the water boards specifications while also 
                utilizing new technologies available to increase the speed and effectiveness of the whole process can configured as one 
                of the research problems.`,
    },
    {
      title: "RESEARCH GAP",
      content: `When considering the research gap, even with the existing solutions and researches the main issue would be that none 
                of it is tailored towards the specific requirements of the water board.  Most of the current solutions are tailored toward 
                the general need and since the water boards is a major institution the specification of the software requirements tends 
                to be specific. And considering that the application should be developed to the current and newer versions of the 
                available technologies and the research paper and articles tend to be outdated when considering the time that they were 
                released. 
                The current procedure that the water board is following to gather the data is considerably outdated since even though 
                there are sensors available and are being used to this there is no automated way of visualizing it nor a system to process 
                the gathered data. A system that visualizes the specific attributes that affect the water quality and a sensor detection and 
                integration system that lets the user handle the sensors specific to gathering data on water quality is something that the 
                water board is lacking.`,
    },
    {
      title: "RESEARCH OBJECTIVE",
      content: `The main objective within this research would be to provide the water board with a system that helps the process of 
                gathering and visualising data while also making the process of handling the sensors easier and more efficient. The 
                goal would be to minimize the human interactions that are occurring through the process by making the manual 
                processes, automated by providing a sort of a plug & play solution when considering the sensors. To elaborate the 
                objectives that are to complete are as followed, 
                • Realtime Dashboard with the attributes related to the water quality. 
                ▪ A dashboard that gathers data from gathered from the sensors in the Mahaweli river and visualizing 
                the data and showcasing in an efficient user interface which is also created to the needs of the water 
                board while also including the ability to update the data within the dashboard in real-time. Furthermore, 
                the dashboard should also include the ability to generate a report based on the data within the 
                dashboard. 
                
                • A plug & play sensor integration system. 
                ▪ A plug & play sensor integration and fault detection system that is specifically tailored towards the 
                specifications the water board. This should include a user interface that an individual within the water 
                board can use to view an interact with the available sensors. This also includes the creation of an 
                algorithm, while also taking considering architectures such as Publish-Subscribe Architecture. 
                
                • An SMS service the notifies the relevant users within the water board. 
                ▪ As mentioned within the previous objective a service should be available that has the ability to send a 
                notification when any available sensor fails or is not detected. `,
    },
    {
      title: "METHODOLOGY",
      content: `This research done through the collaboration of the Development Centre, Meewatura will focus on providing an 
                efficient and reliable water quality management system that would be tailored according to their needs. In order achieve 
                this data from the Mahaweli river will be utilized, and these will be provided by the research centre. Furthermore, 
                access to their sensors will also be provided in order to create the dashboard that would be updating in real time. In 
                order create the sensor detection and integration functionality these will also be used while also conducting studies 
                related to publisher subscriber architecture [2] which would assist on the development of the mention functionality.  `,
    },
    {
      title: "TECHNOLOGIES",
      content: `In order for the project to successfully reach completion various technologies will be utilized. The technologies will 
                be as follows, 
                Programming Languages:  
                • React 
                • Node 
                Database: 
                • MongoDB Atlas  
                Notification System: 
                • notify (SMS) 
                Version Control:  
                • GitHub 
                Cloud Services:  
                • Hostinger 
                `,
    },
  ];

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Container>
            <h6>{title}</h6>
            <div className="container">
              <div className="tabs">
                {tabContent.map((tab, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={`radio-${index + 1}`}
                      name="tabs"
                      checked={activeTab === index + 1}
                      onChange={() => setActiveTab(index + 1)}
                    />
                    <label className="tab" htmlFor={`radio-${index + 1}`}>
                      {tab.title}
                    </label>
                  </div>
                ))}
                <span
                  className="glider"
                  style={{
                    transform: `translateX(${(activeTab - 1) * 100}%)`,
                  }}
                />
              </div>
            </div>
            <div className="tab-content">
              <p>{tabContent[activeTab - 1].content}</p>
            </div>
          </Container>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ProjectDomain);
