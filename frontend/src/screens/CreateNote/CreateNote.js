import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [validationError, setValidationError] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  const notesCreate = useSelector((state) => state.notesCreate);
  const { loading, error, note } = notesCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setValidationError("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !category.trim()) {
      setValidationError("Please fill in all the required fields.*");
      return;
    }

    setValidationError("");

    dispatch(createNote(title, content, category));

    resetHandler();
    history("/mynotes");
  };

  return (
    <MainScreen title="Create a Note" variant="full">
      <Card>
        <Card.Header>Create a new Note</Card.Header>

        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && (
              <ErrorMessage variant="danger">
                {error}
              </ErrorMessage>
            )}

            {validationError && (
              <ErrorMessage variant="warning">
                {validationError}
              </ErrorMessage>
            )}

            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => {
                  setTitle(e.target.value);
                  setValidationError("");
                }}
              />
            </Form.Group>

            <Form.Group controlId="content" className="mb-3">
              <Form.Label>
                Content * (Accepts Markdown format with a preview)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={content}
                placeholder="Enter the content"
                onChange={(e) => {
                  setContent(e.target.value);
                  setValidationError("");
                }}
              />
            </Form.Group>

            {content && (
              <Card className="mb-3">
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="category" className="mb-3">
              <Form.Label>Category *</Form.Label>
              <Form.Control
                type="text"
                value={category}
                placeholder="Enter the category"
                onChange={(e) => {
                  setCategory(e.target.value);
                  setValidationError("");
                }}
              />
            </Form.Group>

            {loading && <Loading size={50} />}

            <Button type="submit" variant="primary">
              Create Note
            </Button>

            <Button
              className="mx-2"
              variant="danger"
              type="button"
              onClick={resetHandler}
            >
              Reset Fields
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;