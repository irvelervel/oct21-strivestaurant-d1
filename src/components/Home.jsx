import { Carousel, Container, Row, Col } from 'react-bootstrap'
import dishes from '../data/menu.json'
// dishes is the array with 5 objects inside of it (each one being a pasta dish)

// .map() is an array method that modifies the objects and returns to you a new array
// const myArray = [1, 2, 3]
// const newArray = myArray.map(element => element + 1)
// newArray is now [2, 3, 4]

const Home = () => (
    <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <h2 className="my-2">Welcome to Strivestaurant</h2>
                <Carousel>
                    {
                        dishes.map(dish => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={dish.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Col>
        </Row>
    </Container>
)

export default Home