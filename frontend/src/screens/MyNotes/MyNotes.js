import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import notes from "../../data/notes"

const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
        }
    };

    return (
        <MainScreen title="Welcome back ...">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>

            <Accordion defaultActiveKey="0">
                {notes.map((note, index) => (
                    <Accordion.Item eventKey={index.toString()} key={note._id}>
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: 'flex', alignItems: 'center' }}>
                                <Accordion.Button
                                    as="div"
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        fontSize: 18,
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        padding: 0
                                    }}
                                >
                                    {note.title}
                                </Accordion.Button>
                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button
                                        variant="danger"
                                        className='mx-2'
                                        onClick={() => deleteHandler(note._id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>

                            <Accordion.Body>
                                <Card.Body>
                                    <h4>
                                        <Badge bg="success" className='text-white'>
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>{note.content}</p>
                                        <footer className="blockquote-footer">
                                            Created on - Date
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                ))}
            </Accordion>
        </MainScreen>
    );
};

export default MyNotes;
