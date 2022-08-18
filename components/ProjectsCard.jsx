import React from "react";

import { Card, CardBody, Col, Button, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody className="projects_card">
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                <p className="description mt-3">
                  {data.tech.map((el, i) => {
                    return (
                      <Badge key={i} color="info" className="mr-1">
                        {el}
                      </Badge>
                    );
                  })}
                </p>

                {data.FrontEnd ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.FrontEnd}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                    <span className="nav-link-inner--text ml-1">FrontEnd</span>
                  </Button>
                ) : null}
                {data.BackEnd ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.BackEnd}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                    <span className="nav-link-inner--text ml-1">BackEnd</span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    outline
                    className="btn-icon"
                    color="info"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Visit</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
