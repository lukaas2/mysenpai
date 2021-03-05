import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import MenuBar from './MenuBar'
import LandingPageCarousel from './LandingPageCarousel'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
      {MenuBar()}
      <Container fluid>
        <div className="m-4">
          <Row>
            <Col>
              <div className="shadow">{LandingPageCarousel()}</div>
            </Col>
            <Col>
              <div className="shadow">
                <Card bg="dark" text="white" className="text-center">
                  <Card.Body>
                    <Card.Title>MySenpai ist für Dich da!</Card.Title>
                    <Card.Text>
                      Du hast noch keinen Account? Dann besorg dir einen!
                    </Card.Text>
                    <Link to="/signup" className="btn btn-dark btn-outline-light">Registrieren</Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
