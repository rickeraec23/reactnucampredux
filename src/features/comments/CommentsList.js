import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";
import CommentForm from "./CommentForm";

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);
  return comments && comments.length > 0 ? (
    <Col md="5" className="m-1">
      <h4>Comments</h4>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
      <CommentForm campsiteId={campsiteId} />
    </Col>
  ) : (
    <Col md="5" className="m-1">
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;
