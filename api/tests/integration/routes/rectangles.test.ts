process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

import { RectangleModel } from '../../../src/models';
import App from '../../../src/app';

chai.should();
chai.use(chaiHttp);

describe('Rectangles', () => {
  beforeEach((done) => {
    RectangleModel.remove({}, () => { 
      done();           
    });        
  });

  /*
   * Test the /GET route
   */
  describe('/GET rectangles', () => {
      it('it should GET all the rectangles', (done) => {
        chai.request(App)
            .get('/api/rectangles')
            .end((_err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
});
