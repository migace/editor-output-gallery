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

  /*
   * Test the /POST route
   */
  describe('/POST rectangels', () => {
    it('it should create a rectangle using POST method', (done) => {
      const testRectangle = {
	      name: 'Test rectangle',
	      styles: JSON.stringify({
          border: '2px',
          color: '#000',
          'font-size': '24px' 
        }),
      };

      chai.request(App)
        .post('/api/rectangles')
        .send(testRectangle)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('name').eql(testRectangle.name)
          res.body.should.have.property('styles').eql(testRectangle.styles);
          done();
        });
    });

    it('it should not POST a rectangle without name field', (done) => {
      const testRectangle = {
	      styles: JSON.stringify({
          border: '2px',
          color: '#000',
          'font-size': '24px' 
        }),
      };

      chai.request(App)
        .post('/api/rectangles')
        .send(testRectangle)
        .end((_err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('name');
          res.body.errors.name.should.have.property('kind').eql('required');
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe('/GET/:id rectangle', () => {
    it('it should GET a rectangle by the given id', (done) => {
      const testRectangle = new RectangleModel({
        name: 'Test',
        styles: JSON.stringify({
          border: '2px',
        }),
      });

      testRectangle.save((_err, rectangle) => {
        chai.request(App)
          .get(`/api/rectangles/${rectangle.id}`)
          .end((_err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body.should.have.property('name').eql(testRectangle.name)
            res.body.should.have.property('styles').eql(testRectangle.styles);
            res.body.should.have.property('_id').eql(rectangle.id);
            done();
          });
      });
    });
  });
});
