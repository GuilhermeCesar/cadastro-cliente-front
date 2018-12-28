import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Jumbotron, Row} from 'reactstrap'
import '../css/body.css';

export default () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Essentia</h1>
            <p className="lead center">Aqui  você acompanha os seus clientes</p>
        <hr/>
        <Row className="center">
          <p className="lead">
              <Link href="/customers">
                  <Button color="primary">Ver Clientes</Button>
              </Link>
          </p>
        </Row>
      </Jumbotron>
    </div>
  )