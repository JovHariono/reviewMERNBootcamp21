import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageBarangCreate = () => {
    const navigate = useNavigate()

  return (
    <>
      <Container className="mt-4">
        <Row className="d-flex justify-content-center mb-3">
          <Col md={7} className="d-flex justify-content-center">
            <h4>Buat Barang</h4>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-3">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-3">Nama Barang</Card.Subtitle>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Nama jasa/barang cucian" className="bg-body-tertiary" />
                  <Form.Text>
                    Harap diisi dengan nama jasa/layanan laundry
                  </Form.Text>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={7} className="d-flex justify-content-end gap-3">
            <Button variant="danger" onClick={() => navigate("/")}>Batal</Button>
            <Button>Simpan</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageBarangCreate;
