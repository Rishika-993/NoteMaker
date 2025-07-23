import MainScreen from '../../components/MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listNotes } from '../../actions/notesActions'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'

const MyNotes = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const notesList = useSelector((state) => state.notesList);
    const { loading, error, notes } = notesList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

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

    // const fetchNotes = async () => {
    //     const { data } = await axios.get('/api/notes');  //destructuring the response
    //     setNotes(data);
    // };

    useEffect(() => {
        dispatch(listNotes());
        if(!userInfo) {
            history('/'); // Redirect to login if user is not logged in
        }
    }, [dispatch]);

    return (
        <MainScreen title={`Welcome back ${userInfo.name}...`}>
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>
            {loading && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {notes?.map((note, index) => (
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
                                        Created on {" "}
                                        <cite title="Source Title">
                                            {note.createdAt.substring(0, 10)}
                                        </cite>
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
