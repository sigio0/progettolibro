import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import CommentList from "./CommentList";
import SingleComment from "./SingleComment";

class CommentArea extends Component {


    fetchListComment = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.id, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTc0MDdmMzA0NjAwMWFlNTlmNjAiLCJpYXQiOjE3MTQ0ODUwNTksImV4cCI6MTcxNTY5NDY1OX0.kj5gmG-JSA9LuXfRAWV41P5EGJTpwCIzGSOukCqKKFY"
            }
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(obj => {
          const comment = obj.map(e=>e.comment);
          this.setState({arrayComment:comment});
});

        
    }

state = {
    arrayComment : []
}




componentDidMount(){
this.fetchListComment();
}

    render(){
        



        return(
<>
{this.state.arrayComment.length > 1 ? <CommentList commenti={this.state.arrayComment}/> : <SingleComment commento={this.state.arrayComment}/>}

</>
        )
    }
}

export default CommentArea;