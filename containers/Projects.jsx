import React from "react";

import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4 flex-wrap">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Projects</h4>
          </div>
          <div className="credential pl-4">
            <h4 className="display-3 text-info">Demo Credentials</h4>
            <p>Admin Access : admin@email.com | Password : 123456789</p>
            <p style={{ marginBottom: 0 }}>
              User : abc1@email.com | Password : 123456789
            </p>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {projects.map((data, i) => {
            return <ProjectsCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
