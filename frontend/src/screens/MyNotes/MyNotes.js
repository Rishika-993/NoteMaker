import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const MyNotes = () => {
  return (
      <MainScreen title="Welcome back ...">
          <Link to="/createnote">
              <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                  Create New Note
              </Button>
          </Link>
          {/* <div className='notes'>
              <h1>My Notes</h1>
              <div className='note'>
                  <h2>Note Title</h2>
                  <p>This is a sample note content. You can edit or delete this note.</p>
                  <button className='btn btn-primary'>Edit</button>
                  <button className='btn btn-danger'>Delete</button>
              </div>
          </div> */}
      </MainScreen>
  )
}

export default MyNotes