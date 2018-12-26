import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Jumbotron, Row} from 'reactstrap'


export default () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Essentia</h1>
        <p className="lead">Aqui  você poderá acompanhar os seus clientes</p>
        <hr/>
        <Row>
          <p className="lead">
              <Link href="/customers">
                  <Button color="primary">Ver Clientes</Button>
              </Link>
          </p>
        </Row>
      </Jumbotron>
    </div>
  )