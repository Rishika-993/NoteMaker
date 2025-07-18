import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import notes from "../../data/notes"

const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
        }
    };

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <MainScreen title="Welcome back ...">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>

            {notes.map((note, index) => (
                <Card style={{ margin: 10 }} key={note._id}>
                    <Card.Header style={{ display: 'flex', alignItems: 'center' }}>
                        <span
                            onClick={() => toggleItem(index)}
                            style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                fontSize: 18,
                            }}
                        >
                            {note.title}
                        </span>
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

                    <Accordion activeKey={openItems[index] ? '1' : null}>
                        <Accordion.Collapse eventKey="1">
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
                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            ))}
        </MainScreen>
    );
};

export default MyNotes;
