import { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'
import AddComponent from './AddComponent'

class SingleBook extends Component {
  state = {
    selected: false,
    selectComment:false,
  }

  render() {
    return (
        <Col>
        <Card key={this.props.book.asin} 
        onClick={()=>{
            this.setState({ selected: !this.state.selected });
            this.setState({ selectComment: !this.state.selectComment });
          }}
         style={{  width: '18rem', border: this.state.selected ? '3px solid red' : '1px solid primary ' }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body style={{height:'10rem'}}>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
         
        </Card.Body>
      </Card>

      {this.state.selectComment ? <CommentArea id={this.props.book.asin}/>  : ""   }
      {this.state.selectComment ? <AddComponent id={this.props.book.asin} /> : ""}
      </Col>

     

    )
  }
}

export default SingleBook
